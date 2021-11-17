import React from 'react'
import styles from './Post.module.css'
import Info from './Info/Info'
import Content from './Content/Content'

const Post = (props) => {
	return (
		<div className={styles.post}>
			<Info
				author={props.authorMeta}
				music={props.musicMeta}
				caption={props.text}
			/>
			<Content
				videoUrl={props.videoUrl}
				videoHasPlayed={props.videoHasPlayed}
				setVideoHasPlayed={props.setVideoHasPlayed}
				likesCount={props.diggCount}
				commentCount={props.commentCount}
				shareCount={props.shareCount}
			/>
		</div>
	)
}

export default Post
