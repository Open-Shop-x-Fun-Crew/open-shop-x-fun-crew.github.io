import React, { useState } from 'react'
import FilmList from './film-list'
import martin from '../../static/images/martin.png'
import viktor from '../../static/images/viktor.png'
import styles from './info.module.scss'
import buttonStyles from './logo-button.module.scss'

export default function Info(props) {
  if (props.isVisible) {
    return (
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
          <button>kick up some dust</button>
          <p className={styles.hidden}>info@openshop.se</p>
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
    )
  } else {
    return null
  }
}
