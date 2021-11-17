import React, {useRef, useState} from 'react'
import styles from './Video.module.css'
import VideoLoader from '../../../../../loaders/VideoLoader/VideoLoader'
import ViewsIcon from '../../../../../icons/ViewsIcon'
import {abbreviateNumber} from '../../../../../../utils'

const Video = ({url, plays}) => {
	const [videoLoaded, setVideoLoaded] = useState(false)

	const videoRef = useRef(null)

	const onLoadedData = () => {
		setVideoLoaded(true)
	}

	const onMouseEnter = () => {
		if (videoLoaded) {
			videoRef.current.play()
		}
	}

	const onMouseLeave = () => {
		if (videoLoaded) {
			videoRef.current.pause()
		}
	}

	return (
		<div
			className={styles['video-container']}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div
				className={styles.thumb}
				style={{opacity: videoLoaded ? '0' : '1'}}
			>
				<VideoLoader />
			</div>

			<video
				className={styles.video}
				src={url}
				frameBorder='0'
				loop='loop'
				style={{opacity: videoLoaded ? '1' : '0'}}
				onLoadedData={onLoadedData}
				ref={videoRef}
				preload='true'
				muted='muted'
			></video>

			<p className={styles.plays}>
				<ViewsIcon className={styles.icon}/>
				<span>{plays ? abbreviateNumber(plays) : 0}</span>
			</p>
		</div>
	)
}

export default Video
