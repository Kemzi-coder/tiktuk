import React from 'react'
import Profile from './Profile/Profile'
import {useParams} from 'react-router-dom'

const ProfilePage = () => {
	const {name} = useParams()

	return (
		<div className='profile-page'>
			<Profile name={name} />
		</div>
	)
}

export default ProfilePage
