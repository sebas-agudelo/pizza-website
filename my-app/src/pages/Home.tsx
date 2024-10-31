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
        const homeCategoriesWrapper = document.querySelector('.home-categories-wrapper');

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
                            <img src="pizza-5275191_1920.jpg" alt="" />
                        </div>
                        <h3>Margherita Pizza (Vegansk)</h3>
                    </article>
                    <article>
                        <div className='home-product-img'>
                            <img src="pizza-1344720_1920.jpg" alt="" />
                        </div>
                        <h3>Timmo Pizza</h3>
                    </article>
                </div>
            </div>

            <div className={`short-bussiness-description ${isVisible && !isFullyScrolled ? 'visible' : ''}`}>
                <h2>SVERIGES BÄSTA GUSTO PIZZA</h2>

                <p>Välkommen till Sveriges bästa Gusto Pizza – där passion för hantverkspizza och kvalitetsingredienser möts för att skapa en smakupplevelse utöver det vanliga. På Gusto Pizza serverar vi allt från klassiska favoriter till innovativa smakkombinationer, alltid tillagade med färska, noggrant utvalda råvaror. Våra pizzor bakas i stenugn för den perfekta, krispiga botten och toppas med omsorg för att lyfta fram varje smaknyans.
                    <br /><br />
                    Oavsett om du är sugen på en traditionell Margherita eller vill utforska nya spännande smakäventyr, har Gusto Pizza något för alla. Vi erbjuder dessutom veganska och vegetariska alternativ som får dig att vilja komma tillbaka igen och igen. Besök oss för en äkta pizzaupplevelse där kvalitet, smak och service står i fokus – för en pizza som är lite bättre, lite godare och helt enkelt Gusto!

                </p>

                <a href={`/meny`}>Vår meny</a>
            </div>

            <div className='app-media-wrapper'>
                <div className={`video`} >

                    <video autoPlay muted loop>
                        <source src="pizza-video3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className='app-img-wrapper'>

                    <div className='app-img'>
                        <img src="street-6099209_1920.jpg" alt="" />
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    );
}


