import React from 'react'
import styles from './Names.module.css'
import VerifiedIcon from '../../../../../icons/VerifiedIcon'

const Names = ({name, nickname, verified}) => {
	return (
		<div className='names'>
			<p className={styles.name}>
				{name}
				{verified
					? <VerifiedIcon/>
					: ''
				}
			</p>
			<p className={styles.nickname}>{nickname}</p>
		</div>
	)
}

export default Names
