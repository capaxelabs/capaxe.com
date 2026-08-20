-- International visitors give an email, not a phone number.
ALTER TABLE store_setup_leads ADD COLUMN email TEXT;
