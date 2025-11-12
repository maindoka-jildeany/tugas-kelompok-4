import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <section className="status-page">
      <h1 className="status-title">404 — Lost in the Meowtrix</h1>
      <img
        src="https://http.cat/404"
        alt="404 Not Found"
        className="status-illustration"
      />
      <p className="status-text">
        The page you were chasing slipped away. Jangan khawatir, kucing pemandu kami siap mengantar pulang.
      </p>
      <Link to="/" className="cta-button secondary">
        Go Home Safely
      </Link>
    </section>
  )
}

export default NotFound
