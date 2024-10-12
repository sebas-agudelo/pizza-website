import { Link } from 'react-router-dom'

export default function AdminPanel() {
    return (
        <div>
            <h2>Här kan du lägga till eller uppdatera dina produkter</h2>
            <form>
                <input type="search" 
                placeholder='Sök'
                />
            </form>

            <div>
                <button><Link to={`/nyprodukt`}>Lägg till produkt</Link></button>
                <button><Link to={``}>Uppdatera produkt</Link></button>
            </div>

        </div>
    )
}
