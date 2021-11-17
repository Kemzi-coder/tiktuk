import React from 'react'
import styles from './Post.module.css'
import {abbreviateNumber} from '../../../../../utils'
import ViewsIcon from '../../../../icons/ViewsIcon'

const Post = ({cover, plays}) => {
	return (
		<div className='col l3 m6 s12'>
			<div
				className={styles.content}
				style={{backgroundImage: `url(${cover})`}}
			>
				<p className={styles.plays}>
					<ViewsIcon className={styles.icon}/>
					<span>{plays ? abbreviateNumber(plays) : 0}</span>
				</p>
			</div>
		</div>
	)
}

export default Post
