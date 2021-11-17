import React from 'react'
import styles from './Bio.module.css'

const Bio = ({bio}) => {
	return (
		<div className={styles.bio}>
			<p>{bio}</p>
		</div>
	)
}

export default Bio
