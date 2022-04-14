import React, { useState } from 'react'
import axios from 'axios'
import './Dictionary.css'
import Results from './Results'

export default function Dictionary() {
  let [keyword, setKeyword] = useState('')
  let [results, setResults] = useState(null)

  function handleResponse(response) {
    setResults(response.data[0])
  }

  function search(event) {
    event.preventDefault()

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    axios.get(apiUrl).then(handleResponse)
  }

  function handleChange(event) {
    setKeyword(event.target.value)
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleChange}
            placeholder="Search for a word..."
            autoFocus={true}
            className="form-control"
          />
        </form>
        <div className="hint">Suggested words: sunset, wine, forest...</div>
      </section>
      <Results results={results} />
    </div>
  )
}
