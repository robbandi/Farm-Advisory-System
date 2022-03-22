import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
// import React from 'react'
// import Link from 'next/dist/client/link';


// class App extends React.Component {

// constructor(props) {
//   super(props);
//   this.myRef = React.createRef();
// }

// changeTemp = (name) => {
//   this.myRef.current.value = "Welcome " + name
// }

export default function Tubers() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
{/* 
{this.myRef}

<button onclick={changeTemp('Hello')}>Click for Hello</button>
<button onclick={changeTemp('Bye')}>Click for Bye</button> */}

        <h1 className={styles.title}>
        Melon (Egusi)
        </h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>

        <div
            className={styles.card}
          >
            <h2>Land preparation </h2>
            {/* <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p> */}
          </div>


        <div
            className={styles.card}
          >
            <h2>Varieties </h2>
            {/* <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p> */}
          </div>

          <div
            className={styles.card}
          >
            <h2>Sowing / planting </h2>
            {/* <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p> */}
          </div>

        <div
            className={styles.card}
          >
            <h2>Fertilizer application </h2>
            {/* <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p> */}
          </div>

          <div
            className={styles.card}
          >
            <h2>Weeding </h2>
            {/* <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p> */}
          </div>

          <div
            className={styles.card}
          >
            <h2>Field pests and diseases </h2>
            {/* <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p> */}
          </div>

          <Link href="/question">
          <div
            className={styles.card}
          >
            <h2>Harvesting </h2>
            {/* <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p> */}
          </div>
          </Link>
          <div
            className={styles.card}
          >
            <h2>After-harvest management</h2>
            {/* <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p> */}
          </div>
          <div
            className={styles.card}
          >
            <h2>Processing / storage</h2>
            {/* <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p> */}
          </div>
          <div
            className={styles.card}
          >
            <h2>
Marketing
</h2>
            {/* <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p> */}
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
    }
  