import { useState } from 'react'
// import words from '../data/words.json'
import './App.css'
import GuessedLetter from './components/GuessedLetter';
import PuzzleWord from './components/PuzzleWord';

const words = [
  "marriageproof",
  "minionette",
  "unlichened",
  "electrocardiographic",
  "hippophagy",
  "polyphore",
  "debellate",
  "zyga",
  "antedonin",
  "hirudinean",
  "foremastman",
  "metapolitics",
  "bianisidine",
  "gros",
  "superindifferent",
  "collar",
  "maculose",
  "unphysically",
  "narrowish",
  "Bartonia",
  "inadherent",
  "arbitrary",
  "forefeelingly",
  "palame",
  "vina",
  "northwestward"
]

const randomWord = words[Math.floor(Math.random() * words.length)];

function App() {

  const [display, setDisplay] = useState(Array(randomWord.length).fill('_'));
  const [prev, setPrev] = useState([])
  const [remainder, setRemainder] = useState(0)

  function handleGuess(letter) {
    setDisplay(display.map((char, i) => (randomWord[i] === letter ? letter : char)));
    if(!prev.includes(letter)){
      setRemainder(remainder + 1)
    }
    if(remainder >= 6){
      alert('Hey you lose.')
      location.reload()
    }
    if (prev.includes(letter)){
      alert(`You've already guessed '${letter}'`)
      return
    }
    if (letter.length != 1){
      alert("You must guess one letter.")
      return
    }
    setPrev([...prev, letter])
  }

  return (
    <div className="App">
      <h1>{remainder}</h1>
      <GuessedLetter handleGuess={handleGuess} prev={prev} />
      <PuzzleWord display={display}/>
    </div>
  )
}

export default App
