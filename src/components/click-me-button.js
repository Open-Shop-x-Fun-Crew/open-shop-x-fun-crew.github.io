import React from "react"

export default function ClickMeButton(props) {
  const clickedState = props.isClicked ? "I am clicked" : "Click me"

  return <button onClick={props.onClick}>{clickedState}</button>
}
