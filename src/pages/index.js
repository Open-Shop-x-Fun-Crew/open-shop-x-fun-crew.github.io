import React, { useState } from 'react'

import LogoButton from '../components/logo-button'
import Splash from '../components/splash'
import Site from '../components/site'
import { useEffect } from 'react'

export default function Home() {
  const [splashVisible, setSplashVisible] = useState(true)
  const [pos, setPos] = useState({ x: null, y: null })
  const [stickyPos, setStickyPos] = useState({ x: null, y: null })

  function updatePos(e) {
    setPos({ x: e.clientX, y: e.clientY })
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
      />
      <Splash isVisible={splashVisible} />
      <Site isVisible={!splashVisible} />
    </div>
  )
}
