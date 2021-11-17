import React from 'react'
import Post from './Post/Post'

const Posts = ({posts}) => {
	return (
		<div className='row'>
			{
				posts.map((post, index) => <Post
					key={index}
					cover={post.cover}
					plays={post.plays}
				/>)
			}
		</div>
	)
}

export default Posts
