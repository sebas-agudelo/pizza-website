import React, { useEffect, useState } from 'react'
import { ICategories } from '../module/ICategories';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { IoAddCircleOutline } from "react-icons/io5";
import { IProducts } from '../module/products';
import { RiCloseLargeLine } from "react-icons/ri";

export default function Categories() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentProduct, setCorrentProduct] = useState<IProducts | null>(null);
    const [currentdProductId, setCurrentProductId] = useState<number | null>(null);
    const [categories, setCategories] = useState<ICategories[]>([]);
    useEffect(() => {
        const fectFunction = async () => {
            const res = await fetch('https://pizza-website-wona.vercel.app/get_categories_with_products');
            const data = await res.json();
            setCategories(data);

        };

        fectFunction()

    }, [])

    const openModal = (product: IProducts) => {
        setIsModalOpen(true)
        setCorrentProduct(product)
        setCurrentProductId(product.id)
        console.log(product.id);

    }

    const closeModal = () => {
        setIsModalOpen(false)
        setCorrentProduct(null)
        setCurrentProductId(null)
    }

    return (
        <section className='app-category-section'>

            <section className='hero'>
                <div className='category-img-wrapper'>
                    <img src="pexels-muffin-1653877.jpg" alt="" />
                </div>

                <h2 className='our-menu'>OUR MENU</h2>


            </section>


            <section className='app-category-wrapper'>

                {categories.map((category, catIndex) => (
                    <section className='app-category-products-wrapper' key={catIndex}>

                        <h2 className='category-header'>{category.category_name}</h2>

                        <section className='app-products-wrapper'>
                            {category.products.map((product, prodIndex) => (
                                <article className='app-products-content' key={prodIndex}>
                                    <article className='app-product'>
                                        <div className='app-product-img'>
                                            <img src={product.product_img} alt="" />
                                        </div>
                                        <div className='app-product-info'>

                                            <h3 className='product-name'>{product.product_name}</h3>

                                            <p className='product-desc'>{product.product_desc}</p>

                                            <h3 className='product-price'>${product.product_price}</h3>

                                            <div className='buy-btn'>
                                                <button onClick={() => openModal(product)}>
                                                    <Link to={``}>Order</Link>
                                                </button>
                                            </div>

                                        </div>
                                    </article>

                                    {isModalOpen && currentProduct && currentdProductId === product.id && (
                                        <section className={`modal ${isModalOpen ? 'scale-up-ver-bottom' : ''}`}>
                                            <article className='app-modal-content'>
                                                <div onClick={closeModal} className='modal-close'><RiCloseLargeLine/></div>

                                                <article className='app-modal-product-info'>
                                                    <h3 className='modal-product-name'>{currentProduct.product_name}</h3>
                                                    <p className='modal-product-desc'>{currentProduct.product_desc}</p>

                                                    <div className='modal-price-qty-wrapper'>
                                                    <form action={``}>
                                                        <select className='modal-product-qty'>
                                                            <option value="">1</option>
                                                            <option value="">2</option>
                                                            <option value="">3</option>
                                                            <option value="">4</option>
                                                            <option value="">5</option>
                                                            <option value="">6</option>
                                                            <option value="">7</option>
                                                            <option value="">8</option>
                                                            <option value="">9</option>
                                                        </select>
                                                    </form>
                                                    <h3 className='modal-product-price'>${currentProduct.product_price}</h3>
                                                    </div>
                                                    <div className='buy-btn'>
                                                        <button>
                                                            <Link to={``}>Order Now</Link>
                                                        </button>
                                                    </div>
                                                </article>
                                            </article>
                                        </section>
                                    )}
                                </article>
                            ))}
                        </section>
                    </section>
                ))}
            </section>

            {/* <Footer /> */}
        </section>
    );
}