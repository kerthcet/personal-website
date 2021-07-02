import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>kerthcet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a href="https://github.com/kerthcet" className={styles.card}>
          <img src="/techtrek-title.png" alt="TechTrek Logo"/>
        </a>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.kerthcet.com">kerthcet.com!</a>
        </h1>

        <p className={styles.description}>
          How to reach me:{' '}
          <code className={styles.code}>kerthcet@gmail.com</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/kerthcet" className={styles.card}>
            <h3>Github &rarr;</h3>
          </a>

          <a href="https://leetcode-cn.com/u/kerthcet/" className={styles.card}>
            <h3>Leetcode &rarr;</h3>
          </a>

          <a
            href="https://mp.weixin.qq.com/mp/homepage?__biz=MzU3NDk5Nzc2OQ==&hid=2&sn=615b686877a034a9a6af601decc23da9&scene=18#wechat_redirect"
            className={styles.card}
          >
            <h3>微信公众号：TechTrek &rarr;</h3>
            <p></p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Better late than never.{' '} 
k         <img src="/techtrek.png" alt="TechTrek Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
