import React from 'react'
import './App.css'
import 'materialize-css'
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes
} from 'react-router-dom'
import ProfilePage from './components/ProfilePage/ProfilePage'
import NewsPage from './components/NewsPage/NewsPage'
import Navbar from './components/Navbar/Navbar'

const App = () => {
	return (
		<BrowserRouter>
				<Navbar />

			<div className='container'>
				<div className="content">
					<Routes>
						<Route path='/profile/:name' element={<ProfilePage />} />
						<Route path='/news' element={<NewsPage />} />
						<Route path='/*' element={<Navigate to='/news' />}/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
