import React from 'react'
import styles from './User.module.css'
import Info from './Info/Info'
import Stats from './Stats/Stats'
import Bio from './Bio/Bio'
import Link from './Link/Link'

const User = ({stats, user, name}) => {
	return (
		<div className={styles.user}>
			<Info
				name={name}
				nickname={user.nickname}
				avatar={user.avatarThumb}
				verified={user.verified}
			/>

			<Stats
				following={stats.followingCount}
				followers={stats.followerCount}
				likes={stats.heartCount}
			/>

			<Bio bio={user.signature}/>


			{
				user.bioLink
					? 	<Link url={user.bioLink.link || ''}/>
					: ''
			}
		</div>
	)
}

export default User
