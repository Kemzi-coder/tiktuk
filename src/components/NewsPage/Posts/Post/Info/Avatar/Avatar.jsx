import React from 'react'
import styles from './Avatar.module.css'
import {NavLink} from 'react-router-dom'
import ImageThumbnail from '../../../../../../assets/thumbnail.svg'

const Avatar = ({name, avatar, mobile}) => {
	const onImageError = (e) => {
		e.target.src = ImageThumbnail
	}

	return (
		<NavLink
			to={'/profile/' + name}
			className={mobile ? `${styles.avatar} ${styles['avatar-mobile']}` : styles.avatar}
		>
			<img src={avatar} onError={onImageError} alt='avatar'/>
		</NavLink>
	)
}

export default Avatar
