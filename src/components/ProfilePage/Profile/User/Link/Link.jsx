import React from 'react'

const Link = ({url}) => {
	return (
		<div className='link'>
			<a href={url} target='_blank' rel='noreferrer'>{url}</a>
		</div>
	)
}

export default Link
