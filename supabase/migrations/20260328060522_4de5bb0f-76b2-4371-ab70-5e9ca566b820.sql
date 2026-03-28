
CREATE TABLE public.in_progress_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text,
  status text NOT NULL DEFAULT 'active',
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.in_progress_projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read projects" ON public.in_progress_projects
  FOR SELECT TO anon, authenticated USING (true);

INSERT INTO public.in_progress_projects (title, description, status, display_order) VALUES
  ('AI Assistant Portfolio', 'Membantu pengunjung mengenal portfolio secara interaktif', 'active', 0),
  ('Amalize', 'Aplikasi pendamping ibadah harian Muslim', 'active', 1),
  ('Website Modern & Responsif', 'Lebih rapi dan nyaman di berbagai perangkat', 'active', 2);
