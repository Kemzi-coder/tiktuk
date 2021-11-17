import React from 'react'
import styles from './Music.module.css'
import MusicIcon from '../../../../../../icons/MusicIcon'

const Music = ({music}) => {
	return (
		<a className={styles.music} href={music.playUrl} rel='noreferrer' target='_blank'>
			<MusicIcon className={styles.icon}/>
			<span>{music.musicName + ' - ' + music.musicAuthor}</span>
		</a>
	)
}

export default Music
