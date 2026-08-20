-- The landing page is geo-priced (India → INR, everyone else → USD).
-- Record which offer each lead saw so follow-ups quote the right price.
ALTER TABLE store_setup_leads ADD COLUMN region TEXT;
ALTER TABLE store_setup_leads ADD COLUMN country TEXT;
