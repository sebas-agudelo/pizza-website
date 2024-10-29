import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    toggleHomeVisibility: any;
}

export default function Nav({ toggleHomeVisibility }: IProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const links = useRef<HTMLUListElement | null>(null);

    const open = () => {
        setIsOpen(true);
        toggleHomeVisibility(true);
        setScrollPosition(window.scrollY);
        document.body.style.top = `-${window.scrollY}px`;
        document.body.classList.add('hide-scroll');
    };

    const close = () => {
        setIsOpen(false);
        toggleHomeVisibility(false);
        const scrollY = document.body.style.top;
        document.body.classList.remove('hide-scroll');
        document.body.style.removeProperty('top');
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (isOpen && (event.key === 'ArrowUp' || event.key === 'ArrowDown')) {
            event.preventDefault();
        }
    };

    const handleWheel = (event: WheelEvent) => {
        if (isOpen) {
            const linksElement = links.current;
            if (linksElement && linksElement.contains(event.target as Node)) {
                const { scrollTop, scrollHeight, clientHeight } = linksElement;

                if (event.deltaY < 0 && scrollTop === 0) {
                    event.preventDefault();
                }

                if (event.deltaY > 0 && scrollTop + clientHeight >= scrollHeight) {
                    event.preventDefault();
                }
            } else {
                event.preventDefault();
            }
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('wheel', handleWheel);
        };
    }, [isOpen, links]);

    return (
        <>
            <nav>
                <div className='logo-and-user-wrapper'>
                    <div className='logo'>
                        <img src="/LOGO.png" alt="Logo" />
                    </div>

                    <ul>
                        <li>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </li>
                        {/* <li>
                            <Link to={`/login`}><i className="fa-regular fa-user"></i></Link>
                        </li> */}
                        {/* <li>
                            <Link to={``}>Logga ut</Link>
                        </li> */}
                        {/* <li>
                            <Link to={``}><i className="fa-solid fa-cart-plus"></i></Link>
                        </li> */}
                        <li>
                            <i className={`fa-solid fa-bars mobile-menu-burger ${isOpen ? 'hidden' : ''}`} onClick={open}></i>
                            <i className={`fa-solid fa-xmark mobile-menu-close ${isOpen ? 'active' : ''}`} onClick={close}></i>
                        </li>
                    </ul>
                </div>


                <div className={`links ${isOpen ? 'active' : ''}`}>
                    <div className='div'></div>
                    <ul onClick={close} ref={links}>
                        {/* <li><Link to={`/sss`}>s</Link></li>
                        <li><Link to={`/`}>Hem</Link></li> */}
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakta oss</Link></li>
                        {/* <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={`/sss`}>s</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/kon`}>oss</Link></li>
                        <li><Link to={`/sss`}>s</Link></li>
                        <li><Link to={`/sss`}>s</Link></li>
                        <li><Link to={`/sss`}>s</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={`/sss`}>s</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/kon`}>oss</Link></li>
                        <li><Link to={`/sss`}>s</Link></li>
                        <li><Link to={`/sss`}>s</Link></li>
                        <li><Link to={`/sss`}>s</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={`/sss`}>s</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/`}>Hem</Link></li>
                        <li><Link to={`/pizzor`}>Meny</Link></li>
                        <li><Link to={``}>Om oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt oss</Link></li>
                        <li><Link to={`/kon`}>oss</Link></li>
                        <li><Link to={`/sss`}>s</Link></li>
                        <li><Link to={`/sss`}>s</Link></li> */}
                    </ul>
                </div>

            </nav>
        </>
    );
}
