import Head from 'next/head'
import Main from '@/components/layouts/main'

export default function Home() {
  return (
    <Main>
      <Head>
        <title>index page</title>
      </Head>
      <h1>Hello Index</h1>
    </Main>
  )
}
