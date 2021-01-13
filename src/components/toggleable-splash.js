import React, { useState, useEffect } from 'react'
import LogoButton from '../components/logo-button'
import Splash from '../components/splash'
import Info from '../components/info'
import useDelayedUnmounting from '../hooks/use-delayed-unmounting'
import { isMobile } from 'react-device-detect'
import { useCookies } from 'react-cookie'

export default function ToggleableSplash(props) {
  const [state, show, hide] = useDelayedUnmounting(510)
  const [clickPosSplash, setClickPosSplash] = useState({ x: 0, y: 0 })
  const [clickPosInfo, setClickPosInfo] = useState({ x: 0, y: 0 })
  const [height, setHeight] = useState(null)
  const [width, setWidth] = useState(null)
  const [cookies] = useCookies(['visited'])

  useEffect(() => {
    if (cookies['visited']) {
      toggleSplashVisible({ x: 0, y: 0 })
    }
    if (isMobile) {
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
    }
  }, [])

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
        mobileWidth={width}
      />
      {state !== 'unmounted' && (
        <Info
          visited={cookies['visited']}
          animationCenter={clickPosInfo}
          onTop={!props.splashVisible}
          mobileHeight={height}
        />
      )}
      {state !== 'mounted' && (
        <Splash
          animationCenter={clickPosSplash}
          onTop={props.splashVisible}
          isMobile={isMobile}
        />
      )}
    </div>
  )
}
