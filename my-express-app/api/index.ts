import express, { Request, Response } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
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

const upload = multer({storage: multer.memoryStorage()});

app.get("/", async (req: Request, res: Response) => {

    try {
        const { data: Products, error } = await supabase
        .from('Products')
        .select('*');

        return res.json(Products);
    } catch (error) {
        return res.status(500).send("Unexpected error occurred");
    }
});

app.post('/addProduct', upload.single('file'), async (req: Request, res: Response) => {
    console.log(req.file);  // Logga för att se om filen faktiskt mottas
    console.log(req.body);  // Logga body för att se övriga data
    const file = req.file;
    if (!file) {
        return res.status(400).json({ errorMess: "ERROR 400...... Ingen fil hittades" });
    }

    try {
        
        const {data: uploadData, error: uploadError} = await supabase.storage
        .from('pizza-webside-files') // Min buckets url
        .upload(`public/${Date.now()}_${file.originalname}`, file.buffer, {
            contentType: file.mimetype
        });

        if (uploadError) {
            console.log('Upload Error: ', uploadError);  // Loggar eventuella fel
            return res.status(500).json({errorMess: "EROOR 500...... Något gick fel under filuppladdning"});
        }

        if(!uploadData){
            return res.status(500).json({errorMess: "EROOR 500...... Något har gått fel"})
        };

        const { data: publicUrlData } = supabase.storage
        .from('pizza-webside-files')
        .getPublicUrl(uploadData.path);

        const imageUrl = publicUrlData.publicUrl;
        
        const { category_id, product_name, product_price, product_desc, product_img } = req.body;

        const { data, error } = await supabase
            .from('Products')
            .insert([
                { 
                    category_id,
                    product_name,
                    product_price,
                    product_desc,
                    product_img: imageUrl
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
