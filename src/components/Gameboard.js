import { useContext, useEffect, useState } from "react"
import "../styles/Gameboard.css"
import Square from "./Square"
import { GameSettingsContext } from "../contexts/GameSettingsContexts"

export default function Gameboard() {

    const [square, setSquare] = useState(Array(100).fill(""))
    //const [shape, setShape] = useState("O")

    const { gameSettings } = useContext(GameSettingsContext)

    const players = {
        first: {
            name: gameSettings.player1Name,
            symbol: gameSettings.selectedSymbol1,
            style: gameSettings.selectedColor1
        },
        second: {
            name: gameSettings.player2Name,
            symbol: gameSettings.selectedSymbol2,
            style: gameSettings.selectedColor2
        }
    }
    const [shape, setShape] = useState(players.first)


    return (
        <div className="gameboard-container">
            <div className="gameboard">
                {square.map((map, index) =>
                    <Square
                        key={index}
                        id={index}
                        players={players}
                        shape={shape}
                        setShape={setShape}
                        square={square}
                        setSquare={setSquare}
                    />
                )}


            </div>
            <p>{shape.name} következik</p>
        </div>
    )
}