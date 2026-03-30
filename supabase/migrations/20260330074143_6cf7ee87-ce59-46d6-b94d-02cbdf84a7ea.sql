
CREATE TABLE public.hymn_overrides (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  hymn_number INTEGER NOT NULL,
  verse_index INTEGER,
  yoruba_text TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_by TEXT,
  UNIQUE (hymn_number, verse_index)
);

ALTER TABLE public.hymn_overrides ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read hymn overrides"
  ON public.hymn_overrides FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert hymn overrides"
  ON public.hymn_overrides FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update hymn overrides"
  ON public.hymn_overrides FOR UPDATE
  USING (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_hymn_overrides_updated_at
  BEFORE UPDATE ON public.hymn_overrides
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
