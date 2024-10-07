import React, { useEffect, useState } from 'react';
import './App.css';
import { IProducts } from './module/products';

function App() {
  const [products, setProduct] = useState<IProducts[]>();

  useEffect(() => {
    fetProducts();
  }, [])

 const fetProducts = async () => {
    const res = await fetch('http://localhost:3001');
    const data = await res.json();

    setProduct(data);
    console.log(data);
    
 }

 if (!products) {
  return <div>Inga produkter hittades</div>;
}

  return (
    <div className="App">
      <h1>Hello World</h1>

      {products.map((product) => 
        <div>
          <h3>{product.product_name}</h3>
          <h3>{product.product_price}kr</h3>
        </div>
      )}
    </div>
  );
}

export default App;
