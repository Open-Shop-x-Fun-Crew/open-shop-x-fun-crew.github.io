import React, { useState } from "react"
import ClickMeButton from "../components/click-me-button"
export default function Home() {
  const [clicked, setClicked] = useState(false)

  function toggleButton() {
    setClicked(!clicked)
  }

  return (
    <>
      <p>old paragraph text</p>
      <ClickMeButton onClick={toggleButton} isClicked={clicked} />
    </>
  )
}
