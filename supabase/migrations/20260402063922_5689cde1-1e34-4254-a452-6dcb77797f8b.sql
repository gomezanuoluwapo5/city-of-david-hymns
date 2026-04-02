
CREATE TABLE public.testimonies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL DEFAULT 'Anonymous',
  testimony TEXT NOT NULL,
  is_read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.testimonies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read testimonies" ON public.testimonies FOR SELECT TO public USING (true);
CREATE POLICY "Anyone can insert testimonies" ON public.testimonies FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Anyone can update testimonies" ON public.testimonies FOR UPDATE TO public USING (true);
CREATE POLICY "Anyone can delete testimonies" ON public.testimonies FOR DELETE TO public USING (true);
