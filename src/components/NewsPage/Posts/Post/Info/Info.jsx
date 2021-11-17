import React from 'react'
import styles from './Info.module.css'
import Avatar from './Avatar/Avatar'
import Description from './Description/Description'

const Info = ({author, music, caption}) => {
	return (
		<div className={styles.info}>
			<Avatar
				name={author.name}
				avatar={author.avatar}
			/>

			<Description
				author={author}
				music={music}
				caption={caption}
			/>
		</div>
	)
}

export default Info
