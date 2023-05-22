import { Button, Modal, Select, Form, Input } from 'antd'
import { Select as MantineSelect, Text, Avatar, Group } from '@mantine/core'
import "../styles/Modal.css"

export default function ModalDiv({ open, setOpen }) {

    return (
        <div className='modal'>
            <Modal
                open={open}
                onCancel={()=>setOpen(false)}
                title="Új játék kezdése"
                centered
                className="centered_modal"
                footer={[
                    <Button
                        danger
                        key="back"
                        size='large'
                    >
                        Mégse
                    </Button>,

                    <Button
                        style={{ backgroundColor: '#4BB543', fontWeight: 600 }}
                        danger
                        key="submit"
                        type='primary'
                        size='large'
                        htmlType="submit"
                    >
                        Létrehoz
                    </Button>
                ]}
            >

                <div className='description'>
                    <p>A játék két szereplős, megkezdéséhez kötelező nevet, illetve szimbólumot kiválasztania (minden játékoshoz csupán egy szimbólum tartozhat)! Ha kívánja módosíthatja a kiválasztott szimbólum színét, illetve a pálya méretét (alapértelmezetten minden szimbólum fekete színű, illetve a pálya mérete 10X10-es háló).</p>
                    <p>Jó játékot!</p>
                </div>
                <Form
                    labelCol={{ span: 24, style: { fontWeight: 600 } }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                        <div style={{ width: '45%' }}>
                            <Form.Item label="1. játékos" name="player1Name" >
                                < Input placeholder='Név' size='default' autoComplete='off' />
                            </Form.Item>
                        </div>
                    </div>


                </Form>

            </Modal>
        </div>
    )

}