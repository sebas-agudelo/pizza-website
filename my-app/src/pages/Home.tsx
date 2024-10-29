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
        // const categoriesWrapper = document.querySelector('.short-bussiness-description');
        const homeCategoriesWrapper = document.querySelector('.home-categories-wrapper')

        if (homeCategoriesWrapper === null) {
            return;
        }

        let lastScrollY = window.scrollY;

        const checkVisibility = () => {
            const rect = homeCategoriesWrapper?.getBoundingClientRect();
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

            <div className='hero-img'>
                <img src="/Hero2.jpg" alt="" className={`${isVisible && !isFullyScrolled ? 'visible' : ''}`} />
            </div>

            <h2 className={`h2-gusto-pizza ${className}`}>VÄLKOMMEN TILL GUSTO PIZZA</h2>

            <div className={`home-categories-wrapper ${isVisible && !isFullyScrolled ? 'visible' : ''}`}>
                <p>FAVORITER</p>
                <div className='category'>
                    <article>
                        <div className='home-product-img'>
                            <img src="/kebabpizza.png" alt="" />
                        </div>
                        <h3>Kebab Pizza</h3>
                    </article>
                    <article>
                        <div className='home-product-img'>
                            <img src="/pizza-3525673_1920.jpg" alt="" />
                        </div>
                        <h3>Vegansk Pizza</h3>
                    </article>
                    <article>
                        <div className='home-product-img'>
                            <img src="/pizza-3525673_1920.jpg" alt="" />
                        </div>
                        <h3>Timmo Pizza</h3>
                    </article>
                </div>
            </div>


            <div className='video'>

                <video autoPlay muted loop>
                    <source src="pizza-video3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>



            {/* 
            <Footer /> */}
        </div>
    );
}
