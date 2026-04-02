import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface PrayerRequest {
  id: string;
  name: string;
  request: string;
  is_read: boolean;
  created_at: string;
}

export function usePrayerRequests() {
  const [requests, setRequests] = useState<PrayerRequest[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("prayer_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setRequests(data as unknown as PrayerRequest[]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  return { requests, loading, refetch: fetchRequests };
}

export async function submitPrayerRequest(name: string, request: string) {
  const { error } = await supabase
    .from("prayer_requests")
    .insert({ name: name.trim() || "Anonymous", request: request.trim() } as any);
  return { error };
}

export async function markPrayerRead(id: string, isRead: boolean) {
  const { error } = await supabase
    .from("prayer_requests")
    .update({ is_read: isRead } as any)
    .eq("id", id);
  return { error };
}

export async function deletePrayerRequest(id: string) {
  const { error } = await supabase
    .from("prayer_requests")
    .delete()
    .eq("id", id);
  return { error };
}
