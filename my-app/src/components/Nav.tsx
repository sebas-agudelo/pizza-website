import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface IPropos{
    toggleHomeVisibility: any
}

export default function Nav({ toggleHomeVisibility }: IPropos) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const open = () => {
        setIsOpen(true);
        toggleHomeVisibility(true);
        setScrollPosition(window.scrollY);
        document.body.classList.add('hide-scroll'); 
    };

    const close = () => {
        setIsOpen(false);
        toggleHomeVisibility(false);
        window.scrollTo(0, scrollPosition); // Återställ scrollposition
        document.body.classList.remove('hide-scroll'); 
    };

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
                    <ul onClick={close}>
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
                        <li>
                            njasbndj
                        </li>

                    </ul>
                </div>
            )}
        </nav>
    </>
    )
}
