import React from 'react'
import styles from './VideoLoader.module.css'
import Loader from '../Loader/Loader'

const VideoLoader = () => {
	return (
		<Loader className={styles.loader}/>
	)
}

export default VideoLoader
