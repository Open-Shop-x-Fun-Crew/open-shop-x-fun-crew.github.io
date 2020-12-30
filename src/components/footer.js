import React, { useState } from 'react'
import styles from './footer.module.scss'
import { Link } from 'react-scroll'

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
        <Link
          activeClass="active"
          to="info"
          spy={true}
          smooth={true}
          duration={500}
        >
          <div className={styles.logo}>
            open
            <br />
            shop.
          </div>
        </Link>
      </footer>
    )
  } else {
    return null
  }
}
