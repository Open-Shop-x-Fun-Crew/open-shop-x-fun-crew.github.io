import React, { useState } from 'react'

import LogoButton from '../components/logo-button'
import Splash from '../components/splash'
import Site from '../components/site'

export default function Home() {
  const [splashVisible, setSplashVisible] = useState(true)

  function toggleSplashVisible() {
    setSplashVisible(!splashVisible)
  }

  return (
    <div>
      <LogoButton onClick={toggleSplashVisible} />
      <Splash isVisible={splashVisible} />
      <Site isVisible={!splashVisible} />
    </div>
  )
}
