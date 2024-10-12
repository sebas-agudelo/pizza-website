import React, { useState } from 'react'
import { IAddProduct } from '../module/IAddProduct'

export default function AddProduct() {
  const [productInfo, setProductInfo] = useState<IAddProduct>({
    category_id: 0,
    product_price: 0,
    product_name: '',
    product_desc: ''
  });
  const [emptyErr, setEmptyErr] = useState('');

  const addProductFunction = async () => {

    //Objekt med alla egenskaper för kunna lägga till det nya produkten
    const newProductObject = {
      category_id: productInfo.category_id,
      product_price: productInfo.product_price,
      product_name: productInfo.product_name,
      product_desc: productInfo.product_desc,
    };

    const res = await fetch('https://pizza-website-wona.vercel.app/addProduct', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProductObject)
    });

    const data = await res.json();

    //Kontrollerar om man alla inputs inte är tomma
    if (productInfo.product_name === '' ||
      isNaN(productInfo.product_price) ||
      productInfo.product_desc === '' ||
      isNaN(productInfo.category_id)) {

      setEmptyErr('Det går inte att lära till category id')
      return;

    };
  };

  //Funktionen för att kunna skicka formuläret
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProductFunction();
  }

  return (
    <div>
      <h3 style={{color: 'red'}}>{emptyErr}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text"
          onChange={(e) => setProductInfo({ ...productInfo, product_name: e.target.value })}
        />
        <input type="number"
          onChange={(e) => setProductInfo({ ...productInfo, product_price: +e.target.value })}
        />
        <input type="text"
          onChange={(e) => setProductInfo({ ...productInfo, product_desc: e.target.value })}
        />
        <input type="number"
          onChange={(e) => setProductInfo({ ...productInfo, category_id: +e.target.value })}
        />
        <input type="submit" value="Lägg till" />
      </form>
    </div>
  )
}
