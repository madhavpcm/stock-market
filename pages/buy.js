import React from 'react'

import styles from '../components/buy.module.css'

export default function buy() {
	return (
		<div className={styles['container']}>
			{/* <h1>BUY TAB</h1> */}
			<table className={styles['table']}>
				<thead className={styles['table-heading']}>
					<tr className={styles['table-row']}>
						<th> Chair </th>
						<th> The Laid Back</th>
						<th> The Worker Bee</th>
						<th> The Chair 4/2</th>
						<th> number</th>
						<th> buy</th>
					</tr>
				</thead>
				<tbody className={styles['table-body']}>
					<tr className={styles['table-row']}>
						<th> Width </th>
						<td> 80 cm </td>
						<td> 60 cm </td>
						<td> 220 cm </td>
						<td>
							<input type='number' name='temp' />
						</td>
						<td>BUY</td>
					</tr>
					<tr className={styles['table-row']}>
						<th> Depth </th>
						<td> 70 cm </td>
						<td> 65 cm </td>
						<td> 80 cm </td>
						<td>
							<input type='number' name='temp' />
						</td>
						<td>BUY</td>
					</tr>
					<tr className={styles['table-row']}>
						<th> Weight </th>
						<td> 16 kg </td>
						<td> 22 kg </td>
						<td> 31 kg </td>
						<td>
							<input type='number' name='temp' />
						</td>
						<td>BUY</td>
					</tr>
					<tr className={styles['table-row']}>
						<th> Height </th>
						<td> 120 cm </td>
						<td> 92 cm </td>
						<td> 80 cm </td>
						<td>
							<input type='number' name='temp' />
						</td>
						<td>BUY</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
