import React, { useState } from 'react'
import LogoButton from '../components/logo-button'
import Splash from '../components/splash'
import Site from '../components/site'

export default function Home() {
  return (
    <div>
      <LogoButton />
      <Splash />
      <Site />
    </div>
  )
}
