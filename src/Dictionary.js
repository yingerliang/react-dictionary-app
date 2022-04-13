import React, { useState } from 'react'
import axios from 'axios'
import './Dictionary.css'
import Results from './Results'

export default function Dictionary() {
  const [keyword, setKeyword] = useState('')
  const [results, setResults] = useState(null)

  function handleResponse(response) {
    setResults(response.data[0])
  }

  function search(event) {
    event.preventDefault()

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    axios.get(apiUrl).then(handleResponse)
  }

  function handleChange(event) {
    setKeyword(event.target.value)
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="Dictionary" onChange={handleChange} autoFocus={true} />
      </form>
      <Results results={results} />
    </div>
  )
}
