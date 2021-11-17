import React from 'react'
import styles from './Info.module.css'
import Avatar from './Avatar/Avatar'
import Names from './Names/Names'

const Info = ({name, nickname, avatar, verified}) => {
	return (
		<div className={styles.info}>
			<Avatar avatar={avatar}/>
			<Names name={name} nickname={nickname} verified={verified}/>
		</div>
	)
}

export default Info
