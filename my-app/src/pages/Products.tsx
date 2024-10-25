import React, { useEffect, useState } from 'react'
import { IProducts } from '../module/products';

interface ProductsProps {
  className?: string; // Gör className optional
}

export default function Products({className}: ProductsProps) {
  const [products, setProduct] = useState<IProducts[]>([]); 

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
    <div className={`products-wrapper ${className}`}>
      All products
      {products.length === 0 ? (
                <div>Laddar.......</div>
            ) : (
                products.map((product) => (
                    <div key={product.product_name}>
                      <img src={product.product_img} alt={product.product_name} />
                        <h3>Produktensnamn: {product.product_name}</h3>
                        <h3>ProduktensPris: {product.product_price}kr</h3>
                    </div>
                ))
            )}
    </div>
  )
}
