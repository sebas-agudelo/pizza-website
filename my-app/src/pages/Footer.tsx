import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>

      <div className='footer-order-wrapper'>
        <div className='order-btns'>
          <h2>Beställ från Gusto Pizza nu!</h2>



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
          <p><i className="fa-solid fa-phone"></i>: 070-000-00-00</p>
          <p><i className="fa-regular fa-envelope"></i>: gustopizza@pizza.se</p>
        </div>

        <div className='footer-logo-wrapper'>
          <div className='logo'>
            <img src="LOGO.png" alt="" />
          </div>
        </div>

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
