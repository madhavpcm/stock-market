import { SessionProvider } from 'next-auth/react'

import 'styles/variables.css'
import 'styles/globals.css'
import 'styles/text-styles.css'
import 'styles/layout.css'
import 'styles/form.css'

function MyApp({ Component, pageProps }) {
	return (
		<SessionProvider session={pageProps.session}>
			<Component {...pageProps} />
		</SessionProvider>
	)
}

export default MyApp
