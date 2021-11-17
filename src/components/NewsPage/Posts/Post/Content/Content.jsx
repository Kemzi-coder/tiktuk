import React from 'react'
import styles from './Content.module.css'
import Video from './Video/Video'
import Stats from './Stats/Stats'

const Content = ({videoUrl, likesCount, commentCount, shareCount, videoHasPlayed, setVideoHasPlayed}) => {
	return (
		<div className={styles.content}>
			<Video
				url={videoUrl}
				videoHasPlayed={videoHasPlayed}
				setVideoHasPlayed={setVideoHasPlayed}
			/>

			<Stats
				likes={likesCount}
				comments={commentCount}
				shares={shareCount}
			/>
		</div>
	)
}

export default Content
