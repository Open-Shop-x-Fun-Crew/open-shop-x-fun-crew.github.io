import React, { useState, useEffect } from 'react'
import LogoButton from '../components/logo-button'
import Splash from '../components/splash'
import Info from '../components/info'
import useDelayedUnmounting from '../hooks/use-delayed-unmounting'

export default function ToggleableSplash(props) {
  const [state, show, hide] = useDelayedUnmounting(510)
  const [clickPosSplash, setClickPosSplash] = useState({ x: 0, y: 0 })
  const [clickPosInfo, setClickPosInfo] = useState({ x: 0, y: 0 })
  const [audioIconPos, setAudioIconPos] = useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  })

  function toggleState() {
    state === 'mounted' ? hide() : show()
  }

  function toggleSplashVisible(coordinates) {
    if (state === 'mounted' || state === 'unmounted') {
      props.toggleSplashVisible()
      props.splashVisible
        ? setClickPosInfo(coordinates)
        : setClickPosSplash(coordinates)
    }
    toggleState()
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
      {state !== 'unmounted' && (
        <Info animationCenter={clickPosInfo} onTop={!props.splashVisible} />
      )}
      {state !== 'mounted' && (
        <Splash
          getIconPos={getIconPos}
          animationCenter={clickPosSplash}
          onTop={props.splashVisible}
        />
      )}
    </div>
  )
}
