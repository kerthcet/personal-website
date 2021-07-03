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
        <a href="https://www.kerthcet.com">
          <img src="/techtrek-title.png" alt="TechTrek Logo"/>
        </a>

        <br></br>
        <br></br>

        <h1 className={styles.title}>
          Welcome to <a href="https://www.kerthcet.com">kerthcet.com!</a>
        </h1>

        <p className={styles.description}>
          How to reach me:{' '}
          <code className={styles.code}>kerthcet@gmail.com</code>
        </p>

        <div className={styles.grid}>
          <a href="https://www.kerthcet.com" className={styles.card}>
            <h3>Introduction &rarr;</h3>
          </a>

          <a
            href="https://mp.weixin.qq.com/mp/homepage?__biz=MzU3NDk5Nzc2OQ==&hid=2&sn=615b686877a034a9a6af601decc23da9&scene=18#wechat_redirect" className={styles.card}
          >
            <h3>WeChat Official Account &rarr;</h3>
          </a>

          <a href="https://github.com/kerthcet" className={styles.card}>
            <h3>Github &rarr;</h3>
          </a>

          <a href="https://leetcode-cn.com/u/kerthcet/" className={styles.card}>
            <h3>LeetCode &rarr;</h3>
          </a>

          <a href="https://wakatime.com/@kerthcet" className={styles.card}>
            <h3>WakaTime &rarr;</h3>
          </a>

          <a href="https://github.com/kerthcet/ide" className={styles.card}>
            <h3>VIM &rarr;</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Better late than never.
        </a>
      </footer>
    </div>
  )
}
