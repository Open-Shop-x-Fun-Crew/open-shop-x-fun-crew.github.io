import React, { useState, useEffect } from 'react'
import FilmList from './film-list'
import styled, { css, keyframes } from 'styled-components'

import styles from './site.module.scss'

// const expand = props => keyframes`
//   from { clip-path: circle(0px at ${props.stickyPos.x}px ${props.stickyPos.y}px); }
//   to { clip-path: circle(600px at ${props.stickyPos.x}px ${props.stickyPos.y}px); }
//   `

let expand = pos => {
  console.log(pos)
  return keyframes`
  from { clip-path: circle(0px at ${pos.x}px ${pos.y}px); }
  to { clip-path: circle(600px at ${pos.x}px ${pos.y}px); }
  `
}

let ExpandingWrapper = styled.div`
  animation: ${props => expand(props.stickyPos)} 3s linear;
  animation-fill-mode: forwards;
  background: red;
`

export default function Site(props) {
  return (
    <ExpandingWrapper stickyPos={props.stickyPos}>
      <main>
        <figure>
          <img></img>
          <figcaption>Martin 1985.</figcaption>
        </figure>
        <section>
          <button>kick up some dust</button>
          <p className={styles.hidden}>info@openshop.se</p>
        </section>
        <div>
          <p>Open Shop is film-making duo</p>
        </div>
        <figure>
          <img></img>
          <figcaption>Viktor 1993.</figcaption>
        </figure>
        <a
          href="https://www.instagram.com/artandpoeticjustice/?hl=en"
          className={styles.links}
        >
          slow-skate with us
        </a>
        <button>look here</button>
        <FilmList />
      </main>
      <footer>
        <p>footer text</p>
      </footer>
    </ExpandingWrapper>
  )
}
