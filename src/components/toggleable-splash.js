import React, { useState } from 'react'
import LogoButton from '../components/logo-button'
import Splash from '../components/splash'
import Info from '../components/info'

export default function ToggleableSplash(props) {
  const [clickPos, setClickPos] = useState({ x: null, y: null })
  const [audioIconPos, setAudioIconPos] = useState({
    x: null,
    y: null,
    w: null,
    h: null,
  })

  function toggleSplashVisible(coordinates) {
    props.toggleSplashVisible()
    setClickPos(coordinates)
  }

  function getIconPos(e, icon) {
    if (icon) {
      let iconPos = icon.getBoundingClientRect()
      setAudioIconPos(
        Object.assign(
          audioIconPos,
          {
            x: iconPos.x,
            y: iconPos.y,
            w: iconPos.width,
            h: iconPos.height,
          },
          {}
        )
      )
    }
  }

  return (
    <div className="splash">
      <LogoButton
        onClick={toggleSplashVisible}
        splashVisible={props.splashVisible}
        audioIconPos={audioIconPos}
      />
      <Splash isVisible={props.splashVisible} getIconPos={getIconPos} />
      <Info isVisible={!props.splashVisible} animationCenter={clickPos} />
    </div>
  )
}
