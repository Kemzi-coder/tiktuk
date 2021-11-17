import React from 'react'
import styles from './Item.module.css'
import {abbreviateNumber} from '../../../../../../utils'

const Item = ({unit, unitCount}) => {
	return (
		<div className={styles.item}>
			<strong className={styles.number}>{abbreviateNumber(unitCount)}</strong>
			<p className='unit'>{unit}</p>
		</div>
	)
}

export default Item
