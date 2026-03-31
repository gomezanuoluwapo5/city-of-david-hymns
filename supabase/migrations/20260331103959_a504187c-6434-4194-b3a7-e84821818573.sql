CREATE TABLE public.custom_hymns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  number integer NOT NULL,
  title text NOT NULL,
  title_yoruba text NOT NULL,
  verses jsonb NOT NULL DEFAULT '[]'::jsonb,
  chorus jsonb DEFAULT NULL,
  solfa text DEFAULT NULL,
  chords text DEFAULT NULL,
  key text DEFAULT NULL,
  tempo text DEFAULT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  created_by text DEFAULT NULL,
  UNIQUE(number)
);

ALTER TABLE public.custom_hymns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read custom hymns" ON public.custom_hymns FOR SELECT TO public USING (true);
CREATE POLICY "Anyone can insert custom hymns" ON public.custom_hymns FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Anyone can update custom hymns" ON public.custom_hymns FOR UPDATE TO public USING (true);
CREATE POLICY "Anyone can delete custom hymns" ON public.custom_hymns FOR DELETE TO public USING (true);

CREATE TRIGGER update_custom_hymns_updated_at
  BEFORE UPDATE ON public.custom_hymns
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();