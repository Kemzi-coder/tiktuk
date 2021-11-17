import React from 'react'
import Video from './Video/Video'

const Post = ({url, plays}) => {
	return (
		<div className='col l3 m6 s12'>
			<Video url={url} plays={plays}/>
		</div>
	)
}

export default Post
