import React, { useState } from 'react'
import FilmList from './film-list'
import martin from '../../static/images/martin.png'
import viktor from '../../static/images/viktor.png'
import styles from './info.module.scss'
import buttonStyles from './logo-button.module.scss'

import styled, { keyframes } from 'styled-components'

let expandInfo = pos => keyframes`
  from { clip-path: circle(0px at center) }
  to { clip-path: circle(800px at center) }
  `

let ExpandingWrapper = styled.div`
  position: absolute;
  z-index: ${props => (props.onTop ? 110 : 0)};
  animation: ${expandInfo} 500ms linear;
  animation-fill-mode: forwards;
`

export default function Info(props) {
  /* this is the old way of doing it, helps me understand better, leave for now */
  // const useStateReturn = useState()
  // const hiddenEmail = useStateReturn[0]
  // const sethiddenEmail = useStateReturn[1]

  const [hiddenEmail, sethiddenEmail] = useState(true)

  function togglehiddenEmail() {
    sethiddenEmail(!hiddenEmail)
  }

  return (
    <ExpandingWrapper onTop={props.onTop}>
      <div className={styles.info}>
        <figure>
          <img
            className={styles.portrait}
            src={martin}
            alt="Picture of Martin as a child with his father, on the beach."
          />
          <figcaption>Martin 1985.</figcaption>
        </figure>
        <section>
          <button onClick={togglehiddenEmail}> kick up some dust</button>
          <p className={hiddenEmail? styles.hidden : ""}>info@openshop.se</p>
        </section>
        <div>
          <p>
            Open Shop is filmmaking duo Martin Sandin &amp; Viktor Annerstål.
            Martin writes and directs. Viktor edits and shoots.
          </p>
        </div>
        <figure>
          <img
            className={styles.portrait}
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
      </div>
    </ExpandingWrapper>
  )
}
