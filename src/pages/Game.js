import Gameboard from "../components/Gameboard"
import "../styles/Game.css"
import Logo from '../assets/logo-removebg.png'
export default function Game() {
    return (
        <div className="game">
            <img src={Logo} title="Logo" alt="Logo" />

            <Gameboard />
        </div>
    )
}