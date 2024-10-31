import React, { useEffect, useState } from 'react'
import { ICategories } from '../module/ICategories';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { IoAddCircleOutline } from "react-icons/io5";
import { IProducts } from '../module/products';

export default function Categories() {
    
    const [categories, setCategories] = useState<ICategories[]>([]);
    useEffect(() => {
        const fectFunction = async () => {
            const res = await fetch('https://pizza-website-wona.vercel.app/get_categories_with_products');
            const data = await res.json();
            setCategories(data);

        };

        fectFunction()

    }, [])

    return (
        <section className='app-category-section'>

            <section className='hero'>
                <div className='category-img-wrapper'>
                    <img src="pexels-vanmalidate-784636.jpg" alt="" />
                </div>

                <div className='div'>
                    <h2>VÅR MENY</h2>
                    <p>Upptäck en värld av smaker hos oss på GUSTO PIZZA. Här hittar du ett brett urval av pizzor tillagade med färska råvaror och en passion för hantverket. Oavsett om du är sugen på en klassisk Margherita, en smakrik Capricciosa eller en egenkomponerad favorit, så har vi något för dig. Välkommen att utforska vår meny och låt oss ta dig på en smakresa du sent kommer glömma!</p>
                </div>

            </section>


            <section className='app-category-content-wrapper'>

                {categories.map((category, index) => (
                    <article key={index}>

                        <span>{category.category_name}</span>

                        <section className='app-products-wrapper'>
                            {category.products.map((product, index) => (
                                <article className='app-products-info-wrapper' key={index}>
                                    <span>{product.product_name}</span>
                                    <div className='app-product-info'>
                                        <span>{product.product_price}kr</span>
                                        <span><IoAddCircleOutline /></span>
                                    </div>
                                </article>

                            ))}
                        </section>
                    </article>
                ))}

            </section>

            <Footer />
        </section>
    )
}
