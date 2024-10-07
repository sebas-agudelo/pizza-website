import React, { useEffect, useState } from 'react';
import './App.css';
import { IProducts } from './module/products';

function App() {
    const [products, setProduct] = useState<IProducts[]>([]); // Initialize as an empty array

    // Set this flag to switch between local and production URLs
    const useLocalApi = true; // Change this to false to use the production URL

    useEffect(() => {
        fetProducts();
    }, []);

    const fetProducts = async () => {
        try {
            // Choose the API URL based on the useLocalApi flag
            const apiUrl = useLocalApi
                ? 'http://localhost:3001' // Local development URL
                : 'https://pizza-website-wona.vercel.app/'; // Production URL

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
