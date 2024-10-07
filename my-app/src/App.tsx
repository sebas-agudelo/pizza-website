import React, { useEffect, useState } from 'react';
import './App.css';
import { IProducts } from './module/products';

function App() {
    const [products, setProduct] = useState<IProducts[]>([]); // Initialize as an empty array

    useEffect(() => {
        fetProducts();
    }, []);

    const fetProducts = async () => {
        try {
            // Use the appropriate API URL based on the environment
            const apiUrl = process.env.NODE_ENV === 'production'
                ? process.env.REACT_APP_API_URL_PRODUCTION || 'https://pizza-website-wona.vercel.app/'
                : process.env.REACT_APP_API_URL || 'http://localhost:3001'

            const res = await fetch(apiUrl, {
                method: "GET"
            });
            if (!res.ok) throw new Error('Network response was not ok');

            const data = await res.json();
            if (!data || data.length === 0) {
                console.log('No products returned from the API');
                setProduct([]); // Set empty array if no products
                return;
            }

            setProduct(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div className="App">
            <h1>Hello World</h1>
            {products.length === 0 ? (
                <div>Inga produkter hittades</div>
            ) : (
                products.map((product) => (
                    <div key={product.product_name}>
                        <h3>{product.product_name}</h3>
                        <h3>{product.product_price}kr</h3>
                    </div>
                ))
            )}
        </div>
    );
}

export default App;
