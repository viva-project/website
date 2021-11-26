import styles from '../styles/Layout.module.css'
import {Nav} from './Nav'
import {Header} from './Header'
import { useRouter } from 'next/router'

export const Layout = ({children}) => {
  const router = useRouter()
  console.log(router)

  return (
    <>
    <Nav />
    <div className={styles.container}>
      <main className={styles.main}>
        {/*<Header
          text={router.pathName}
        />*/}
        {children}
      </main>
    </div>
    </>
  )
}