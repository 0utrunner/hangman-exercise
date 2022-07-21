import { useState } from 'react'

function GuessedLetter({handleGuess, prev}) {
    const [letter, setLetter] = useState('')

  return (

    <div>
        <input type="text" value={letter} onChange={(event) => setLetter(event.target.value)}/>
        <button onClick={() => handleGuess(letter)}>SUBMIT</button>
        <p>Guessed Letters: {prev}</p>
    </div>
  )
}

export default GuessedLetter