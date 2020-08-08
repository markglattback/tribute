import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/tributes", fetcher);
  
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  
  const tributes = data.tributes;
  const length = tributes.length;



  return (
    <div className={styles.container}>
      <Head>
        <title>Tributes | Peter Glattback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Peter Glattback
        </h1>

        <p className={styles.description}>
          Tributes received from colleagues and friends
        </p>

        <div className={styles.grid}>
          {tributes.map((tribute, index) => {
            return (
              <div className={styles.tribute} key={`tribute=${index}`}>
                <p className={styles.tributeNames}>{`${tribute.firstname || ''} ${tribute.surname || ''}`}</p>
                <p>{tribute.message}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  )
}
