const About: React.FC = () => {
  return (
    <section className="page-section">
      <div className="page-header">
        <div>
          <h1 className="page-title">About This Playground</h1>
          <p className="page-subtitle">A lightweight space to experiment with playful APIs and UI polish.</p>
        </div>
      </div>

      <div className="info-card">
        <p className="lead-text">
          Kami membangun aplikasi kecil ini untuk mempelajari cara menggunakan API gratis, seperti{' '}
          <span className="home-highlight">Cat as a Service</span> untuk gambar kucing acak dan{' '}
          <span className="home-highlight">Picsum</span> untuk foto pemandangan. Proyek ini menjadi ajang
          bereksperimen dengan state React, fetch data, dan membuat antarmuka yang terasa modern.
        </p>
      </div>
    </section>
  )
}

export default About
