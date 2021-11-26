import Link from 'next/Link'
import navStyles from '../styles/Nav.module.css'

export const Nav = () => (
  <nav className={navStyles.nav}>
    <ul>

      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/gallery">Gallery</Link>
      </li>

      <li>
        <Link href="/about">About</Link>
      </li>

    </ul>
  </nav>
)
