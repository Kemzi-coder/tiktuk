import React from 'react'
import styles from './Loader.module.css'

const Loader = ({className}) => {
	return (
		<div className={className ? styles.loader + ' ' + className : styles.loader}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Loader
