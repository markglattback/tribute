import Head from 'next/head'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/Eulogy.module.css';

export default function Eulogy({ title, frontmatter, body }) {
  return (
    <div>
      <Head>
        <title>Eulogy | Peter Glattback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <article className={styles.article}>
          <h1>{frontmatter.title}</h1>
          <div>
            <ReactMarkdown source={body} />
          </div>
        </article>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const content = await import ('../content/eulogy.md');
  const data = matter(content.default);

  return {
    props: {
      title: 'Peter Glattback Eulogy',
      frontmatter: data.data,
      body: data.content
    }
  }
}