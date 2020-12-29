import React, { useState, useEffect } from 'react'
import FilmList from './film-list'
import martin from '../../static/images/martin.png'
import viktor from '../../static/images/viktor.png'

import styled, { keyframes } from 'styled-components'

import styles from './site.module.scss'

let expandInfo = pos => keyframes`
  from { clip-path: circle(0px at ${pos.x}px ${pos.y}px); }
  to { clip-path: circle(600px at ${pos.x}px ${pos.y}px); }
  `

let ExpandingWrapper = styled.div`
  animation: ${props => expandInfo(props.stickyPos)} 3s linear;
  animation-fill-mode: forwards;
`

export default function Site(props) {
  if (props.isVisible) {
    return (
      <div>
        <main>
          <figure>
            <img
              src={martin}
              alt="Picture of Martin as a child with his father, on the beach."
            />
            <figcaption>Martin 1985.</figcaption>
          </figure>
          <section>
            <button>kick up some dust</button>
            <p className={styles.hidden}>info@openshop.se</p>
          </section>
          <div>
            <p>
              Open Shop is film-making duo Martin Sandin &amp; Viktor Annerstål.
              Martin writes and directs, Viktor edits and shoots
            </p>
          </div>
          <figure>
            <img
              src={viktor}
              alt="Picture of Viktor as a baby, with his father in their living room. Dad is taking a photo of Martin with an old style camera."
            />
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
          <p>open shop Nytorgsgatan 20 117 54 Stockholm info@openshop.se</p>
          <img src="favicon.ico" alt="Open Shop company logo." />
        </footer>
      </div>
    )
  } else {
    return null
  }
}
