import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='pink darken-2'>
			<div className='nav-wrapper'>
				<NavLink className='brand-logo' to='/news' style={{padding: '0 15px'}}>TikTuk</NavLink>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<NavLink to='/news'>News</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
