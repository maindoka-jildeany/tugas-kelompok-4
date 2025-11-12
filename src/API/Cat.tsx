import React, { useState, useEffect } from 'react'

const Cat: React.FC = () => {
  const [ts, setTs] = useState<number>(Date.now())
  const [loading, setLoading] = useState<boolean>(true)
  const [type, setType] = useState<string>('square')
  const [text, setText] = useState<string>('')
  const [isGif, setIsGif] = useState<boolean>(false)
  const [tag, setTag] = useState<string>('') // tag yang dipilih
  const [tags, setTags] = useState<string[]>([]) // list semua tag dari API
  const [tagsLoading, setTagsLoading] = useState<boolean>(true)

  const baseUrl = 'https://cataas.com/cat'
  let src = baseUrl

  // Tentukan URL sesuai pilihan user
  if (tag) src += `/${encodeURIComponent(tag)}`
  if (isGif && text) src += `/gif/says/${encodeURIComponent(text)}`
  else if (isGif) src += '/gif'
  else if (text) src += `/says/${encodeURIComponent(text)}`

  src += `?type=${type}&${ts}` // anti-cache + ukuran

  // ✅ Ambil daftar tags dari API cataas.com
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await fetch('https://cataas.com/api/tags')
        const data = await res.json()
        setTags(data)
      } catch (err) {
        console.error('Error fetching tags:', err)
      } finally {
        setTagsLoading(false)
      }
    }
    fetchTags()
  }, [])

  useEffect(() => {
    setLoading(true)
  }, [src])

  return (
    <section className="page-section">
      <div className="page-header">
        <div>
          <h1 className="page-title">Random Cat Generator 🐱</h1>
          <p className="page-subtitle">Dial in the vibe, then refresh to meet your next feline friend.</p>
        </div>
        <button
          className="cta-button secondary cat-refresh"
          onClick={() => {
            setLoading(true)
            setTs(Date.now()) // ubah timestamp biar fetch baru
          }}
        >
          Refresh Cat
        </button>
      </div>

      <div className="cat-wrapper">
        <div className="cat-panel">
          <div className="cat-controls">
            <label className="cat-label">
              Size
              <select value={type} onChange={(e) => setType(e.target.value)} className="cat-select">
                <option value="square">Square</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
                <option value="xsmall">XSmall</option>
              </select>
            </label>

            <label className="cat-label">
              Tag
              {tagsLoading ? (
                <span className="page-subtitle">Loading tags...</span>
              ) : (
                <select
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="cat-select"
                >
                  <option value="">Surprise me</option>
                  {tags.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              )}
            </label>

            <label className="cat-label">
              Text on cat
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Say something witty..."
                className="cat-input"
              />
            </label>

            <label className="cat-checkbox">
              <input type="checkbox" checked={isGif} onChange={(e) => setIsGif(e.target.checked)} />
              Animated GIF
            </label>
          </div>
        </div>

        <div className="cat-panel cat-gallery">
          <div className="cat-image-card">
            {loading && <div className="media-loader">Loading cat...</div>}
            <img
              src={src}
              alt="Random cat"
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)}
            />
          </div>
          <button
            className="cta-button cat-refresh"
            onClick={() => {
              setLoading(true)
              setTs(Date.now())
            }}
          >
            New Cat
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cat
