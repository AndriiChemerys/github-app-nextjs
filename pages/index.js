import Head from 'next/head'
import Main from '@/components/layouts/main'
import Link from "next/link"
import {useState} from 'react'
import {useRouter} from "next/router"


export default function Home() {
const router = useRouter();
const [inputValue, setInputValue] = useState('')

const handleInputChange = (e) => {
  setInputValue(e.target.value)
}

const handleButtonClick = (e) => {
  e.preventDefault();
  router.push('/results')
}

console.log(inputValue)

  return (
    <Main>
      <Head>
        <title>index page</title>
      </Head>
      <div className='m-4'>
        <form>
          <input type="text" placeholder='Search' value={inputValue} onChange={handleInputChange}/>
          <button type="button" onClick={handleButtonClick}>Send</button>
        </form>
      </div>
    </Main>
  )
}
