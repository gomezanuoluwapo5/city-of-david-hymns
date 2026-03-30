import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface HymnOverride {
  hymn_number: number;
  verse_index: number | null; // null = chorus
  yoruba_text: string;
}

export function useHymnOverrides() {
  const [overrides, setOverrides] = useState<HymnOverride[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOverrides = async () => {
    const { data, error } = await supabase
      .from("hymn_overrides")
      .select("hymn_number, verse_index, yoruba_text");
    if (!error && data) {
      setOverrides(data as HymnOverride[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOverrides();
  }, []);

  const getOverride = (hymnNumber: number, verseIndex: number | null): string | null => {
    const o = overrides.find(
      (x) => x.hymn_number === hymnNumber && x.verse_index === verseIndex
    );
    return o ? o.yoruba_text : null;
  };

  return { overrides, loading, getOverride, refetch: fetchOverrides };
}

export async function saveHymnOverride(
  hymnNumber: number,
  verseIndex: number | null,
  yorubaText: string,
  updatedBy?: string
) {
  const { error } = await supabase.from("hymn_overrides").upsert(
    {
      hymn_number: hymnNumber,
      verse_index: verseIndex,
      yoruba_text: yorubaText,
      updated_by: updatedBy || null,
    },
    { onConflict: "hymn_number,verse_index" }
  );
  return { error };
}
