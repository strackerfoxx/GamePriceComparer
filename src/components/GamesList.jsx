import React from 'react'

export default function GamesList({games}) {
    console.log(games)
  return (
    <main id='list'>
        <div id='grid'>
            {games.map(game => (
                <div className='game'>
                    <div style={{backgroundImage: `url(${game.thumb})`, backgroundSize: "cover",backgroundPosition: "center"}}></div>
                    <h3>{game.title}</h3>
                    <p>Price: <span>${game.salePrice}</span></p>
                    <p>Aprobacion: <span style={{color: "orange"}}>{game.steamRatingText}</span></p>
                    <p>Stean rating: <span>{game.steamRatingPercent}%</span></p>
                    <a href={"https://www.metacritic.com/game/pc/batman-arkham-origins-blackgate---deluxe-edition"} className='btn'style={{padding: "1rem 0", display: "block", position: "absolute", bottom: "0", width: "100%"}}>detalles</a>
                </div>
            ))}
        </div>
    </main>
  )
}
