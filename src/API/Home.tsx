import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <section className="page-section">
      <div className="page-header">
        <div>
          <h1 className="page-title">Welcome 👋</h1>
          <p className="page-subtitle">
            Discover playful cats and a curated collection of calming nature photography.
          </p>
        </div>
        <Link to="/gallery" className="cta-button">
          Explore Gallery
        </Link>
      </div>

      <div className="info-card">
        <p className="lead-text">
          This demo taps into the <span className="home-highlight">Cat as a Service</span> API for instant feline joy and
          showcases selected landscapes from <span className="home-highlight">Picsum</span>. Head to <strong>Cat</strong> for
          surprise meowments, or browse the <strong>Gallery</strong> for serene vibes.
        </p>
      </div>
    </section>
  )
}

export default Home
