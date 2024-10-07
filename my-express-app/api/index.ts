import express from "express";
import cors from 'cors'
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js'

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'https://pizza-website-gold.vercel.app/',
    credentials: true, 
}));




dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABSE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey)



app.get("/", async (req, res) => {
    
let { data: Products, error } = await supabase
.from('Products')
.select('*')

console.log(Products);
res.json(Products);

})     

app.listen(3001, () => console.log("Server ready on port 3000000000000000."));

