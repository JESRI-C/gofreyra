CREATE TABLE public.insight_access_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  role text,
  interest_area text,
  article_slug text NOT NULL,
  article_title text NOT NULL,
  consent boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE public.insight_access_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone can request insight access"
ON public.insight_access_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 120
  AND length(btrim(company)) BETWEEN 1 AND 160
  AND length(btrim(email)) BETWEEN 3 AND 200
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(btrim(article_slug)) BETWEEN 1 AND 200
  AND length(btrim(article_title)) BETWEEN 1 AND 250
  AND (role IS NULL OR length(role) <= 120)
  AND (interest_area IS NULL OR length(interest_area) <= 80)
  AND consent = true
  AND status = 'new'
);

CREATE INDEX idx_insight_access_requests_created_at ON public.insight_access_requests (created_at DESC);
CREATE INDEX idx_insight_access_requests_slug ON public.insight_access_requests (article_slug);