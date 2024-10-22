import React, { useEffect, useState } from 'react'
import { IProducts } from '../module/products';

export default function Products() {
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
    <div className='products-wrapper'>
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
