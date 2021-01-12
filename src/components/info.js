import React, { useState } from 'react'
import martin from '../../static/images/martin.jpg'
import viktor from '../../static/images/viktor.jpg'
import styles from './info.module.scss'
import { Link } from 'react-scroll'
import { Link as GatsbyLink } from 'gatsby'
import styled, { keyframes } from 'styled-components'

const expand = pos => keyframes`
from {
  clip-path: circle(0% at ${pos.x}px ${pos.y}px)
} to {
  clip-path: circle(200% at ${pos.x}px ${pos.y}px)
}
`

const ExpandingDiv = styled.div`
  height: ${props => (props.height ? props.height + 'px' : '100vh')};
  position: absolute;
  top: 0;
  animation: ${props => (!props.visited ? expand(props.animationCenter) : null)}
    500ms linear;
  animation-fill-mode: forwards;
`

export default function Info(props) {
  const [hiddenEmail, sethiddenEmail] = useState(true)

  function togglehiddenEmail() {
    sethiddenEmail(!hiddenEmail)
  }

  return (
    <ExpandingDiv
      visited={props.visited}
      height={props.mobileHeight}
      animationCenter={props.animationCenter}
      style={{ zIndex: props.onTop ? 90 : 0 }}
    >

      <div className={styles.background}>
        <div className={styles.bottomBar}></div>
        <div id="info" className={styles.info}>
          <figure className={styles.martin}>
            <img
              className={styles.portrait}
              src={martin}
              alt="Martin wearing a black beanie and a mustard yellow shirt. He is crouched next to his daughter, who has long brown hair and a jumper of matching colour to Martins. Martin is looking at what his daughter is doing(which is out of shot)."

            />
            <figcaption>Martin Sandin</figcaption>
          </figure>
          <section className={styles.kick}>
            <button onClick={togglehiddenEmail}>We’re open</button>
            <p className={hiddenEmail ? styles.hidden : ''}>info@openshop.se</p>
          </section>
          <div className={styles.infotext}>
            <h1>
              Open Shop is filmmaking duo Martin Sandin & Viktor Annerstål.
              <br />
              Martin is the director and screenwriter. Viktor the DoP and
              editor. We believe in making a difference through stories. Let’s
              do it together.
            </h1>
          </div>
          <figure className={styles.viktor}>
            <img
              className={styles.portrait}
              src={viktor}
              alt="Low angle shot of Viktor wearing blue dungarees, purple shirt and a baseball cap, and looking into the distance. A blurred out lamp post can be seen in the background."

            />
            <figcaption>Viktor Annerstål</figcaption>
          </figure>
          <a
            href="https://www.instagram.com/artandpoeticjustice/?hl=en"
            className={`${styles.links} ${styles.skate}`}
          >
            Follow Open Shop
          </a>
          <GatsbyLink
            to="/inspiration"
            className={`${styles.links} ${styles.blog}`}
          >
            On the road
          </GatsbyLink>


          <Link
            className={styles.lookhere}
            activeClass="active"
            to="film-list"
            spy={true}
            smooth={true}
            duration={500}
          >
            look here
          </Link>
        </div>
      </div>
    </ExpandingDiv>
  )
}
