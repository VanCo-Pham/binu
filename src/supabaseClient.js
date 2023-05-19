import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient("https://pwrljfwglzpawsxarimx.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3cmxqZndnbHpwYXdzeGFyaW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQzMzQ0NzAsImV4cCI6MTk5OTkxMDQ3MH0.cyZIUWW4gRNfjeDAxkucjyEis4G3fO1JGFTSAQpznZc")