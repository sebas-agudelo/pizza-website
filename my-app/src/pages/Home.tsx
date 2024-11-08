import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

interface HomeProps {
    className?: string; // Gör className optional
}

export default function Home({ className }: HomeProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isFullyScrolled, setIsFullyScrolled] = useState(false);

    useEffect(() => {
        const homeCategoriesWrapper = document.querySelector('.app-home-favarite-products-wrapper');

        if (homeCategoriesWrapper === null) {
            return;
        }

        let lastScrollY = window.scrollY;

        const checkVisibility = () => {
            let rect = homeCategoriesWrapper.getBoundingClientRect();
            const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
            const scrollOffset = 0;

            if (rect.top <= windowHeight - scrollOffset && rect.bottom > scrollOffset) {
                setIsVisible(true);
                setIsFullyScrolled(false);
            } else if (rect.bottom <= scrollOffset) {
                setIsFullyScrolled(true);
            } else {
                setIsVisible(false);
            }

            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Initial check in case it's already visible on load

        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

    return (
        <div className='home'>

            <div className='hero-section'>

                <div className='hero-img'>
                    <video src="ppp.mp4" autoPlay loop muted className={`${isVisible && !isFullyScrolled ? 'visible' : ''}`}></video>

                </div>
                <div className='product-info'>
                    <div className='h2-gusto-pizza'>
                        <h1 className={`h2-gusto-pizza-1 ${className}`}>WELCOME TO</h1>
                        <h1 className={`h2-gusto-pizza-2 ${className}`}>GUSTO PIZZA</h1>
                    </div>

                    <div className='hero-order-btns'>
                        <button>
                            <Link to={`/menu`}>SE ALL MENU</Link>
                        </button>
                    </div>
                </div>

            </div>

            <section className={`app-home-favarite-products-wrapper ${isVisible && !isFullyScrolled ? 'visible' : ''}`}>
                <h2 className='favorite-product-header'>FAVORITES</h2>
                <article className='app-home-favarite-products-content'>
                    <article>
                        <div className='home-product-img'>
                            <img src="Pizza-Margarita-United-Pizza_600x600.png" alt="" />
                        </div>

                        <div className='app-product-info'>                        <h3 className='product-name'>Margherita Pizza</h3>
                            <p className='product-desc'>Margarita med tomatsås, basilika och ost</p>
                            <h3 className='product-price'>$11</h3>

                            <div className='buy-btn'>
                                <button>
                                    <Link to={``}>Order</Link>
                                </button>
                            </div>
                        </div>

                    </article>
                    <article>
                        <div className='home-product-img'>
                            <img src="/kebabpizza.png" alt="" />
                        </div>
                        <div className='app-product-info'>
                            <h3 className='product-name'>Kebab Pizza</h3>
                            <p className='product-desc'>Kebab pizza med rödsås och vitsås, tomat, rök, romansallad och gurka.</p>
                            <h3 className='product-price'>$11</h3>

                            <div className='buy-btn'>
                                <button>
                                    <Link to={``}>Order</Link>
                                </button>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className='home-product-img'>
                            <img src="pizza-1344720_1920.jpg" alt="" />
                        </div>
                        <div className='app-product-info'>
                            <h3 className='product-name'>Timmo Pizza</h3>
                            <p className='product-desc'>Timmo Pizza</p>
                            <h3 className='product-price'>$12</h3>
                            <div className='buy-btn'>
                                <button>
                                    <Link to={``}>Order</Link>
                                </button>
                            </div>
                        </div>
                    </article>
                </article>

            </section>

            <section className='app-home-speciality-wrapper'>
                <div className='speciality-img'>
                    <img src="window.jpg" alt="" />
                </div>


                <h3>Authentic Flavors</h3>
                <h2>GUSTO PIZZA</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe facere, officiis, repellendus eligendi doloribus ipsam quia itaque exercitationem ratione sapiente incidunt fugiat rem et laborum dolorem rerum quod. Harum.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius ea eos alias eaque laboriosam at nostrum quis repellendus hic nam vero, quas cupiditate facilis in sunt sit. Eveniet, cumque?
                    <br /> <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quia ratione facilis deleniti recusandae, corporis commodi magnam voluptates officiis nisi nihil, qui laboriosam assumenda! Quam nesciunt odit rem necessitatibus veritatis.


                </p>

            </section>

            <section className='app-more-pizzas-wrapper'>
                {/* <h2>MORE PIZZAS</h2> */}
                <h3>MORE DELICIOUS</h3>
                <section className='app-more-pizzas-content'>
                    <article>
                        <div className='more-product-img'>
                            <img src="Pizza-Margarita-United-Pizza_600x600.png" alt="" />
                        </div>
                        <p>Margherita Pizza</p>
                    </article>
                    {/* <article>
                        <div className='more-product-img'>
                            <img src="/kebabpizza.png" alt="" />
                        </div>
                        <p>Kebab Pizza</p>
                    </article>
                    <article>
                        <div className='more-product-img'>
                            <img src="pizza-1344720_1920.jpg" alt="" />
                        </div>
                        <p>Timmo Pizza</p>
                    </article> */}
                </section>

                {/* <div className='menu-btn'>
                    <button>
                        <Link to={`/meny`}>SE MENU</Link>
                    </button>
                </div> */}

            </section>

            <section className='app-pickup-wrapper'>

                <section className='app-pickup-content'>
                    <h2>ORDER EASILY ONLINE</h2>

                    <h3>We are locoted in Madrid, Gran Via</h3>

                    <div className='btns'>
                        <button className='more-pizza-se-menu-btn'><Link to={`/menu`}>SE MENU</Link></button>
                        <button><Link to={`tel:0700000000`}>CALL US</Link></button>
                    </div>

                </section>

                {/* <div className='pickup-img-1'>
                    <img src="pexels-antonina-blakytna-486639748-17476654.jpg" alt="" />
                </div> */}
                {/* <div className='pickup-img-1'>
                    <img src="pexels-unkdevil-19130144.jpg" alt="" />
                </div> */}

            </section>



            {/* <Footer /> */}
        </div>
    );
}


