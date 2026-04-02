import { useState, useEffect } from "react";
import { ArrowLeft, Zap, BookOpen, Trophy, Brain, Flame, CheckCircle, XCircle, Loader2, RotateCcw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

type GameType = "quiz" | "verse_completion" | "guess_book" | null;
type Difficulty = "easy" | "medium" | "hard";

interface QuestionData {
  question?: string;
  passage?: string;
  verse_start?: string;
  full_verse?: string;
  options: string[];
  correct: number;
  explanation?: string;
  reference: string;
}

// Streak tracking via localStorage
const getStreak = () => {
  const data = localStorage.getItem("cod_bible_streak");
  if (!data) return { current: 0, best: 0, lastDate: "" };
  return JSON.parse(data);
};

const updateStreak = (correct: boolean) => {
  const streak = getStreak();
  const today = new Date().toISOString().split("T")[0];

  if (correct) {
    if (streak.lastDate === today) {
      streak.current += 1;
    } else {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
      streak.current = streak.lastDate === yesterday ? streak.current + 1 : 1;
    }
    streak.lastDate = today;
    streak.best = Math.max(streak.best, streak.current);
  }

  localStorage.setItem("cod_bible_streak", JSON.stringify(streak));
  return streak;
};

const getStats = () => {
  const data = localStorage.getItem("cod_bible_stats");
  if (!data) return { totalPlayed: 0, totalCorrect: 0 };
  return JSON.parse(data);
};

const updateStats = (correct: boolean) => {
  const stats = getStats();
  stats.totalPlayed += 1;
  if (correct) stats.totalCorrect += 1;
  localStorage.setItem("cod_bible_stats", JSON.stringify(stats));
  return stats;
};

interface BibleGamesScreenProps {
  onBack: () => void;
}

const BibleGamesScreen = ({ onBack }: BibleGamesScreenProps) => {
  const [gameType, setGameType] = useState<GameType>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [question, setQuestion] = useState<QuestionData | null>(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [streak, setStreak] = useState(getStreak());
  const [stats, setStats] = useState(getStats());

  const fetchQuestion = async (type: GameType) => {
    if (!type) return;
    setLoading(true);
    setQuestion(null);
    setSelected(null);
    setAnswered(false);

    try {
      const { data, error } = await supabase.functions.invoke("bible-quiz", {
        body: { type, difficulty },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setQuestion(data);
    } catch (e: any) {
      toast({ title: "Error loading question", description: e.message || "Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const startGame = (type: GameType) => {
    setGameType(type);
    fetchQuestion(type);
  };

  const handleAnswer = (index: number) => {
    if (answered || !question) return;
    setSelected(index);
    setAnswered(true);

    const isCorrect = index === question.correct;
    const newStreak = updateStreak(isCorrect);
    const newStats = updateStats(isCorrect);
    setStreak(newStreak);
    setStats(newStats);
  };

  const nextQuestion = () => {
    fetchQuestion(gameType);
  };

  // Main menu
  if (!gameType) {
    return (
      <div className="pb-24 max-w-lg mx-auto animate-fade-in">
        <div className="sticky top-0 z-10 glass border-b border-border/50 px-4 py-3 flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-1 rounded-xl hover:bg-muted transition-colors">
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-sm font-display">Bible Games</h2>
        </div>

        {/* Stats Bar */}
        <div className="px-5 pt-4 pb-2">
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-2xl bg-card border border-border shadow-card text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Flame size={14} className="text-primary" />
                <span className="text-lg font-bold text-foreground">{streak.current}</span>
              </div>
              <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Streak</p>
            </div>
            <div className="p-3 rounded-2xl bg-card border border-border shadow-card text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Trophy size={14} className="text-accent" />
                <span className="text-lg font-bold text-foreground">{streak.best}</span>
              </div>
              <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Best</p>
            </div>
            <div className="p-3 rounded-2xl bg-card border border-border shadow-card text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Zap size={14} className="text-primary" />
                <span className="text-lg font-bold text-foreground">
                  {stats.totalPlayed > 0 ? Math.round((stats.totalCorrect / stats.totalPlayed) * 100) : 0}%
                </span>
              </div>
              <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Accuracy</p>
            </div>
          </div>
        </div>

        {/* Difficulty Selector */}
        <div className="px-5 py-3">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Difficulty</p>
          <div className="flex gap-2">
            {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all capitalize ${
                  difficulty === d
                    ? "gradient-primary text-primary-foreground shadow-soft"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Game Cards */}
        <div className="px-5 space-y-3">
          <button
            onClick={() => startGame("quiz")}
            className="w-full flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all text-left group"
          >
            <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Brain size={24} className="text-primary-foreground" />
            </div>
            <div>
              <p className="text-base font-display text-foreground">Bible Quiz</p>
              <p className="text-xs text-muted-foreground font-body mt-0.5">Multiple-choice trivia from different Bible books</p>
            </div>
          </button>

          <button
            onClick={() => startGame("verse_completion")}
            className="w-full flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all text-left group"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <BookOpen size={24} className="text-accent" />
            </div>
            <div>
              <p className="text-base font-display text-foreground">Verse Completion</p>
              <p className="text-xs text-muted-foreground font-body mt-0.5">Fill in the missing words of Bible verses</p>
            </div>
          </button>

          <button
            onClick={() => startGame("guess_book")}
            className="w-full flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all text-left group"
          >
            <div className="w-14 h-14 rounded-2xl bg-church-pink/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Trophy size={24} className="text-church-pink" />
            </div>
            <div>
              <p className="text-base font-display text-foreground">Guess the Book</p>
              <p className="text-xs text-muted-foreground font-body mt-0.5">Identify which Bible book a passage is from</p>
            </div>
          </button>
        </div>
      </div>
    );
  }

  // Game screen
  return (
    <div className="pb-24 max-w-lg mx-auto animate-fade-in">
      <div className="sticky top-0 z-10 glass border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <button onClick={() => setGameType(null)} className="p-2 -ml-1 rounded-xl hover:bg-muted transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1">
          <h2 className="text-sm font-display capitalize">
            {gameType === "quiz" ? "Bible Quiz" : gameType === "verse_completion" ? "Verse Completion" : "Guess the Book"}
          </h2>
          <p className="text-[10px] text-muted-foreground capitalize">{difficulty} difficulty</p>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10">
          <Flame size={12} className="text-primary" />
          <span className="text-xs font-bold text-primary">{streak.current}</span>
        </div>
      </div>

      <div className="px-5 pt-6">
        {loading ? (
          <div className="text-center py-20 animate-fade-in">
            <Loader2 size={32} className="text-primary animate-spin mx-auto mb-4" />
            <p className="text-sm text-muted-foreground font-body">Generating question...</p>
          </div>
        ) : question ? (
          <div className="space-y-6 animate-fade-in">
            {/* Question */}
            <div className="p-5 rounded-2xl bg-card border border-border shadow-card">
              {question.question && (
                <p className="text-base font-display text-foreground leading-relaxed">{question.question}</p>
              )}
              {question.passage && (
                <div className="mt-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-2">Passage:</p>
                  <p className="text-sm text-foreground font-serif italic leading-relaxed">"{question.passage}"</p>
                </div>
              )}
              {question.verse_start && (
                <div className="mt-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-2">Complete this verse:</p>
                  <p className="text-sm text-foreground font-serif italic leading-relaxed">"{question.verse_start}"</p>
                </div>
              )}
            </div>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, i) => {
                let optionClass = "bg-card border-border hover:border-primary/30 hover:bg-primary/5";
                if (answered) {
                  if (i === question.correct) {
                    optionClass = "bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700";
                  } else if (i === selected && i !== question.correct) {
                    optionClass = "bg-red-50 dark:bg-red-950/30 border-red-300 dark:border-red-700";
                  } else {
                    optionClass = "bg-muted/30 border-border/50 opacity-50";
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={answered}
                    className={`w-full flex items-center gap-3 p-4 rounded-2xl border shadow-card transition-all text-left ${optionClass}`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                      answered && i === question.correct
                        ? "bg-green-500 text-white"
                        : answered && i === selected
                        ? "bg-red-500 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {answered && i === question.correct ? (
                        <CheckCircle size={16} />
                      ) : answered && i === selected ? (
                        <XCircle size={16} />
                      ) : (
                        String.fromCharCode(65 + i)
                      )}
                    </div>
                    <span className="text-sm text-foreground">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Result */}
            {answered && (
              <div className="space-y-4 animate-fade-in">
                <div className={`p-4 rounded-2xl border ${
                  selected === question.correct
                    ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
                    : "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800"
                }`}>
                  <p className={`text-sm font-semibold mb-1 ${
                    selected === question.correct ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"
                  }`}>
                    {selected === question.correct ? "🎉 Correct!" : "❌ Incorrect"}
                  </p>
                  {question.explanation && (
                    <p className="text-xs text-foreground/70 font-body leading-relaxed">{question.explanation}</p>
                  )}
                  {question.full_verse && (
                    <p className="text-xs text-foreground/70 font-serif italic mt-2 leading-relaxed">"{question.full_verse}"</p>
                  )}
                  <p className="text-[10px] text-muted-foreground mt-2 font-semibold">📖 {question.reference}</p>
                </div>

                <button
                  onClick={nextQuestion}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl gradient-primary text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-elevated transition-all"
                >
                  <RotateCcw size={14} />
                  Next Question
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-sm text-muted-foreground">Failed to load question.</p>
            <button onClick={() => fetchQuestion(gameType)} className="mt-4 text-primary text-sm font-semibold">
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BibleGamesScreen;
