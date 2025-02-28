-- Create newsletter_subscriptions table
CREATE TABLE public.newsletter_subscriptions (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'subscribed'::text,
  created_at TIMESTAMP WITH TIME ZONE NULL DEFAULT now(),
  confirmed_at TIMESTAMP WITH TIME ZONE NULL,
  CONSTRAINT newsletter_subscriptions_pkey PRIMARY KEY (id),
  CONSTRAINT newsletter_subscriptions_email_key UNIQUE (email)
);

-- Set comment
COMMENT ON TABLE public.newsletter_subscriptions IS 'Table to store newsletter subscribers';

-- Enable Row Level Security
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable read for authenticated users"
  ON public.newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Enable insert for anyone"
  ON public.newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create index on email for faster lookups
CREATE INDEX idx_newsletter_subscriptions_email ON public.newsletter_subscriptions (email);
