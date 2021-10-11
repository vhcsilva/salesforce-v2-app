import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import '../fontawesome'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portal de Vendas</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/img/favicon/favicon-96x96.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Faça pedidos, consulte títulos e notas em aberto."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
