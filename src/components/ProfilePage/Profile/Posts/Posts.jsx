import React from 'react'
import Post from './Post/Post'

const Posts = ({posts}) => {
	return (
		<div className='row'>
			{
				posts.map((post, index) => <Post
					key={index}
					url={post.videoUrl}
					plays={post.playCount}
				/>)
			}
		</div>
	)
}

export default Posts
