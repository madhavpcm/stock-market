import React from 'react'
import styles from './button-tab.module.css'
import { useRouter } from 'next/router'

export default function ButtonTab({ name, onclick }) {
	const router = useRouter()

	return (
		<div
			className={styles['btn']}
			onClick={() => {
				router.push(`/${onclick}`)
			}}
		>
			{name}
		</div>
	)
}
