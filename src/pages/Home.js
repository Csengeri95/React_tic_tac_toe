import { useContext, useState } from "react";
import "../styles/Home.css"
import { Button, Space } from 'antd'
import Modal from "../components/Modal";
import Logo from '../assets/logo-removebg.png'
import { UserContext } from "../contexts/UserContext";
import {LogoutOutlined } from '@ant-design/icons'

export default function Home() {

    const [open, setOpen] = useState(false)
    const { setUser } = useContext(UserContext)


    return (
        <div className="home">
            <img
                src={Logo}
                title="Logo"
                alt="Logo"
                width="300px"

            />

            <Space direction="vertical">
                <Space wrap >
                    <Button
                        className="new_game_button"
                        type="primary"
                        size="large"
                        danger
                        onClick={() => setOpen(true)}
                    >
                        Új játék!
                    </Button>

                    <Button
                        className="new_game_button"
                        type="primary"
                        size="large"
                        danger
                        onClick={() => setUser(null)}
                        icon={<LogoutOutlined />}
                    >
                        Kilépés!
                    </Button>
                </Space>
            </Space>

            <Modal
                open={open}
                setOpen={setOpen}


            />

        </div>
    )
}

