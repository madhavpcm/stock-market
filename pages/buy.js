import Navbar from 'components/common/Navbar'
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

import styles from '../components/buy.module.css'

export default function BuyPage() {
	const [openFaq, setOpenFaq] = useState('')
	const data = [
		{ name: 'Bitcoin', tag: 'BTC', price: '18,546', inc: '5.76', dec: '', marketcap: '18.0T' },
		{ name: 'Apple Inc.', tag: 'AAPL', price: '223.17', inc: '', dec: '2.13', marketcap: '12.7T' },
		// { name: 'Bitcoin', tag: 'BTC', price: '18,546', inc: '5.76', dec: '', marketcap: '18.0T' },
		// { name: 'Apple Inc.', tag: 'AAPL', price: '223.17', inc: '', dec: '2.13', marketcap: '12.7T' },
		// { name: 'Bitcoin', tag: 'BTC', price: '18,546', inc: '5.76', dec: '', marketcap: '18.0T' },
		// { name: 'Apple Inc.', tag: 'AAPL', price: '223.17', inc: '', dec: '2.13', marketcap: '12.7T' },
		// { name: 'Bitcoin', tag: 'BTC', price: '18,546', inc: '5.76', dec: '', marketcap: '18.0T' },
		// { name: 'Apple Inc.', tag: 'AAPL', price: '223.17', inc: '', dec: '2.13', marketcap: '12.7T' },
		// { name: 'Bitcoin', tag: 'BTC', price: '18,546', inc: '5.76', dec: '', marketcap: '18.0T' },
		// { name: 'Apple Inc.', tag: 'AAPL', price: '223.17', inc: '', dec: '2.13', marketcap: '12.7T' },
		// { name: 'Bitcoin', tag: 'BTC', price: '18,546', inc: '5.76', dec: '', marketcap: '18.0T' },
		// { name: 'Apple Inc.', tag: 'AAPL', price: '223.17', inc: '', dec: '2.13', marketcap: '12.7T' },
		// { name: 'Bitcoin', tag: 'BTC', price: '18,546', inc: '5.76', dec: '', marketcap: '18.0T' },
		// { name: 'Apple Inc.', tag: 'AAPL', price: '223.17', inc: '', dec: '2.13', marketcap: '12.7T' },
	]
	return (
		<div className={styles['container']}>
			<Navbar>
				<div className={styles['balance-container']}>
					<div className={styles['balance-wrapper']}>
						Your balance
						<div className={styles['money-wrapper']}>
							$10,000
							<img src='/arrow-right.svg' />
						</div>
					</div>
				</div>
				<div className={styles['stock-container']}>
					{data.map((item) => (
						<div className={styles['stock-wrapper']} key={item.tag}>
							<div
								className={`${styles['stock-top-wrapper']}  ${
									openFaq == item.tag ? styles['show'] : ''
								}`}
								onClick={() => {
									if (openFaq == item.tag) setOpenFaq('')
									else setOpenFaq(item.tag)
								}}
							>
								<div className={styles['stock-name-wrapper']}>
									{item.name}
									<span>{item.tag}</span>
								</div>
								<div className={styles['stock-value']}>${item.price}</div>
								{item.inc && (
									<div className={styles['stock-percentage-wrapper']}>
										<img src='/green-arrow.svg' />
										<span className={styles['stock-percentage-inc']}>%{item.inc}</span>
									</div>
								)}
								{item.dec && (
									<div className={styles['stock-percentage-wrapper']}>
										<img src='/red-arrow.svg' />
										<span className={styles['stock-percentage-dec']}>%{item.dec}</span>
									</div>
								)}
								<div className={styles['stock-value']}>${item.marketcap}</div>
								<img src='/arrow-down.svg' />
							</div>
							<motion.div
								className={styles['stock-bottom-wrapper']}
								initial={{
									opacity: 0,
									height: 0,
								}}
								animate={{
									opacity: openFaq == item.tag ? 1 : 0,
									height: openFaq == item.tag ? 'auto' : 0,
								}}
							></motion.div>
						</div>
					))}
				</div>
			</Navbar>
		</div>
	)
}
