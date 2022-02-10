import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Porfolio</title>
        <meta name="description" content="Portfolio utilizando next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Rafael Silva F.
        </h1>

        <p className={styles.welcomemessage}>
          <img className={styles.imagetest} src='https://c.tenor.com/5LT51B0DSIoAAAAM/funny-animals-dog.gif'></img>
          <p>Olá sou um desenvolvedor front-end!</p>
        </p>

      </main>
        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Work</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, temporibus ducimus aliquid necessitatibus beatae vel libero.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>About me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, temporibus ducimus aliquid necessitatibus beatae vel libero.</p>
          </a>
        </div>
    </div>
  )
}
