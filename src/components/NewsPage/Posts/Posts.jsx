import React, {useState} from 'react'
import Post from './Post/Post'
import useAxios from '../../../hooks/axios.hook'
import Loader from '../../loaders/Loader/Loader'

const Posts = () => {
	const {response, loading, error} = useAxios({url: 'https://tiktok33.p.rapidapi.com/trending/feed'})

	// to prevent autoplay error
	const [videoHasPlayed, setVideoHasPlayed] = useState(false)

	if (error) {
		return <h1>Error: {error}</h1>
	}

	return (
		<div className='posts'>
			{
				loading
					? <Loader />
					: response.map((post, index) => <Post
						key={index}
						videoHasPlayed={videoHasPlayed}
						setVideoHasPlayed={setVideoHasPlayed}
						{...post}
					/>)
			}
		</div>
	)
}

export default Posts
