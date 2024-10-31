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
        const { data: products, error } = await supabase
        .from('products')
        .select('*');

        console.log(products);
        
        return res.json(products);
    } catch (error) {
        return res.status(500).send("Unexpected error occurred");
    }
});

app.post('/addProduct', upload.single('file'), async (req: Request, res: Response) => {
 const { data: { user }, error: userError } = await supabase.auth.getUser();

    console.log('Current User:', user); // Logga den aktuella användaren
    console.log('User Error:', userError); // Logga eventuella fel vid hämtning av användare

    if (userError || !user) {
        return res.status(401).json({ error: "Du måste logga in för att lägga till produkter." });
    }

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
            .from('products')
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

        console.log('Login Attempt:', { email, password, data, error }); // Logga inloggningsförsöket

        if (error || !data.user) {
            return res.status(404).json({ error404: 'Något gick fel. Skriv in rätt e-post och lösenord' });
        }

        const { data: rolesData, error: roleError } = await supabase
            .from('roles')
            .select('role')
            .eq('user_id', data.user.id);

        console.log('Roles Data:', rolesData); // Logga rollerna som returneras
        console.log('Role Error:', roleError); // Logga eventuella fel från rolesfrågan

        const isAdmin = rolesData && rolesData.some(role => role.role === 'admin');

        if (roleError || !isAdmin) {
            return res.status(403).json({ error: 'Åtkomst nekad. Endast admin kan logga in.' });
        }

        return res.status(200).json({ message: 'Admin inloggad', user: data.user });

    } catch (error) {
        console.error('Catch Error:', error);
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
            .from('roles')
            .select('role')
            .eq('user_id', data.user.id) 
            .eq('role', 'admin') 

        if (isAdmin) {
            return res.status(403).json({ error: 'Åtkomst nekad. Endast användare kan logga in.' });
        }

        res.status(200).json({ message: 'Användare inloggad', user: data.user });

    } catch (error) {
        return res.status(500).json({ errMessage: 'Något har gått fel' });
    }
});

app.post('/logout', async (req: Request, res: Response) => {
    try {
        const { error } = await supabase.auth.signOut();

        if (error) {
            return res.status(400).json({ error: 'Kunde inte logga ut' });
        }
        console.log('Du är utloggad');
        
        res.status(200).json({ message: 'Du har loggat ut framgångsrikt' });
    } catch (error) {
        console.error('Logout Error:', error);
        return res.status(500).json({ error: 'Något gick fel vid utloggning' });
    }
});

app.get('/getAllCategories', async (req: Request, res: Response) => {
    try{
        let {data: Categories, error} = await supabase
        .from('Categories')
        .select('*')


        res.status(200).json(Categories);

    } catch(error){
        console.log(error);
        
    }
});


app.listen(3001, () => console.log("Server ready on port 3001."));
