import React from 'react'
import Meaning from './Meaning'
import Phonetic from './Phonetic'
import './Results.css'
import audio from './images/audio.svg'

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="row">
          <div className="col-md-8">
            <section>
              <h2>{props.results.word}</h2>

              {props.results.phonetics
                .filter(function (phonetic) {
                  return phonetic.audio
                })
                .map(function (phonetic, index) {
                  return (
                    <div key={index}>
                      <Phonetic phonetic={phonetic} />
                    </div>
                  )
                })}
            </section>
          </div>
          <div className="col-md">
            <img
              src={audio}
              alt="audio-img"
              className="img-fluid d-none d-md-block"
              width="250"
            />
          </div>
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          )
        })}
      </div>
    )
  } else {
    return null
  }
}
