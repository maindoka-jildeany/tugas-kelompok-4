import React, { useState } from 'react'

const Cat: React.FC = () => {
	const [ts, setTs] = useState<number>(Date.now())
	const [loading, setLoading] = useState<boolean>(true)
	const [type, setType] = useState<string>('square')
	const [text, setText] = useState<string>('')
	const [isGif, setIsGif] = useState<boolean>(false)

	const baseUrl = 'https://cataas.com/cat'
	let src = baseUrl

	// menentukan URL sesuai pilihan
	if (isGif && text) src += `/gif/says/${encodeURIComponent(text)}`
	else if (isGif) src += '/gif'
	else if (text) src += `/says/${encodeURIComponent(text)}`

	src += `?type=${type}&${ts}` // untuk ukuran dan anti-cache

	return (
		<div style={{ padding: 16,backgroundColor: '#8bb9e188', borderRadius: 12 }}>
			<h2>Random Cat Generator 🐱</h2>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 400, backgroundColor: '#a8d1deff', padding: 12, borderRadius: 8,margin: '0 auto' }}>
				<label>
					Size:
					<select value={type} onChange={(e) => setType(e.target.value)} style={{ marginLeft: 8 }}>
						<option value="square">square</option>
						<option value="medium">medium</option>
						<option value="small">small</option>
						<option value="xsmall">xsmall</option>
					</select>
				</label>

				<label>
					Text on cat:
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Enter something..."
						style={{ marginLeft: 8, padding: 4 }}
					/>
				</label>

				<label>
					<input
						type="checkbox"
						checked={isGif}
						onChange={(e) => setIsGif(e.target.checked)}
					/>
					<span style={{ marginLeft: 4 }}>Animated GIF</span>
				</label>
			</div>

			<div style={{ marginTop: 16, maxWidth: 600 }}>
				{loading && <p>Loading cat...</p>}
				<img
					src={src}
					alt="Random cat"
					onLoad={() => setLoading(false)}
					onError={() => setLoading(false)}
					style={{ width: '100%', height: 'auto', borderRadius: 8 }}
				/>
			</div>

			<div style={{ marginTop: 12 }}>
				<button
					onClick={() => {
						setLoading(true)
						setTs(Date.now()) // ubah timestamp biar fetch baru
					}}
				>
					New Cat
				</button>
			</div>
		</div>
	)
}

export default Cat
