import React from 'react'
import './Synonyms.css'

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        [
        {props.synonyms.map((synonyms, index) => (
          <ul key={index}>
            <li>{synonyms}</li>
          </ul>
        ))}
        ]
      </div>
    )
  } else {
    return null
  }
}
