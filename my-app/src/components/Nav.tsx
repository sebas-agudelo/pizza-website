import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface IProps {
    toggleHomeVisibility: any;
}

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scrollar endast på `pathname` ändring
    }, [pathname]);

    return null;
};

export default function Nav({ toggleHomeVisibility }: IProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const links = useRef<HTMLUListElement | null>(null);

    const open = () => {
        setIsOpen(true);
        toggleHomeVisibility(true);
        // setScrollPosition(window.scrollY);
        // document.body.style.top = `-${window.scrollY}px`;
        // document.body.classList.add('hide-scroll');
    };

    const close = () => {
        setIsOpen(false);
        toggleHomeVisibility(false);

        // const scrollY = document.body.style.top;
        // document.body.classList.remove('hide-scroll');
        // document.body.style.removeProperty('top');
        // window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };




    // const handleKeyDown = (event: KeyboardEvent) => {
    //     if (isOpen && (event.key === 'ArrowUp' || event.key === 'ArrowDown')) {
    //         event.preventDefault();
    //     }
    // };

    // const handleWheel = (event: WheelEvent) => {
    //     if (isOpen) {
    //         const linksElement = links.current;
    //         if (linksElement && linksElement.contains(event.target as Node)) {
    //             const { scrollTop, scrollHeight, clientHeight } = linksElement;

    //             if (event.deltaY < 0 && scrollTop === 0) {
    //                 event.preventDefault();
    //             }

    //             if (event.deltaY > 0 && scrollTop + clientHeight >= scrollHeight) {
    //                 event.preventDefault();
    //             }
    //         } else {
    //             event.preventDefault();
    //         }
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('keydown', handleKeyDown);
    //     window.addEventListener('wheel', handleWheel, { passive: false });

    //     return () => {
    //         window.removeEventListener('keydown', handleKeyDown);
    //         window.removeEventListener('wheel', handleWheel);
    //     };
    // }, [isOpen, links]);

    return (
        <>
            <nav>
                <div className='logo-and-user-wrapper'>
                    <div className='logo'>
                        <img src="/GUSTO(1).png" alt="Logo" />
                    </div>

                    <ul>
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
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/menu`}>Menu</Link></li>
                        <li><Link to={``}>About</Link></li>
                        <li><Link to={`#contact`}>Contact</Link></li>
                      
                    </ul>
                </div>

            </nav>
        </>
    );
}
