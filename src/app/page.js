import styles from './page.module.css'
import Header from './ui/Header'

export default function Home() {

  return (
    <main className={styles.main}>
      <div >
        <Header />
        This is the main page
      </div>
    </main>
  )
}
