import React from 'react'
import styles from './Caption.module.css'

const Caption = ({caption}) => {
	return (
		<p className={styles.caption}>
			{caption}
		</p>
	)
}

export default Caption
