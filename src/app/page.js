import styles from './page.module.css'
import TopNavBar from './ui/TopNavbar'

const pages = ['Products', 'Pricing', 'Blog'];

export default function Home() {

  return (
    <main className={styles.main}>
      <div >
        <TopNavBar />
      </div>
    </main>
  )
}
