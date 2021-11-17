import React from 'react'
import styles from './Names.module.css'
import {NavLink} from 'react-router-dom'
import VerifiedIcon from '../../../../../../icons/VerifiedIcon'

const Names = ({name, nickname, verified}) => {
	return (
		<NavLink to={'/profile/' + name} className={styles.names} >
			<p className={styles.name}>
				<span>{name}</span>
				{
					verified
						? <VerifiedIcon className={styles.verified}/>
						: ''
				}
			</p>
			<p className={styles.nickname}>{nickname}</p>
		</NavLink>
	)
}

export default Names
