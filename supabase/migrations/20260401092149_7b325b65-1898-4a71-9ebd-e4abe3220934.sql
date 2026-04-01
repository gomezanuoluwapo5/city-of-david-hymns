CREATE TABLE public.prayer_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT 'Anonymous',
  request text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.prayer_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit prayer requests" ON public.prayer_requests FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Anyone can read prayer requests" ON public.prayer_requests FOR SELECT TO public USING (true);
CREATE POLICY "Anyone can update prayer requests" ON public.prayer_requests FOR UPDATE TO public USING (true);