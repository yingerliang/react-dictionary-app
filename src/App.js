import './App.css'
import logo from './images/book.gif'
import Dictionary from './Dictionary'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <h1> Dictionary </h1>
        <Dictionary />
      </header>
    </div>
  )
}
