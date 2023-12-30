import NavBar from './Navbar'
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className='header-container'>
      <a className={[styles['a11y-skip-link'], styles['u-visually-hidden']].join(' ')} href='#main-content'>
        Skip to main content
      </a>
      <NavBar />
    </div>
  )
}
