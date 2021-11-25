import Head from 'next/head'
import Image from 'next/image'
import {Timeline} from '../cmp/Timeline/Timeline'

export default function Home({articles}) {
  return (
    <div id="Home_page">
      <Head>
        <title>Index</title>
      </Head>
      <Timeline />
    </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}