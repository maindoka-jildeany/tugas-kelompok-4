import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav style={{ backgroundColor:'#76aed6ff' , padding: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderRadius: 8, marginBottom: 24 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>🐾 My Cat App</h2>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <Link to="/">Home</Link>
          <Link to="/cat">CAT</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
