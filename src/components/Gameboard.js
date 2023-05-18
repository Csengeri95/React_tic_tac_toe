import { useState } from "react"
import "../styles/Gameboard.css"
import Square from "./Square"


export default function Gameboard() {

    const [square, setSquare] = useState(Array(100).fill(""))

    return (
        <div className="gameboard">
            {square.map((map,index)=><Square key={index} content={map} index={index} />   )}
        </div>
    )
}