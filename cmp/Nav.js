import NextLink from 'next/Link'
import navStyles from '../styles/Nav.module.css'

export const Nav = () => (
  <nav className={navStyles.nav}>
    <ul>

      <li>
        <NextLink href="/">Home</NextLink>
      </li>

      <li>
        <NextLink href="/gallery">Gallery</NextLink>
      </li>

      <li>
        <NextLink href="/about">About</NextLink>
      </li>

    </ul>
  </nav>
)
