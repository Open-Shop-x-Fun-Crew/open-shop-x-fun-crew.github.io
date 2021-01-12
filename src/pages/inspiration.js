import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import ReactMarkdown from 'react-markdown'
import styles from '../components/blog.module.scss'
import { useCookies } from 'react-cookie'

export const query = graphql`
  query blogQuery {
    allMdx(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          date
          title
        }
        rawBody
      }
    }
  }
`

export default function Inspiration({ data }) {
  const [cookies, setCookie] = useCookies(['visited'])

  useEffect(() => {
    console.log(cookies)
    setCookie('visited', true)
  })

  const posts = data.allMdx.nodes.map(papaya => {
    return (
      <article
        className={styles.article}
        key={data.allMdx.nodes.indexOf(papaya)}
      >
        <h1 className={styles.title}>{papaya.frontmatter.title}</h1>
        <h2 className={styles.date}>{papaya.frontmatter.date.slice(0, 10)}</h2>
        <ReactMarkdown allowDangerousHtml={true} className="post">
          {papaya.rawBody}
        </ReactMarkdown>
      </article>
    )
  })

  return (
    <>
      <Helmet></Helmet>
      <main className={styles.box} style={{ width: '100vw' }}>
        <div className={styles.blogBody}>
          <div className={styles.top_container}>
            <div className={styles.header}>Open Shop Blog</div>
            <Link to={'/'} className={styles.homeBtn}>
              {' '}
              going <br></br> home
            </Link>
          </div>
          {posts}
        </div>
      </main>
    </>
  )
}
