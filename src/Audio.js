import React from 'react'
import './Audio.css'

export default function Audio(props) {
  console.log(props.audio)
  return (
    <div className="Audio">
      <audio className="audioFile" src={props.audio}></audio>
      <span
        className="btn"
        onClick={function () {
          const audio = document.getElementsByClassName('audioFile')[0]
          audio.play()
        }}
      ></span>
      <i class="fa-solid fa-circle-play"></i>
    </div>
  )
}
