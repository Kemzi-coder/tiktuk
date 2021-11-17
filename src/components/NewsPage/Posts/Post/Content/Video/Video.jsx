import React, {useEffect, useRef, useState} from 'react'
import styles from './Video.module.css'
import VideoLoader from '../../../../../loaders/VideoLoader/VideoLoader'
import useElementOnScreen from '../../../../../../hooks/observer.hook'
import PlayIcon from '../../../../../icons/PlayIcon'
import PauseIcon from '../../../../../icons/PauseIcon'

const Video = ({url, setVideoHasPlayed, videoHasPlayed}) => {
	const [playing, setPlaying] = useState(false)

	const videoRef = useRef(null)
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.3
	}

	const visible = useElementOnScreen(options, videoRef)

	const onVideoClick = () => {
		if (playing) {
			videoRef.current.pause()
			setPlaying(!playing)
		} else {
			videoRef.current.play()
			setPlaying(!playing)
		}
	}

	const [videoLoaded, setVideoLoaded] = useState(false)

	const onLoadedData = () => {
		setVideoLoaded(true)
	}

	useEffect(() => {
		if (videoHasPlayed) {
			if (visible) {
				if (!playing) {
					videoRef.current.play()
					setPlaying(true)
				}
			} else {
				if (playing) {
					videoRef.current.pause()
					setPlaying(false)
				}
			}
		}
	}, [visible, videoHasPlayed])

	const onFirstPlay = (e) => {
		if (!videoHasPlayed) {
			setVideoHasPlayed(true)
		}
	}

	return (
		<div className={styles['video-container']}>
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
				onPlay={onFirstPlay}
			></video>

			<button
				className={styles.button}
				style={{opacity: videoLoaded ? '1' : '0'}}
				onClick={onVideoClick}
			>
				{
					playing
						? <PauseIcon/>
						: <PlayIcon/>
				}
			</button>
		</div>
	)
}

export default Video
