import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  const categories = [
    { id: 'remeras', label: 'Remeras' },
    { id: 'buzos', label: 'Buzos' },
    { id: 'accesorios', label: 'Accesorios' },
  ]

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <h1>Tanto Amor</h1>
        </Link>
      </div>

      <nav className="navbar__links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
          }
        >
          Inicio
        </NavLink>

        {categories.map((cat) => (
          <NavLink
            key={cat.id}
            to={`/category/${cat.id}`}
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
          >
            {cat.label}
          </NavLink>
        ))}
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar
