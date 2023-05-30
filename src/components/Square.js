import { useEffect } from "react"
import "../styles/Square.css"


export default function Square({ id, players, shape, setShape, setSquare, square, winner, gameReset, setGameReset }) {


    useEffect(() => {
        if (gameReset) {
            const squares = document.getElementsByClassName("cell");
            Array.from(squares).forEach(square => {
                square.textContent = "";
            });
        }
        setGameReset(false)
    }, [gameReset, setGameReset])



    function handleClick(e) {
        const reserved = e.target.firstChild.textContent.includes(players.first.symbol) || e.target.firstChild.textContent.includes(players.second.symbol)

        if (winner) {
            return
        }

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




    function handleColor(symbol) {

        let symbolColor = "";

        if (symbol === players.first.symbol) {
            symbolColor = players.first.style;
        } else if (symbol === players.second.symbol) {
            symbolColor = players.second.style;
        }

        const newSquare = square.map((map, index) => {
            if (index === id) {
                return {
                    symbol,
                    symbolColor
                }
            }
            else {
                return map
            }
        })

        setSquare(newSquare)

    }

    return (
        <div className="square" id={id} onClick={handleClick}  >
            <div className="cell" style={{ color: square[id].symbolColor }}  >

            </div>
        </div>
    )
}