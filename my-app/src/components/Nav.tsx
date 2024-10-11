import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
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
            </ul>
        </nav>
    )
}
