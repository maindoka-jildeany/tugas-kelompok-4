import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/cat', label: 'Cat' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about', label: 'About' },
    { to: '/status', label: 'Status' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="nav-brand">Our Random App</span>
        <div className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
