import {useState} from 'react'

export default function MainCard({setGames}) {
    const [game, setGame] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()
        if(game === "")return
        const respuesta = await fetch(`https://cheapshark-game-deals.p.rapidapi.com/deals?title=${game}`, {
            headers: {
                'X-RapidAPI-Key': '24a32d45e0msh43ddd6efd389b52p18c800jsnccfa0703dc54',
                'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
            }
        })
        const resultado = await respuesta.json()
        setGames(resultado)
        console.log(resultado)
    }
  return (
    <>
        <main id='card'>
            <div id='back'>
                <div id='topBar'>
                    <img src="https://cdn.leonardo.ai/users/b409b65d-045e-428d-9c53-1157e2d9ebe1/generations/2cab3bfb-653f-4c34-856b-a9b889c3c53c/variations/Default_video_game_company_logo_colors_red_dark_blue_high_qual_2_2cab3bfb-653f-4c34-856b-a9b889c3c53c_0.png" alt="logo" />
                    <h1>GamePrice Comparer</h1>
                    <p></p>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="game">Escribe un juego</label>
                    <input name='game' id='campo' type="text" placeholder='Juego' onChange={e => setGame(e.target.value)}/>
                    <input type="submit" value="Buscar" className='btn' />
                </form>
            </div>
        </main>
    </>
  )
}
