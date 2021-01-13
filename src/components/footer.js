import React from 'react'
import styles from './footer.module.scss'
import { Link } from 'react-scroll'

export default function Footer(props) {
  return (
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
}
