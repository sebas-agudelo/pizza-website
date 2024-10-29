import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

interface HomeProps {
    className?: string; // Gör className optional
  }

export default function Home({className}: HomeProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isFullyScrolled, setIsFullyScrolled] = useState(false);

    useEffect(() => {
        const categoriesWrapper = document.querySelector('.short-bussiness-description');

        if (categoriesWrapper === null) {
            return;
        }

        let lastScrollY = window.scrollY;

        const checkVisibility = () => {
            const rect = categoriesWrapper.getBoundingClientRect();
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
                <img  src="/Hero2.jpg" alt="" className={`${isVisible && !isFullyScrolled ? 'visible' : ''}`}/>
            </div>
            
            <h2 className={`h2-gusto-pizza ${className}`}>VÄLKOMMEN TILL GUSTO PIZZA</h2>

            <div className={`short-bussiness-description ${isVisible && !isFullyScrolled ? 'visible' : ''}`}>
                <h2>SVERIGES ENDA OCH BÄSTA GUSTO PIZZA</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus, sed quaerat, quasi eos voluptate corporis nulla amet similique reiciendis, eveniet velit vel error maxime! Asperiores facilis molestiae repudiandae accusantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quod omnis magnam quasi nisi unde nesciunt corporis cupiditate ex, doloremque velit eveniet. Numquam perferendis culpa temporibus omnis similique esse laudantium!
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt, dolorum nam veniam, facilis perferendis, soluta odio alias consectetur iure ipsum. Provident expedita
                   
                </p>
            </div>

            <div className={`home-categories-wrapper ${isVisible && !isFullyScrolled ? 'visible' : ''}`}>
                <p>PIZZAN FÖR ALLA</p>
                <div className='category'>
                    <article>
                        <img src="/pizza-3525673_1920.jpg" alt="" />
                        <h3>Pizza</h3>
                    </article>
                    <article>
                        <img src="/pizza-3525673_1920.jpg" alt="" />
                        <h3>Vegansk Pizza</h3>
                    </article>
                    <article>
                        <img src="/pizza-3525673_1920.jpg" alt="" />
                        <h3>Vegetarisk Pizza</h3>
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
