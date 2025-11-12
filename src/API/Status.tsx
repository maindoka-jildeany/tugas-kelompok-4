import { Link } from 'react-router-dom'

const Status: React.FC = () => {
  return (
    <section className="status-page">
      <h1 className="status-title">200 — Everything’s OK, Purrfect</h1>
      <img
        src="https://http.cat/200"
        alt="Status OK"
        className="status-illustration"
      />
      <p className="status-text">
        Server sehat, API responsif, dan kucing tersenyum. Silakan lanjut jelajahi aplikasi ini.
      </p>
      <Link to="/" className="cta-button secondary">
        Back to Home
      </Link>
    </section>
  )
}

export default Status
