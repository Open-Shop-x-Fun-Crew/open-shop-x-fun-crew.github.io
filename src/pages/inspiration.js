import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import ReactMarkdown from 'react-markdown'
import styles from '../components/blog.module.scss'
import { useCookies } from 'react-cookie'
import { Link as ScrollLink } from 'react-scroll'

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
      <Helmet>
        <title>Open Shop / Inspiration</title>
        <meta name="title" content="Open Shop filmmaking blog" />
        <meta
          name="description"
          content="Open Shop is filmmaking duo Martin Sandin & Viktor Annerstål. Martin writes and directs. Viktor edits and shoots. This is their blog where they discuss their upcoming projects, their inpsiration, and other topics pertaining to the film industry in general"
        />
        <meta
          name="keywords"
          content="filmmaking, stockholm, sweden, documentaries, documentary, street, mad dog from chaos to comeback, distressed, dimmiga dar, short film, photography, video, trailer, films, movies, openshop, open shop, art, artistic, filmskapande, dokumentärer, dokumentär, gata, kort film, fotografi, filmer, Martin sandin, viktor Annerstål, konst, konstnärlig"
        />
        <meta name="robots" content="index, follow"></meta>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="OpenShop" />
        <meta name="viewport" content-width="device-width" initial-scale={1} />
      </Helmet>
      <main id="topBlog" className={styles.box} style={{ width: '100vw' }}>
        <div className={styles.blogBody}>
          <div className={styles.top_container}>
            <div className={styles.header}>Open Shop | Inspiration</div>
            <Link to={'/'} className={styles.homeBtn}>
              {' '}
              going home
            </Link>
          </div>
          {posts}
          <footer>
            <address>
              open shop
              <br />
              Skånegatan 70
              <br />
              116 37 Stockholm
              <br />
              hello@openshopfilm.com
            </address>
            <ScrollLink
              activeClass="active"
              to="topBlog"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div className={styles.logo}>
                open
                <br />
                shop.
              </div>
            </ScrollLink>
          </footer>
        </div>
      </main>
    </>
  )
}
