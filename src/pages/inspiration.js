import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import ReactMarkdown from 'react-markdown'

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
  const posts = data.allMdx.nodes.map(papaya => {
    return (
      <article key={data.allMdx.nodes.indexOf(papaya)}>
        <h1>{papaya.frontmatter.title}</h1>
        <h2>{papaya.frontmatter.date.slice(0, 10)}</h2>
        <ReactMarkdown allowDangerousHtml={true} className="post">
          {papaya.rawBody}
        </ReactMarkdown>
      </article>
    )
  })

  return (
    <>
      <Helmet></Helmet>
      <main
        className="box"
        style={{ width: '100vw', height: '100vh', border: '2px solid red' }}
      >
        {posts}
      </main>
    </>
  )
}
