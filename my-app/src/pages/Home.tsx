import React from 'react';
import Nav from '../components/Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='home'>
            <div className='hero-img'></div> {/* Bakgrundsbild */}
            
            <div className='btn-wrapper'>
                <button><Link to={`/pizzor`}>Beställ</Link></button>
            </div>


            <div className='bla'>
              <h1>Hello World</h1>
            </div>

            <Footer/>
        </div>
    );
}
