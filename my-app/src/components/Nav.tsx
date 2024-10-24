import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);

    const close = () => setIsOpen(false)



    return (<>
        <nav>

            <div className='logo-and-user-wrapper'>
                <div className='logo'>
                    <img src="/LOGO.png" alt="" />
                </div>

                <ul>
                    <li>

                        <i className="fa-solid fa-magnifying-glass"></i>
                    </li>
                    <li>
                        <Link to={`/login`}><i className="fa-regular fa-user"></i></Link>
                    </li>
                    <li>
                        <Link to={``}>Logga ut</Link>
                    </li>
                    {/* <li>
                        <Link to={``}>Mina Beställningar</Link>
                    </li> */}
                    <li>
                        <Link to={``}><i className="fa-solid fa-cart-plus"></i></Link>
                    </li>
                    <li className='mobile-menu-icons'>
                        {isOpen ?
                            <i className="fa-solid fa-xmark mobile-menu-close" onClick={close}></i> :
                            <i className="fa-solid fa-bars mobile-menu-burger" onClick={open}></i>
                        }

                    </li>
                </ul>
            </div>


            {isOpen && (
                <div className='links'>
                    <ul>
                        <li>
                            <Link to={`/`}>Hem</Link>
                        </li>

                        <li>
                            <Link to={`/pizzor`}>Meny</Link>
                        </li>
                        <li>
                            <Link to={``}>Om oss</Link>
                        </li>
                        <li>
                            <Link to={`/kontakt`}>Kontakt oss</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    </>
    )
}
