import React, { useState } from 'react'
import LogoButton from '../components/logo-button'
import Splash from '../components/splash'
import Site from '../components/site'

export default function ToggleableSplash(props) {
  return (
    <div className="splash">
      <LogoButton
        onClick={props.toggleSplashVisible}
        pos={props.pos}
        splashVisible={props.splashVisible}
        stickyPos={props.stickyPos}
        overlapping={props.overlapping}
      />
      <Splash isVisible={props.splashVisible} getIconPos={props.getIconPos} />
      <Site isVisible={!props.splashVisible} />
    </div>
  )
}
