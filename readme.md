1) Log in app.js
2) Package.json cmd: npm init -y
3) Make on script
4) Make start script
5) Import by require method (ES5)



URL : https://iycdrvmdyzqrnyntzzww.supabase.co

API_Key : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5Y2Rydm1keXpxcm55bnR6end3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1Mjc5NTAsImV4cCI6MjA2NDEwMzk1MH0.1rsQDienZ4uzkrX1EqnFUERqzWq7N8dPgIyV6k0ging




import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iycdrvmdyzqrnyntzzww.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)



