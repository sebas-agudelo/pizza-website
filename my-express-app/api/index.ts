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
        'https://pizza-website-gold.vercel.app',
        'http://localhost:3000'
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

app.post('/addProduct', async (req: Request, res: Response) => {
    try {
        const { category_id, product_name, product_price, product_desc } = req.body;

        const { data, error } = await supabase
            .from('Products')
            .insert([
                { 
                    category_id,
                    product_name,
                    product_price,
                    product_desc
                },
            ])
            .select()

            res.status(200).json(data)
    } catch (error) {
        return res.status(500).send("Unexpected error occurred");
    }
});

app.post('/adminlogin', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        let { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error || !data.user) {
            return res.status(404).json({ error404: 'Något gick fel. Skriv in rätt e-post och lösenord' });
        }

        const { data: isAdmin, error: roleError } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', data.user.id) 
            .eq('role', 'admin') 
            .single(); 

        if (roleError || !isAdmin) {
            return res.status(403).json({ error: 'Åtkomst nekad. Endast admin kan logga in.' });
        }

        res.status(200).json({ message: 'Admin inloggad', user: data.user });

    } catch (error) {
        return res.status(500).json({ errMessage: 'Något har gått fel' });
    }
});

app.post('/userlogin', async(req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        let { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error || !data.user) {
            return res.status(404).json({ error404: 'Något gick fel. Skriv in rätt e-post och lösenord' });
        }

        const { data: isAdmin, error: roleError } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', data.user.id) 
            .eq('role', 'admin') 
            .single(); 

        if (isAdmin) {
            return res.status(403).json({ error: 'Åtkomst nekad. Endast användare kan logga in.' });
        }

        res.status(200).json({ message: 'Användare inloggad', user: data.user });

    } catch (error) {
        return res.status(500).json({ errMessage: 'Något har gått fel' });
    }
});






app.listen(3001, () => console.log("Server ready on port 3001."));
