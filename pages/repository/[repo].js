import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import fetch from "node-fetch"

import Main from "@/components/layouts/main"

export default function RepoPage({ title, results }) {
  console.log(results);

  return (
    <Main>
      <Head>
        <title>Repo {title}</title>
      </Head>
      <div className="w-2/3 mx-auto">

      </div>
    </Main>
  )
}

export async function getServerSideProps(context) {
  // Tutaj jest miejsce na zapytania asynchroniczne

  const [owner, repo] = context.params.query.split("-");

  return fetch(`https://api.github.com/repos/${owner}/${repo}`)
    .then((res) => res.json())
    .then((results => {
      return {
        props: {
          owner: context.params.query,
          repo: results.items
        },
      }
    }))
    .catch(error => {
      return {
        props: {
          error: `Cannot find Elements with this query ${error}`
        },
      }
    })
}