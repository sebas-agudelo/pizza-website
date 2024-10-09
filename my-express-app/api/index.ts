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
    credentials: true, // Allow cookies to be sent
}));

// Handle preflight requests for all routes
app.options('*', cors());

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABSE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

// Endpoint to fetch products
app.get("/", async (req: Request, res: Response) => {
    console.log("CORS Origin:", req.headers.origin); // Log the origin of the request
    try {
        const { data: Products, error } = await supabase.from('Products').select('*');

        if (error) {
            console.error("Error fetching products:", error);
            return res.status(500).send("Error fetching productsssssss");
        }

        console.log("Fetched Products:", Products); // Log the fetched products
        if (!Products || Products.length === 0) {
            console.log("No products found in the database.");
            return res.status(404).send("No products found");
        }

        return res.json(Products);
    } catch (error) {
        console.error("Unexpected error:", error);
        return res.status(500).send("Unexpected error occurred");
    }
});

// Start server
app.listen(3001, () => console.log("Server ready on port 3001."));
