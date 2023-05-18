import { useEffect, useState } from "react"
import "../styles/Square.css"


export default function Square({ id, players, shape, setShape, setSquare, square }) {


    function handleClick(e) {
        const reserved = e.target.firstChild.textContent.includes(players.first.symbol) || e.target.firstChild.textContent.includes(players.second.symbol)



        if (!reserved) {

            if (shape.symbol === players.first.symbol) {
                e.target.firstChild.textContent = players.first.symbol
                setShape(players.second)
                handleColor(players.first.symbol)
            }


            if (shape.symbol === players.second.symbol) {
                e.target.firstChild.textContent = players.second.symbol
                setShape(players.first)
                handleColor(players.second.symbol)


            }
        }

    }




    function handleColor(style) {

        let symbolColor = "";

        if (style === players.first.symbol) {
            symbolColor = players.first.style;
        } else if (style === players.second.symbol) {
            symbolColor = players.second.style;
        }

        const newSquare = square.map((map, index) => {
            if (index === id) {
                return {
                    style,
                    symbolColor
                }
            }
            else {
                return map
            }
        })

        setSquare(newSquare)

    }

    console.log(square)
    return (
        <div className="square" id={id} onClick={handleClick}  >
            <div className="cell" style={{ color: square[id].symbolColor }}  >

            </div>
        </div>
    )
}