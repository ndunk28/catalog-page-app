import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children, title = 'E-commerce' }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="E-commerce platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav>
          <Link href="/" className={styles.logo}>
            E-commerce
          </Link>
          <ul className={styles.navItems}>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>&copy; 2024 E-commerce. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout