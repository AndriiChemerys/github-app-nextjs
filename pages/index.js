import Head from 'next/head'
import Main from '@/components/layouts/main'
import Link from "next/link"

export default function Home() {
  return (
    <Main>
      <Head>
        <title>index page</title>
      </Head>
      <h1>Hello Index</h1>
        <form>
          <input type="text" />
            <Link href="/results">
              <button>Results</button>
            </Link>
        </form>
    </Main>
  )
}
