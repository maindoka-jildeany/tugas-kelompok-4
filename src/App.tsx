import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './API/Navbar'
import Home from './API/Home'
import About from './API/About'
import NotFound from './API/NotFound'
import Cat from './API/Cat'
import Gallery from './API/Gallery'

function App() {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-800">
			<Navbar />
			<div style={{ padding: 24 }}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cat" element={<Cat />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
