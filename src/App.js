import './App.css'

import Dictionary from './Dictionary'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Dictionary </h1>{' '}
      </header>
      <main>
        <Dictionary defaultKeyword="lime" />
      </main>
    </div>
  )
}
