import React from 'react'
import styles from './Stats.module.css'
import Item from './Item/Item'

const Stats = ({likes, following, followers}) => {
	return (
		<div className={styles.stats}>
			<Item unit='Following' unitCount={following}/>

			<Item unit='Followers' unitCount={followers}/>

			<Item unit='Likes' unitCount={likes}/>
		</div>
	)
}

export default Stats
