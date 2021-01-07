import React, { useState } from 'react'
import LogoButton from '../components/logo-button'
import Splash from '../components/splash'
import Info from '../components/info'
import useDelayedUnmounting from '../hooks/use-delayed-unmounting'

export default function ToggleableSplash(props) {
  const [state, show, hide] = useDelayedUnmounting(510)
  const [clickPosSplash, setClickPosSplash] = useState({ x: 0, y: 0 })
  const [clickPosInfo, setClickPosInfo] = useState({ x: 0, y: 0 })

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

  return (
    <div className="splash">
      <LogoButton
        onClick={toggleSplashVisible}
        splashVisible={props.splashVisible}
      />
      {state !== 'unmounted' && (
        <Info animationCenter={clickPosInfo} onTop={!props.splashVisible} />
      )}
      {state !== 'mounted' && (
        <Splash animationCenter={clickPosSplash} onTop={props.splashVisible} />
      )}
    </div>
  )
}
