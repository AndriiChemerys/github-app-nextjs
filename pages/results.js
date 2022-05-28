import Head from "next/head"
import {useState} from 'next/head'

import Main from "@/components/layouts/main"

export default function ResultsPage({title}) {
  return (
    <Main> 
      <Head>
      <title>Results page for {title}</title>
      </Head>
      <h1> Hello Results </h1>
    </Main>
  )
}

export async function getServerSideProps(context) {

  // tutaj jest miejsce na zapytanie asynchroniczne

  return {
    props: {
      title: 'Bicycle'
    },
  }
}