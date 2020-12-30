import React, { useState } from 'react'
import FilmList from '../components/film-list'
import Footer from '../components/footer'
import ToggleableSplash from '../components/toggleable-splash'

export default function Home() {
  const [splashVisible, setSplashVisible] = useState(true)

  function toggleSplashVisible() {
    setSplashVisible(!splashVisible)
  }

  return (
    <>
      <main>
        <div id="#top" />
        <ToggleableSplash
          splashVisible={splashVisible}
          toggleSplashVisible={toggleSplashVisible}
        />
        <FilmList isVisible={!splashVisible} />
      </main>
      <Footer isVisible={!splashVisible} />
    </>
  )
}
