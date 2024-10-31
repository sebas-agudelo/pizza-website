import React, { useEffect, useState } from 'react'
import { ICategories } from '../module/ICategories';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Categories() {
    const [categories, setCategories] = useState<ICategories[]>([]);

    useEffect(() => {
        const fectFunction = async () => {
            const res = await fetch('http://localhost:3001/getAllCategories');
            const data = await res.json();
            setCategories(data);

        }

        fectFunction()
    }, [])

    return (
        <section className='app-category-section'>

            <section className='hero'>
                <div className='category-img-wrapper'>
                    <img src="pexels-vanmalidate-784636.jpg" alt="" />
                </div>

                {/* <div className='SVG'>
                    <svg width="300" height="80">
                        <defs>
                            <path id="text-curve" d="M 50,108 A 75,50 0 1,1 250,100" />
                        </defs>
                        <text font-size="40" font-family="Arial, sans-serif">
                            <textPath href="#text-curve" startOffset="50%" text-anchor="middle">
                                Gusto Pizza
                            </textPath>
                        </text>
                    </svg>
                </div> */}
                <div className='div'>
                    <h2>VÅR MENY</h2>
                    <p>Upptäck en värld av smaker hos oss på GUSTO PIZZA. Här hittar du ett brett urval av pizzor tillagade med färska råvaror och en passion för hantverket. Oavsett om du är sugen på en klassisk Margherita, en smakrik Capricciosa eller en egenkomponerad favorit, så har vi något för dig. Välkommen att utforska vår meny och låt oss ta dig på en smakresa du sent kommer glömma!</p>
                </div>

            </section>


            <section className='app-category-content-wrapper'>
            {categories.map((category, index) => (
                <article key={index}>

                    <div className='app-category-img'>
                        <img src={category.category_img} alt={category.category_name} />
                    </div>

                    <span><Link to={``}>{category.category_name}</Link></span>
                </article>
            ))}
            </section>

            <Footer />
        </section>
    )
}
