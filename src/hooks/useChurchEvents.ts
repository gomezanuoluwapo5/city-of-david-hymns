import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface ChurchEvent {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  location: string | null;
  created_at: string;
  created_by: string | null;
}

export function useChurchEvents() {
  const [events, setEvents] = useState<ChurchEvent[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("church_events")
      .select("*")
      .order("event_date", { ascending: true });

    if (!error && data) {
      setEvents(data as unknown as ChurchEvent[]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return { events, loading, refetch: fetchEvents };
}

export async function saveChurchEvent(event: {
  title: string;
  description?: string;
  event_date: string;
  location?: string;
  created_by?: string;
}) {
  const { error } = await supabase
    .from("church_events")
    .insert(event as any);

  // Send browser notification
  if (!error && Notification.permission === "granted") {
    try {
      new Notification("📅 New Church Event", {
        body: `${event.title}`,
        icon: "/favicon.ico",
      });
    } catch { /* ignore */ }
  }

  return { error };
}

export async function updateChurchEvent(id: string, event: {
  title?: string;
  description?: string;
  event_date?: string;
  location?: string;
}) {
  const { error } = await supabase
    .from("church_events")
    .update(event as any)
    .eq("id", id);
  return { error };
}

export async function deleteChurchEvent(id: string) {
  const { error } = await supabase
    .from("church_events")
    .delete()
    .eq("id", id);
  return { error };
}
