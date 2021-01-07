import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

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
  const posts = data.allMdx.nodes.map(node => {
    return (
      <div className="post">
        <h1>{node.frontmatter.title}</h1>
        <h2>{node.frontmatter.date}</h2>
        <p>{node.rawBody}</p>
      </div>
    )
  })

  return (
    <>
      <Helmet></Helmet>
      <div
        className="box"
        style={{ width: '100vw', height: '100vh', border: '2px solid red' }}
      >
        {posts}
      </div>
    </>
  )
}
