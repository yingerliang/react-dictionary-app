import React, { useState } from 'react'
import axios from 'axios'
import './Dictionary.css'
import Results from './Results'
import Photos from './Photos'

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword)
  let [results, setResults] = useState(null)
  let [loaded, setLoaded] = useState(false)
  let [photos, setPhotos] = useState(null)

  function handleResponse(response) {
    setResults(response.data[0])
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos)
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiUrl).then(handleResponse)

    //documentation: https://www.pexels.com/api/documentation/
    let pexelsApiKey =
      '563492ad6f9170000100000147f5ecf5a5164f55925f63facb6fdfbb'
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`

    let headers = { Authorization: `Bearer ${pexelsApiKey}` }

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse)
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  function handleChange(event) {
    setKeyword(event.target.value)
  }

  function load() {
    setLoaded(true)
    search()
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleChange}
              defaultValue={props.defaultKeyword}
              className="form-control"
            />
          </form>
          <div className="hint">suggested words: sunset, wine, forest...</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    )
  } else {
    load()
    return 'Loading...'
  }
}
