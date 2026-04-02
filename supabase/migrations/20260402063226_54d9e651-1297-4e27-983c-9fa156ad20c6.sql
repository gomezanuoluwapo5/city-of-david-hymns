
-- Create church_events table
CREATE TABLE public.church_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by TEXT
);

-- Enable RLS
ALTER TABLE public.church_events ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Anyone can read events" ON public.church_events FOR SELECT TO public USING (true);
CREATE POLICY "Anyone can insert events" ON public.church_events FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Anyone can update events" ON public.church_events FOR UPDATE TO public USING (true);
CREATE POLICY "Anyone can delete events" ON public.church_events FOR DELETE TO public USING (true);

-- Add delete policy for prayer_requests
CREATE POLICY "Anyone can delete prayer requests" ON public.prayer_requests FOR DELETE TO public USING (true);
