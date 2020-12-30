import React, { useState } from 'react'
import FilmList from './film-list'
import martin from '../../static/images/martin.png'
import viktor from '../../static/images/viktor.png'
import styles from './footer.module.scss'
import buttonStyles from './logo-button.module.scss'

export default function Footer(props) {
  if (props.isVisible) {
    return (
      <footer>
        <p>open shop Nytorgsgatan 20 117 54 Stockholm info@openshop.se</p>
        <a
          className={`${buttonStyles.button} ${styles.logo} ${styles.links}`}
          href="#top"
        >
          open
          <br />
          shop.
        </a>
      </footer>
    )
  } else {
    return null
  }
}
