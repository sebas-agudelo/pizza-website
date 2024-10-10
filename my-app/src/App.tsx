import React, { useEffect, useState } from 'react';
import './App.css';
import { IProducts } from './module/products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Products from './pages/Products';

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
    };

    return (
        <div className="App">
            <h1>Hello World</h1>
            {products.length === 0 ? (
                <div>Laddar.......</div>
            ) : (
                products.map((product) => (
                    <div key={product.product_name}>
                        <h3>Produktensnamn: {product.product_name}</h3>
                        <h3>ProduktensPris: {product.product_price}kr</h3>
                    </div>
                ))
            )}

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='pizzor' element={<Products />}/>
                    <Route path='/loggain' element={<Signin />}/>
                    <Route path='/registrera' element={<Signup />}/>
                    <Route />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
