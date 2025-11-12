const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome 👋</h2>
      <p style={{ color: '#555', maxWidth: 600, margin: '0 auto' }}>
        This is a simple app that fetches random cats from the <a href="https://cataas.com" target="_blank" rel="noreferrer">Cat as a Service API</a>.
        Use the navigation to view a random cat or a gallery.
      </p>
    </div>
  )
}

export default Home
