ALTER TABLE public.applications
ADD COLUMN IF NOT EXISTS organization TEXT;

ALTER TABLE public.applications
ADD COLUMN IF NOT EXISTS charging_station_location TEXT;

ALTER TABLE public.applications
ADD COLUMN IF NOT EXISTS estimated_traffic TEXT;

ALTER TABLE public.applications
ADD COLUMN IF NOT EXISTS expected_charging_hours TEXT;

ALTER TABLE public.applications
ALTER COLUMN property_type DROP NOT NULL;

ALTER TABLE public.applications
ALTER COLUMN address DROP NOT NULL;

NOTIFY pgrst, 'reload schema';
