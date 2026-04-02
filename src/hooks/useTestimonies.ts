import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface Testimony {
  id: string;
  name: string;
  testimony: string;
  is_read: boolean;
  created_at: string;
}

export function useTestimonies() {
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonies = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("testimonies")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setTestimonies(data as unknown as Testimony[]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchTestimonies();
  }, [fetchTestimonies]);

  return { testimonies, loading, refetch: fetchTestimonies };
}

export async function submitTestimony(name: string, testimony: string) {
  const { error } = await supabase
    .from("testimonies")
    .insert({ name: name.trim() || "Anonymous", testimony: testimony.trim() } as any);
  return { error };
}

export async function markTestimonyRead(id: string, isRead: boolean) {
  const { error } = await supabase
    .from("testimonies")
    .update({ is_read: isRead } as any)
    .eq("id", id);
  return { error };
}

export async function deleteTestimony(id: string) {
  const { error } = await supabase
    .from("testimonies")
    .delete()
    .eq("id", id);
  return { error };
}
