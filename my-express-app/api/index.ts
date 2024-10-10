import express, { Request, Response } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// CORS setup
app.use(cors({
    origin: [
        'https://pizza-website-gold.vercel.app'
    ],
    credentials: true,
}));

app.options('*', cors());

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABSE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

app.get("/", async (req: Request, res: Response) => {

    try {
        const { data: Products, error } = await supabase.from('Products').select('*');

        return res.json(Products);
    } catch (error) {
        return res.status(500).send("Unexpected error occurred");
    }
});

app.listen(3001, () => console.log("Server ready on port 3001."));
