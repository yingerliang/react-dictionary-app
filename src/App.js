import './App.css'
import search from './images/search.svg'
import Dictionary from './Dictionary'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={search}
          alt="header-img"
          class="img-fluid d-none d-sm-block"
          width="250"
        />
        <h1> Dictionary </h1>{' '}
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer>
        <a
          href="https://github.com/yingerliang"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{' '}
        by{' '}
        <a
          href="https://portfolio-rebecca.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Rebecca.
        </a>{' '}
        Photos by
        <a href="https://www.pexels.com/" target="_blank" rel="noreferrer">
          {' '}
          Pexels.
        </a>
      </footer>
    </div>
  )
}
