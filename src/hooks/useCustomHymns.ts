import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Hymn } from "@/data/hymns";

interface CustomHymnRow {
  id: string;
  number: number;
  title: string;
  title_yoruba: string;
  verses: { english: string; yoruba: string }[];
  chorus: { english: string; yoruba: string } | null;
  solfa: string | null;
  chords: string | null;
  key: string | null;
  tempo: string | null;
  created_by: string | null;
}

export function useCustomHymns() {
  const [customHymns, setCustomHymns] = useState<Hymn[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCustomHymns = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("custom_hymns")
      .select("*")
      .order("number", { ascending: true });

    if (!error && data) {
      const mapped: Hymn[] = (data as unknown as CustomHymnRow[]).map((row) => ({
        number: row.number,
        title: row.title,
        titleYoruba: row.title_yoruba,
        verses: row.verses || [],
        chorus: row.chorus || undefined,
        solfa: row.solfa || undefined,
        chords: row.chords || undefined,
        key: row.key || undefined,
        tempo: row.tempo || undefined,
      }));
      setCustomHymns(mapped);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCustomHymns();
  }, [fetchCustomHymns]);

  return { customHymns, loading, refetch: fetchCustomHymns };
}

export async function saveCustomHymn(hymn: {
  number: number;
  title: string;
  title_yoruba: string;
  verses: { english: string; yoruba: string }[];
  chorus?: { english: string; yoruba: string } | null;
  solfa?: string;
  chords?: string;
  key?: string;
  tempo?: string;
  created_by?: string;
}) {
  const { error } = await supabase
    .from("custom_hymns")
    .upsert(
      {
        number: hymn.number,
        title: hymn.title,
        title_yoruba: hymn.title_yoruba,
        verses: hymn.verses as unknown as Record<string, unknown>[],
        chorus: hymn.chorus as unknown as Record<string, unknown> | null,
        solfa: hymn.solfa || null,
        chords: hymn.chords || null,
        key: hymn.key || null,
        tempo: hymn.tempo || null,
        created_by: hymn.created_by || null,
      },
      { onConflict: "number" }
    );

  return { error };
}
