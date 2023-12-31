import styles from './page.module.css'

export default function Layout({ children }) {
  return (
    <div >
      <div className={styles['main-container']}>{children}</div>
    </div>
  );
}