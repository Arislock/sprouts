import {createClient} from '@supabase/supabase-js'
// remember to save as .env files when publishing to github!
export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);