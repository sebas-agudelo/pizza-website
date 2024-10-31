import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer id='contact'>
      <svg width="300" height="80">
        <defs>
          <path id="text-curve" d="M 50,108 A 75,50 0 1,1 250,100" />
        </defs>
        <text font-size="40" font-family="Arial, sans-serif" fill='#ffffffb0'>
          <textPath href="#text-curve" startOffset="50%" text-anchor="middle">
            Gusto Pizza
          </textPath>
        </text>
      </svg>


      <div className='app-actions-and-map'>
        <div className='order-btns'>
          <button>
            <a href={`/meny`}>Avhämtning</a>
          </button>
          <button>
            <a href={`https://www.foodora.se/`}>Hemleverans</a>
          </button>
        </div>

        <div className='google-map'>

        </div>
      </div>

      <div className='footer-info-section'>
          <h2>Kontakt</h2>
        <div className='contact-section'>
          <p>
            <a href="tel:0700000000">
              <i className="fa-solid fa-phone"></i>: 070-000-00-00
            </a>
          </p>
          <p>
            <a href="mailto:gustopizza@pizza.se">
              <i className="fa-regular fa-envelope"></i>: gustopizza@pizza.se
            </a>
          </p>
        </div>

        <h2>Öppettider</h2>

        <div className='open-times-section'>
          <p>Mån - Fre 10:30 - 21:00</p>
          <p>Lör - 11:30 - 22:00</p>
          <p>Sön - stängd</p>
        </div>

        {/* <div className='footer-logo-wrapper'>
    <div className='logo'>
      <img src="LOGO.png" alt="" />
    </div>
  </div> */}
      </div>

      <div className='social-media-icons'>

        <div><i className="fa-brands fa-instagram"></i></div>
        <div><i className="fa-brands fa-facebook-f"></i></div>
        <div><i className="fa-brands fa-tiktok"></i></div>

      </div>

      <div className='copyright'>
        <p>© 2024 Gusto Pizza. All rights reserved.</p>
      </div>




    </footer>
  )
}
