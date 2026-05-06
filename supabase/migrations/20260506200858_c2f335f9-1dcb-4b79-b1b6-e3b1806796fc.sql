
-- contact_messages
DROP POLICY IF EXISTS "anyone can submit contact" ON public.contact_messages;
CREATE POLICY "anyone can submit contact"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 120
  AND length(btrim(email)) BETWEEN 3 AND 200
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(btrim(message)) BETWEEN 1 AND 2000
  AND (company IS NULL OR length(company) <= 160)
  AND (subject IS NULL OR length(subject) <= 200)
);

-- demo_requests
DROP POLICY IF EXISTS "anyone can submit demo" ON public.demo_requests;
CREATE POLICY "anyone can submit demo"
ON public.demo_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 120
  AND length(btrim(company)) BETWEEN 1 AND 160
  AND length(btrim(email)) BETWEEN 3 AND 200
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (phone IS NULL OR length(phone) <= 40)
  AND (sector IS NULL OR length(sector) <= 80)
  AND (challenge IS NULL OR length(challenge) <= 500)
  AND (interest_area IS NULL OR length(interest_area) <= 120)
  AND (message IS NULL OR length(message) <= 2000)
  AND status = 'new'
);

-- newsletter_signups
DROP POLICY IF EXISTS "anyone can subscribe" ON public.newsletter_signups;
CREATE POLICY "anyone can subscribe"
ON public.newsletter_signups
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(email)) BETWEEN 3 AND 200
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
);
