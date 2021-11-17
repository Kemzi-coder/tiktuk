import React from 'react'
import styles from './Avatar.module.css'
import ImageThumbnail from '../../../../../../assets/thumbnail.svg'

const Avatar = ({avatar}) => {
	const onImageError = (e) => {
		e.target.src = ImageThumbnail
	}

	return (
		<div className={styles.avatar}>
			<img src={avatar} onError={onImageError} alt="avatar"/>
		</div>
	)
}

export default Avatar
