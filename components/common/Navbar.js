import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

import { useRouter } from 'next/router'

import styles from './navbar.module.css'
import ButtonTab from 'components/common/ButtonTab'

export default function Navbar() {
	const router = useRouter()

	return (
		<div className={styles['container']}>
			<div className={styles['left-wrapper']}>
				<img src='/logo.png' />
				Mock Stock
			</div>
			<div className={styles['btn-wrapper']}>
				<ButtonTab name='buy' onclick='buy' />
				<ButtonTab name='sell' onclick='sell' />
				<ButtonTab name='dashboard' onclick='dashboard' />
			</div>

			<div onClick={() => signOut()} className={styles['sign-out']}>
				Sign out
			</div>
		</div>
	)
}
