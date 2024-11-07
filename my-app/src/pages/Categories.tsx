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
                    <img src="pexels-roman-odintsov-5903171.jpg" alt="" />
                </div>

                <h2 className='our-menu'>OUR MENU</h2>


            </section>


            <section className='app-category-wrapper'>

                {categories.map((category, index) => (
                    <section className='app-category-products-wrapper' key={index}>

                        <h2 className='category-header'>{category.category_name}</h2>

                        <section className='app-products-wrapper'>
                            {category.products.map((product, index) => (
                                <article className='app-products-content' key={index}>
                                    <article className='app-product'>
                                        <div className='app-product-img'>
                                            <img src={product.product_img} alt="" />
                                        </div>
                                        <div className='app-product-info'>

                                            <h3 className='product-name'>{product.product_name}</h3>
                                            <p className='product-desc'>{product.product_desc}</p>
                                            <h3 className='product-price'>{product.product_price}kr</h3>
                                     
                                            <div className='buy-btn'>
                                                <button>
                                                    <Link to={``}>Order</Link>
                                                </button>
                                            </div>

                                        </div>
                                    </article>
                                </article>

                            ))}
                        </section>
                    </section>
                ))}

            </section>

            {/* <Footer /> */}
        </section>
    )
}
