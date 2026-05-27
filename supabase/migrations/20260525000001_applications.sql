-- Applications table
-- Stores every form submission as the system of record.
-- The email notification is a side-effect; this row is the lead.

CREATE TABLE IF NOT EXISTS public.applications (
  id               UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  organization     TEXT,
  first_name       TEXT        NOT NULL,
  last_name        TEXT        NOT NULL,
  email            TEXT        NOT NULL,
  phone            TEXT        NOT NULL,
  address          TEXT,
  charging_station_location TEXT,
  estimated_traffic TEXT,
  expected_charging_hours TEXT,
  audience         TEXT        CHECK (audience IN ('residents', 'customers_employees', 'public')),
  property_type    TEXT        CHECK (property_type IN ('strata_corporations', 'multi_unit_residence', 'commercial_building')),
  message          TEXT,
  email_message_id TEXT,
  submitted_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Service role can read applications"
    ON public.applications FOR SELECT
    USING (auth.role() = 'service_role');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Service role can insert applications"
    ON public.applications FOR INSERT
    WITH CHECK (auth.role() = 'service_role');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Service role can update applications"
    ON public.applications FOR UPDATE
    USING (auth.role() = 'service_role')
    WITH CHECK (auth.role() = 'service_role');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE INDEX IF NOT EXISTS idx_applications_submitted_at ON public.applications(submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_applications_email        ON public.applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_property_type ON public.applications(property_type);
