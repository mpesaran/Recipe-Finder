import { Link } from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
  return (
    <div className='navbar' >
        <nav>
            <Link className='brand' to = "/">
                <h1>Recipe Finder</h1>
            </Link>
            <Link to="/create">Create new recipe</Link>
        </nav>
    </div>
  )
}
