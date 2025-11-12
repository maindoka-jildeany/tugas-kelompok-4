const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome 👋</h2>
      <p style={{ color: '#555', maxWidth: 500, margin: '0 auto', backgroundColor: '#f0f0f0', padding: 16, borderRadius: 8 }}>
        This is a simple app that fetches random cats from the
        <a href="https://cataas.com" target="_blank" rel="noreferrer"> Cat as a Service API</a>.
        Click <b>CAT</b> for a random one, or explore the <b>Gallery</b>!
      </p>
    </div>
  )
}

export default Home
