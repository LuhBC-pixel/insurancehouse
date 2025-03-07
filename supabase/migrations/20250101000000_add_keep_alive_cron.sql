
-- Enable the required extensions if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create a cron job to call the keep-alive function every 12 hours
SELECT cron.schedule(
  'keep-database-alive',
  '0 */12 * * *', -- Run every 12 hours
  $$
  SELECT
    net.http_post(
      url:='https://vmvumzaiigxyficbanjc.supabase.co/functions/v1/keep-alive',
      headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtdnVtemFpaWd4eWZpY2JhbmpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2MTM0ODcsImV4cCI6MjA1NDE4OTQ4N30.8AMcp7uZvyvlN5QfwChsHwyF9qSu-Vfv9kTrjyB5-XM"}'::jsonb,
      body:='{}'::jsonb
    ) as request_id;
  $$
);
