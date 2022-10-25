import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_APP_CLIENT_ID,
			clientSecret: process.env.NEXT_APP_CLIENT_SECRET,
		}),
	],
	jwt: {
		encryption: true,
	},
	secret: process.env.secret,
	callbacks: {
		async jwt(token, account) {
			if (account?.accountToken) {
				token.accountToken = account.accountToken
			}
			return token
		},
		redirect: async (url, _baseUrl) => {
			if (url === '/profile') {
				return Promise.resolve('/')
			}
			return Promise.resolve('/')
		},
	},
})
