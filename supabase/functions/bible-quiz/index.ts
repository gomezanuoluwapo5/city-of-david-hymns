import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { type, difficulty } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    let systemPrompt = "";
    let userPrompt = "";

    if (type === "quiz") {
      systemPrompt = "You are a Bible quiz master. Generate Bible trivia questions from the King James Version.";
      userPrompt = `Generate 1 Bible multiple-choice quiz question at ${difficulty || "medium"} difficulty. Return JSON with this exact structure:
{"question": "...", "options": ["A", "B", "C", "D"], "correct": 0, "explanation": "...", "reference": "Book Chapter:Verse"}
The "correct" field is the 0-based index of the correct option. Include a brief explanation and Bible reference.`;
    } else if (type === "verse_completion") {
      systemPrompt = "You are a Bible verse expert using the King James Version.";
      userPrompt = `Generate 1 verse completion challenge at ${difficulty || "medium"} difficulty. Pick a well-known KJV Bible verse, show part of it with blanks, and provide options. Return JSON:
{"verse_start": "For God so loved the world, that he gave his only begotten ___", "options": ["Son", "Spirit", "Angel", "Prophet"], "correct": 0, "full_verse": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", "reference": "John 3:16"}`;
    } else if (type === "guess_book") {
      systemPrompt = "You are a Bible scholar using the King James Version.";
      userPrompt = `Generate 1 "Guess the Bible Book" challenge at ${difficulty || "medium"} difficulty. Give a passage excerpt and ask which book it's from. Return JSON:
{"passage": "In the beginning God created the heaven and the earth.", "options": ["Genesis", "Exodus", "Psalms", "Isaiah"], "correct": 0, "explanation": "This is the opening verse of the Bible.", "reference": "Genesis 1:1"}`;
    } else {
      return new Response(JSON.stringify({ error: "Invalid type" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "return_question",
              description: "Return a Bible quiz question",
              parameters: {
                type: "object",
                properties: {
                  question: { type: "string" },
                  passage: { type: "string" },
                  verse_start: { type: "string" },
                  full_verse: { type: "string" },
                  options: { type: "array", items: { type: "string" } },
                  correct: { type: "number" },
                  explanation: { type: "string" },
                  reference: { type: "string" },
                },
                required: ["options", "correct", "reference"],
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "return_question" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited, please try again later." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI error" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    
    let questionData;
    if (toolCall?.function?.arguments) {
      questionData = typeof toolCall.function.arguments === "string" 
        ? JSON.parse(toolCall.function.arguments) 
        : toolCall.function.arguments;
    } else {
      // Fallback: parse from content
      const content = data.choices?.[0]?.message?.content || "";
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        questionData = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Could not parse AI response");
      }
    }

    return new Response(JSON.stringify(questionData), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("bible-quiz error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
