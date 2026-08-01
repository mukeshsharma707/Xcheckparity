import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleClick = () => {
    const trimmedInput = input.trim()

    if (trimmedInput === '') {
      setMessage('Error: Please enter a number')
      return
    }

    const number = Number(trimmedInput)

    if (Number.isNaN(number)) {
      setMessage('Error: Not a valid number')
      return
    }

    if (number % 2 === 0) {
      setMessage(`Success: ${number} is even`)
    } else {
      setMessage(`Error: ${number} is odd`)
    }
  }

  return (
    <div className="outer-container">
      <div className="inner-container">
        <h2>Even or Odd Checker</h2>
        <input
          name="number"
          value={input}
          style={{ padding: '5px', margin: '10px', width: '250px', display: 'block', margin: '0 auto', border: '1px solid #ccc', marginBottom: '5px', borderRadius: '5px' }}
          type="text"
          onChange={handleChange}
          placeholder="Enter a number"
        />
        <button
          type="button"
          style={{ padding: '5px', margin: '10px', width: '265px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px', display: 'block', margin: '0 auto', marginBottom: '5px' }}
          onClick={handleClick}
        >
          Check
        </button>
        <p id="result">{message}</p>
      </div>
    </div>
  )
}

export default App
