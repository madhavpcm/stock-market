import React, { Children } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

import { useRouter } from 'next/router'

import styles from './navbar.module.css'

export default function Navbar({ children }) {
	const router = useRouter()

	return (
		<div className={styles['container']}>
			<div className={styles['left-wrapper']}>
				<div className={styles['left-heading-wrapper']}>
					<img src='/tathva.png' />
					<span>Mock Stock</span>
				</div>
				<div className={styles['left-link-wrapper']}>
					<div className={styles['left-link']}>
						<img src='/cash.svg' />
						<span>Buy</span>
					</div>
					<div className={styles['left-link']}>
						<img src='/cash.svg' />
						<span>Sell</span>
					</div>
					<div className={styles['left-link']}>
						<img src='/cash.svg' />
						<span>Portfolio</span>
					</div>
				</div>
			</div>
			<div className={styles['right-wrapper']}>
				<div className={styles['right-top-wrapper']}>
					<div className={styles['right-top-text-wrapper']}>
						John Doe
						<span>johndoe@gmail.com</span>
					</div>
					<img src='/tathva.png' />
				</div>
				{children}
			</div>
		</div>
	)
}
