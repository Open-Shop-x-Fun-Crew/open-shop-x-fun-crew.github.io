import React, { useState } from 'react'
import FilmList from './film-list'
import martin from '../../static/images/martin.png'
import viktor from '../../static/images/viktor.png'
import styles from './footer.module.scss'

export default function Footer(props) {
  if (props.isVisible) {
    return (
      <footer>
        <address>
          open shop
          <br />
          Nytorgsgatan 20
          <br />
          117 54 Stockholm
          <br />
          info@openshop.se
        </address>
        <button className={styles.logo}>
          open
          <br />
          shop.
        </button>
      </footer>
    )
  } else {
    return null
  }
}
