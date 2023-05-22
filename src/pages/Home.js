import { useState } from "react";
import Gameboard from "../components/Gameboard";
import "../styles/Home.css"
import { Button } from 'antd'
import Modal from "../components/Modal";
import Logo from '../assets/logo-removebg.png'

export default function Home() {

    const [open, setOpen] = useState(false)


    return (
        <div className="home">
            <img
                src={Logo}
                title="Logo"
                alt="Logo"
                width="300px"

            />
            <Button
                className="new_game_button"
                type="primary"
                size="large"
                danger
                onClick={() => setOpen(true)}
            >
                Új játék!
            </Button>

            <Modal
                open={open}
                setOpen={setOpen}


            />

        </div>
    )
}