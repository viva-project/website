import Head from 'next/head'

export default function Home() {
  return (
    <div id="Home_page">
      <Head>
        <title>Home</title>
      </Head>
      <h2>Home...</h2>
    </div>
  )
}

/*

Example API call:

export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}*/
