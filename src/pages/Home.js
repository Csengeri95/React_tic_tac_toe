import { useState } from "react";
import Gameboard from "../components/Gameboard";
import "../styles/Home.css"
import { Button } from 'antd'
import Modal from "../components/Modal";

export default function Home() {

    const [open, setOpen] = useState(false)

    return (
        <div className="home">
            <Button className="new_game_button" type="primary" size="large" danger onClick={() => setOpen(true)} >
                Új játék!
            </Button>

            <Modal open={open} setOpen={setOpen} />
            {/* <Gameboard /> */}
        </div>
    )
}