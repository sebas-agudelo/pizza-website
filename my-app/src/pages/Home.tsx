import React from 'react';
import Nav from '../components/Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

interface HomeProps {
    className?: string; // Gör className optional
  }

export default function Home({className}: HomeProps) {

    return (
        <div className={`home ${className}`}>
            
            <div className='hero-img'>
                <img src="/hero-img.jpg" alt="" />
            </div>


            {/* <div className='btn-wrapper'>
                <button><Link to={`/pizzor`}>Beställ</Link></button>
            </div> */}

            <div className='home-categories-wrapper'>
                <h2>VI HAR DEN PERFEKTA PIZZAN FÖR ALLA</h2>
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
            

            <div className='short-bussiness-description'>
                <h2>SVERIGES ENDA OCH BÄSTA GUSTO PIZZA</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus, sed quaerat, quasi eos voluptate corporis nulla amet similique reiciendis, eveniet velit vel error maxime! Asperiores facilis molestiae repudiandae accusantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quod omnis magnam quasi nisi unde nesciunt corporis cupiditate ex, doloremque velit eveniet. Numquam perferendis culpa temporibus omnis similique esse laudantium!
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt, dolorum nam veniam, facilis perferendis, soluta odio alias consectetur iure ipsum. Provident expedita
                   
                </p>
            </div>

            {/* 
            <Footer /> */}
        </div>
    );
}
