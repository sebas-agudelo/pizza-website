import React, { useState } from 'react';
import { IAddProduct } from '../module/IAddProduct';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const [productInfo, setProductInfo] = useState<IAddProduct>({
    category_id: 0,
    product_price: 0,
    product_name: '',
    product_desc: ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null); // Ny state för filen
  const [emptyErr, setEmptyErr] = useState('');

  const nav = useNavigate();

  const addProductFunction = async () => {
    // Kontrollera om det finns en bild
    if (!imageFile) {
      setEmptyErr('Vänligen ladda upp en bild.');
      return;
    }

    // Skapa FormData objekt för att skicka bild och produktinformation
    const formData = new FormData();
    formData.append('file', imageFile); // Lägg till bilden
    formData.append('category_id', productInfo.category_id.toString());
    formData.append('product_price', productInfo.product_price.toString());
    formData.append('product_name', productInfo.product_name);
    formData.append('product_desc', productInfo.product_desc);

    const res = await fetch('https://pizza-website-wona.vercel.app/addProduct', {
      method: "POST",
      body: formData // Skicka FormData istället för JSON
    });

    const data = await res.json();

    // Kontrollera svar från servern
    if (!res.ok) {
      setEmptyErr(data.errorMess || data.error || 'Ett fel inträffade vid uppladdning.');
      return;
    } 

    if(res.ok){
      nav('/pizzor')
    }
    // Återställ state om produkten lades till
    setProductInfo({
      category_id: 0,
      product_price: 0,
      product_name: '',
      product_desc: ''
    });
    setImageFile(null); // Återställ filen
    setEmptyErr(''); // Rensa felmeddelandet
  };

  // Funktionen för att kunna skicka formuläret
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProductFunction();
  }

  return (
    <div>
      <h3 style={{ color: 'red' }}>{emptyErr}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Produktnamn"
          onChange={(e) => setProductInfo({ ...productInfo, product_name: e.target.value })}
          value={productInfo.product_name}
        />
        <input type="number"
          placeholder="Produktpris"
          onChange={(e) => setProductInfo({ ...productInfo, product_price: +e.target.value })}
          value={productInfo.product_price}
        />
        <input type="text"
          placeholder="Produktbeskrivning"
          onChange={(e) => setProductInfo({ ...productInfo, product_desc: e.target.value })}
          value={productInfo.product_desc}
        />
        <input type="number"
          placeholder="Kategori ID"
          onChange={(e) => setProductInfo({ ...productInfo, category_id: +e.target.value })}
          value={productInfo.category_id}
        />
        <input type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) {
              setImageFile(e.target.files[0]); // Sätt den valda filen
            }
          }}
        />
        <input type="submit" value="Lägg till" />
      </form>
    </div>
  )
}
