import mysql from 'mysql2/promise'

export default async function handler(req, res) {
	const dbconnection = await mysql.createConnection({
		host: 'localhost',
		database: 'mock_stock',
		user: 'root',
		password: '',
	})

	try {
		const query = 'SELECT * from stocks'
		const values = []
		const [data] = await dbconnection.execute(query, values)
		dbconnection.end()
		res.status(200).json({ products: data })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
