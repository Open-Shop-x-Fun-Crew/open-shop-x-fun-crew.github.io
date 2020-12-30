import React, { useState } from 'react'
import LogoButton from '../components/logo-button'
import Splash from '../components/splash'
import Info from '../components/info'
import useDelayedUnmounting from '../hooks/use-delayed-unmounting-splash.js'

export default function ToggleableSplash(props) {

  const [state, show, hide] = useDelayedUnmounting()
  const [onTop, setOnTop] = useState(false)

  function toggleState() {
    state === 'mounted' ? hide() : show()
    state === 'mounted' || state === 'unmounted'
      ? setOnTop(!onTop)
      : console.log()
  }

  function toggleSplashVisible() {
    if(state === 'mounted' || state === 'unmounted')props.toggleSplashVisible()
    toggleState()
  }

  return (
    <div className="splash">
      <LogoButton
        onClick={toggleSplashVisible}
        splashVisible={props.splashVisible}
      />
      {state !== 'unmounted' && <Info onTop={onTop} />}
      {state !== 'mounted' && <Splash/>}
    </div>
  )
}
