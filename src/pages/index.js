import React, { useState } from 'react'
import { useEffect } from 'react'
import FilmList from '../components/film-list'
import Footer from '../components/footer'
import ToggleableSplash from '../components/toggleable-splash'

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
    <main>
      <div id="#top" />
      <ToggleableSplash
        splashVisible={splashVisible}
        toggleSplashVisible={toggleSplashVisible}
        getIconPos={getIconPos}
        pos={pos}
        stickyPos={stickyPos}
        overlapping={overlapping}
      />
      <FilmList isVisible={!splashVisible} />
      <Footer isVisible={!splashVisible} />
    </main>
  )
}
