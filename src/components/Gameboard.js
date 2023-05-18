import { useState } from "react"
import "../styles/Gameboard.css"
import Square from "./Square"


export default function Gameboard() {

    const [square, setSquare] = useState(Array(100).fill(""))
    //const [shape, setShape] = useState("O")

    const players = {
        first: {
            name: "Anna",
            symbol: "O",
            style: "red"
        },
        second: {
            name: "Levente",
            symbol: "X",
            style: "green",
        }
    }
    const [shape, setShape] = useState(players.first)

    console.log(square)

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