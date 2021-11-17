import React from 'react'
import styles from './Description.module.css'
import Avatar from '../Avatar/Avatar'
import Names from './Names/Names'
import Caption from './Caption/Caption'
import Music from './Music/Music'

const Description = ({author, music, caption}) => {
	return (
		<div className={styles.description}>
			<div className={styles['author-info']}>
				<Avatar
					mobile={true}
					name={author.name}
					avatar={author.avatar}
				/>

				<Names
					name={author.name}
					nickname={author.nickName}
					verified={author.verified}
				/>
			</div>

			<Caption caption={caption}/>

			<Music music={music}/>
		</div>
	)
}

export default Description
