import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className='img-bkg'> 
        <img src="pexels-arthurbrognoli-3343627.jpg" alt="" />
      </div>
      <div className='footer-order-wrapper'>
        <h2>Beställ från Gusto Pizza nu!</h2>

        <div className='order-btns'>
          <button>
            <Link to={`/pizzor`}>Avhämtning</Link>
          </button>
          <button>
            <Link to={`https://www.foodora.se/`}>Hemleverans</Link>
          </button>

        </div>

        <div className='footer-map'>

        </div>
      </div>

      <div className='footer-info-wrapper'>

        <div className='footer-contact-wrapper'>
          <h2>Kontakt</h2>
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

        {/* <div className='footer-logo-wrapper'>
          <div className='logo'>
            <img src="LOGO.png" alt="" />
          </div>
        </div> */}

        <div className='social-media-icons'>

          <div><i className="fa-brands fa-instagram"></i></div>
          <div><i className="fa-brands fa-facebook-f"></i></div>
          <div><i className="fa-brands fa-tiktok"></i></div>

        </div>

      </div>


      <div className='copyright'>
        <p>© 2024 Gusto Pizza. All rights reserved.</p>
      </div>




    </footer>
  )
}
