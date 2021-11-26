import Head from 'next/head'
import {Timeline} from '../cmp/Timeline/Timeline'

export default function Gallery() {
  return (
    <div id="Home_page">
      <Head>
        <title>Gallery</title>
      </Head>
      <Timeline />
    </div>
  )
}
