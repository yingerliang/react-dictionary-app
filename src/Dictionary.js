import React, { useState } from 'react'
import axios from 'axios'
import './Dictionary.css'

export default function Dictionary() {
  const [keyword, setKeyword] = useState('')

  function search(event) {
    event.preventDefault()
  }

  function handleChange(event) {
    setKeyword(event.target.value)
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="Dictionary" onChange={handleChange} autoFocus={true} />
      </form>
    </div>
  )
}
