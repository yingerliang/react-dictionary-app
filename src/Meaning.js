import React from 'react'
import Synonyms from './Synonyms'
import './Meaning.css'

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <Synonyms synonyms={props.meaning.synonyms} />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>

            <div className="example">
              <em>{definition.example}</em>
            </div>
          </div>
        )
      })}
    </div>
  )
}
