import { useApollo } from '@/utils/apollo'
import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../utils/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState)

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Won Games</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="The best Game Stores in the world!" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
