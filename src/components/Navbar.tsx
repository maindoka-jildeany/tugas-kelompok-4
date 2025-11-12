import { NavLink } from 'react-router-dom'

const activeStyle = { fontWeight: 700, color: '#fff', backgroundColor: '#4CAF50', padding: '8px 12px', borderRadius: 8 }
const normalStyle = { padding: '8px 12px', borderRadius: 8, background: '#e8e8e8', color: '#333' }

const Navbar: React.FC = () => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, background: 'white', borderRadius: 8 }}>
      <h1 style={{ margin: 0 }}>🐾 My Cat App</h1>
      <nav style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
        <NavLink to="/" end style={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
          Home
        </NavLink>
        <NavLink to="/cat" style={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
          CAT
        </NavLink>
        <NavLink to="/gallery" style={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
          Gallery
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
