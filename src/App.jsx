import { useState } from "react"
import MainCard from "./components/MainCard"
import GamesList from "./components/GamesList"

function App() {
  const [games, setGames] = useState([])
  return (
    <>
      <MainCard setGames={setGames}/>
      {games.length > 0 && (
        <GamesList games={games}/>
      )}
    </>
  )
}

export default App
