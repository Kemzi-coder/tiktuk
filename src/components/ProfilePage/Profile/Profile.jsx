import React from 'react'
import User from './User/User'
import useAxios from '../../../hooks/axios.hook'
import Posts from './Posts/Posts'
import Loader from '../../loaders/Loader/Loader'

const Profile = ({name}) => {
	const userInfo = useAxios({url: `https://tiktok33.p.rapidapi.com/user/info/${name}`})
	const userPosts = useAxios({url: `https://tiktok33.p.rapidapi.com/user/feed/${name}`})
	const loading = userInfo.loading || userPosts.loading

	if (userInfo.error || userPosts.error) {
		return <h1>Error: {userInfo.error || userPosts.error}</h1>
	}

	return (
		<div className='profile'>
			{
				loading
					? <Loader />
					: <div>
							<User name={name} {...userInfo.response}/>
							<Posts posts={userPosts.response}/>
				     </div>
			}
		</div>
	)
}

export default Profile
