/*
# Create enquiries table (single-tenant, no auth)

1. New Tables
- `enquiries`
- `id` (uuid, primary key)
- `name` (text, not null) — the enquirer's full name
- `phone` (text, not null) — contact number
- `requirement` (text, not null) — type of property/service they are interested in
- `message` (text, optional) — additional details from the enquirer
- `created_at` (timestamptz, defaults to now)

2. Security
- Enable RLS on `enquiries`.
- Allow anon + authenticated INSERT only (public can submit enquiries).
- No SELECT/UPDATE/DELETE for anon — only the backend service role can read/manage enquiries.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  requirement text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);
