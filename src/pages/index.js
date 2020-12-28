import React, { useState } from 'react'

import LogoButton from '../components/logo-button'
import Splash from '../components/splash'
import Site from '../components/site'
import { useEffect } from 'react'

export default function Home() {
  const [splashVisible, setSplashVisible] = useState(true)
  const [pos, setPos] = useState({ x: null, y: null })
  const [stickyPos, setStickyPos] = useState({ x: null, y: null })
  const [audioIconPos, setAudioIconPos] = useState({
    x: null,
    y: null,
    w: null,
    h: null,
  })
  const [overlapping, setOverlapping] = useState(false)

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

  function toggleSplashVisible() {
    setSplashVisible(!splashVisible)
    setStickyPos({ x: pos.x, y: pos.y })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updatePos)
    return () => window.removeEventListener('mousemove', updatePos)
  }, [])

  return (
    <div>
      <LogoButton
        onClick={toggleSplashVisible}
        pos={pos}
        splashVisible={splashVisible}
        stickyPos={stickyPos}
        overlapping={overlapping}
      />
      <Splash isVisible={splashVisible} getIconPos={getIconPos} />
      <Site isVisible={!splashVisible} />
    </div>
  )
}
