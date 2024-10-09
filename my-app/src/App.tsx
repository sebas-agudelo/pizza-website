import React, { useEffect, useState } from 'react';
import './App.css';
import { IProducts } from './module/products';

function App() {
    const [products, setProduct] = useState<IProducts[]>([]); 

    const useLocalApi = true;

    useEffect(() => {
        fetProducts();
    }, []);

    const fetProducts = async () => {

        const res = await fetch('https://pizza-website-wona.vercel.app/');

        const data = await res.json();
        setProduct(data)
        console.log(data);
        


        // try {
        //     const apiUrl = useLocalApi
        //     ? 'https://pizza-website-wona.vercel.app/'

        //     : 'http://localhost:3001';  

        //     const res = await fetch(apiUrl, {
        //         method: "GET"
        //     });

        //     if (!res.ok) throw new Error('Network response was not ok');

        //     const data = await res.json();
        //     if (!data || data.length === 0) {
        //         console.log('No products returned from the API');
        //         setProduct([]);
        //         return;
        //     }

        //     setProduct(data);
        //     console.log(data);
        // } catch (error) {
        //     console.error('Error fetching products:', error);
        // }
    };

    return (
        <div className="App">
            <h1>Hello World</h1>
            {products.length === 0 ? (
                <div>Inga produkter hittades</div>
            ) : (
                products.map((product) => (
                    <div key={product.product_name}>
                        <h3>Produktensnamn: {product.product_name}</h3>
                        <h3>ProduktensPris: {product.product_price}kr</h3>
                    </div>
                ))
            )}
        </div>
    );
}

export default App;
