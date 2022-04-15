import React from 'react'
import Audio from './Audio'
import './Phonetics.css'

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="playAudio">
        <Audio audio={props.phonetic.audio} />
      </span>
      <span className="text">{props.phonetic.text}</span>
    </div>
  )
}
