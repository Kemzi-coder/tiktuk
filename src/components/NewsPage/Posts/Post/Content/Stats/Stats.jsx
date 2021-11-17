import React, {useState} from 'react'
import styles from './Stats.module.css'
import {abbreviateNumber} from '../../../../../../utils'
import LikeIcon from '../../../../../icons/LikeIcon'
import CommentIcon from '../../../../../icons/CommentIcon'
import ShareIcon from '../../../../../icons/ShareIcon'

const Stats = ({likes, comments, shares}) => {
	const [likesCount, setLikesCount] = useState(likes)

	const likesHandler = (e) => {
		e.target.classList.toggle(styles.active)

		if (e.target.classList.contains(styles.active)) {
			setLikesCount(likesCount + 1)
		} else {
			setLikesCount(likesCount - 1)
		}
	}

	return (
		<div className={styles.stats}>
			<div className={styles.item}>
				<button onClick={likesHandler} className={styles.button}>
					<LikeIcon />
				</button>


				<p className={styles.likesCount}>
					{abbreviateNumber(likesCount)}
				</p>
			</div>

			<div className={styles.item}>
				<button className={styles.button}>
					<CommentIcon />
				</button>

				<p className={styles.commentCount}>
					{abbreviateNumber(comments)}
				</p>
			</div>

			<div className={styles.item}>
				<button className={styles.button}>
					<ShareIcon />
				</button>

				<p className={styles.shareCount}>
					{abbreviateNumber(shares)}
				</p>
			</div>
		</div>
	)
}

export default Stats
