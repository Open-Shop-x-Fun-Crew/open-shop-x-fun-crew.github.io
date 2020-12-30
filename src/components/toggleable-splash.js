import React, { useState, useEffect } from 'react'
import LogoButton from '../components/logo-button'
import Splash from '../components/splash'
import Info from '../components/info'

export default function ToggleableSplash(props) {
  const [pos, setPos] = useState({ x: null, y: null })
  const [stickyPos, setStickyPos] = useState({ x: null, y: null })
  const [audioIconPos, setAudioIconPos] = useState({
    x: null,
    y: null,
    w: null,
    h: null,
  })
  const [overlapping, setOverlapping] = useState(false)

  function toggleSplashVisible() {
    setStickyPos({ x: pos.x, y: pos.y })
    props.toggleSplashVisible()
  }

  function updatePos(e) {
    setPos({ x: e.clientX, y: e.clientY })
    if (audioIconPos) {
      if (
        e.clientX > audioIconPos.x &&
        e.clientX < audioIconPos.x + audioIconPos.w &&
        e.clientY > audioIconPos.y &&
        e.clientY < audioIconPos.y + audioIconPos.h
      ) {
        setOverlapping(true)
      } else setOverlapping(false)
    }
  }

  function getIconPos(e, icon) {
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

  useEffect(() => {
    window.addEventListener('mousemove', updatePos)
    return () => window.removeEventListener('mousemove', updatePos)
  }, [])

  return (
    <div className="splash">
      <LogoButton
        onClick={toggleSplashVisible}
        pos={pos}
        splashVisible={props.splashVisible}
        stickyPos={stickyPos}
        overlapping={overlapping}
      />
      <Splash isVisible={props.splashVisible} getIconPos={getIconPos} />
      <Info isVisible={!props.splashVisible} />
    </div>
  )
}
