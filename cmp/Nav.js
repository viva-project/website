import navStyles from '../styles/Nav.module.css'

export const Nav = () => (
  <nav className={navStyles.nav}>
    <ul>

      <li>
        <a href="/">Home</a>
      </li>

      <li>
        <a href="/gallery">Gallery</a>
      </li>

      <li>
        <a href="/about">About</a>
      </li>

    </ul>
  </nav>
)
