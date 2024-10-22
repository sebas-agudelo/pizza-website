import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
    const location = useLocation();
    const [loc, setLoc] = useState(false)

    useEffect(() => {
        locFunc()
    }, [location])

    const locFunc = () => {
        if (location.pathname === "/") {

            setLoc(true);
        } else {
            setLoc(false)
        }
    }


    return (
        <nav className={loc ? 'home-nav' : ''}>
            <ul>
                <li>
                    <Link to={`/`}>Hem</Link>
                </li>

                <li>
                    <Link to={`/pizzor`}>Meny</Link>
                </li>
                <li>
                    <Link to={`/kontakt`}>Kontakt</Link>
                </li>
                <li>
                    <Link to={`/login`}>Logga in</Link>
                </li>
            </ul>
        </nav>
    )
}
