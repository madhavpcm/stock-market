import Navbar from 'components/common/Navbar'
import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

import styles from '../components/buy.module.css'

export default function BuyPage() {
	const [openTab, setopenTab] = useState('')
	const quantity = useRef(null)
	const total = useRef(null)
	// const data = [
	// 	{ name: 'Bitcoin', tag: 'BTC', price: '18,546', inc: '5.76', dec: '', marketcap: '18.0T' },
	// 	{ name: 'Apple Inc.', tag: 'AAPL', price: '223.17', inc: '', dec: '2.13', marketcap: '12.7T' },
	// ]

	const [dataResponse, setdataResponse] = useState([])

	useEffect(() => {
		async function getPageData() {
			const apiUrlEndpoint = 'http://localhost:3000/api/stock'
			const response = await fetch(apiUrlEndpoint)
			const res = await response.json()
			console.log(res.products)
			setdataResponse(res.products)
		}
		getPageData()
	}, [])

	function calcInc(item) {
		if (item.yest_price > item.curr_price) return 0
		return 1
	}

	return (
		<div className={styles['container']}>
			<Navbar>
				<div className={styles['balance-container']}>
					<div className={styles['balance-wrapper']}>
						Your Balance
						<div className={styles['money-wrapper']}>
							$10,000
							<img src='/arrow-right.svg' />
						</div>
					</div>
				</div>
				<div className={styles['stock-container']}>
					{dataResponse.map((item) => (
						<div className={styles['stock-wrapper']} key={item.stock_tag}>
							<div
								className={`${styles['stock-top-wrapper']}  ${
									openTab == item.stock_tag ? styles['show'] : ''
								}`}
								onClick={() => {
									if (openTab == item.stock_tag) setopenTab('')
									else setopenTab(item.stock_tag)
								}}
							>
								<div className={styles['stock-name-wrapper']}>
									{item.stock_name}
									<span>{item.stock_tag}</span>
								</div>
								<div className={styles['stock-value']}>${item.curr_price}</div>
								{calcInc(item) == 0 && (
									<div className={styles['stock-percentage-wrapper']}>
										<img src='/red-arrow.svg' />
										<span className={styles['stock-percentage-dec']}>
											%{(item.yest_price - item.curr_price) / 100}
										</span>
									</div>
								)}
								{calcInc(item) == 1 && (
									<div className={styles['stock-percentage-wrapper']}>
										<img src='/green-arrow.svg' />
										<span className={styles['stock-percentage-inc']}>
											%{(item.curr_price - item.yest_price) / 100}
										</span>
									</div>
								)}
								{/* {item.inc && (
									<div className={styles['stock-percentage-wrapper']}>
										<img src='/green-arrow.svg' />
										<span className={styles['stock-percentage-inc']}>%{item.inc}</span>
									</div>
								)} */}
								{/* {item.dec && (
									<div className={styles['stock-percentage-wrapper']}>
										<img src='/red-arrow.svg' />
										<span className={styles['stock-percentage-dec']}>%{item.dec}</span>
									</div>
								)} */}
								<div className={styles['stock-value']}>${item.market_cap}</div>
								<img src='/arrow-down.svg' />
							</div>
							<motion.div
								className={styles['stock-bottom-wrapper']}
								initial={{
									opacity: 0,
									height: 0,
								}}
								animate={{
									opacity: openTab == item.stock_tag ? 1 : 0,
									height: openTab == item.stock_tag ? 'auto' : 0,
								}}
							>
								<div className={styles['stock-bottom-left']}>
									<div className={styles['input-container']}>
										<div className={styles['input-wrapper']}>
											<label>Quantity</label>
											<input
												id={item.stock_tag}
												ref={quantity}
												placeholder='Enter number of shares'
												type='number'
												min={0}
											/>
										</div>
										<img src='/refresh.svg' onClick={() => {}} />
									</div>
									<div className={styles['total-wrapper']}>
										Total
										<span ref={total}>$0</span>
									</div>
								</div>

								<div className={styles['buy-btn']} onClick={() => {}}>
									<span>Buy</span>
									<img src='/arrow-right.svg' />
								</div>
							</motion.div>
						</div>
					))}
				</div>
			</Navbar>
		</div>
	)
}
