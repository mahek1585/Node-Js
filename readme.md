1) Log in app.js
2) Package.json cmd: npm init -y
3) Make on script
4) Make start script
5) Import by require method (ES5)



URL : https://pmvlxhptnxwtdjigvjns.supabase.co

API_Key : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtdmx4aHB0bnh3dGRqaWd2am5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NTY2MTcsImV4cCI6MjA2NDUzMjYxN30.WYiF3LQPdJS36dcKYY3Zu0hxl37Fxr27un8Q8I2ahyA



import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pmvlxhptnxwtdjigvjns.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)






