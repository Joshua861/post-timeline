import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

export const supabase = createClient(env.PROJECT_URL, env.ANON_KEY);
