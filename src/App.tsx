import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './API/Navbar'
import Home from './API/Home'
import About from './API/About'
import NotFound from './API/NotFound'
import Cat from './API/Cat'
import Gallery from './API/Gallery'
import Status from './API/Status'

function App() {
	return (
		<div className="app-shell">
			<Navbar />
			<main className="app-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cat" element={<Cat />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/about" element={<About />} />
					<Route path="/status" element={<Status />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
