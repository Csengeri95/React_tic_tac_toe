import { Button, Modal, Select, Form, Input } from 'antd'
import { Select as MantineSelect, Text, Avatar, Group } from '@mantine/core'
import "../styles/Modal.css"
import { symbolData, colorData, boardSizeOptions } from '../utils/Constants'
import React, { useRef, useContext } from 'react'
import { GameSettingsContext } from '../contexts/GameSettingsContexts'
import { useNavigate } from 'react-router-dom'

export default function ModalDiv({ open, setOpen }) {

    const [form] = Form.useForm();
    const formRef = useRef(null)
    const navigate = useNavigate()
    const { gameSettings, setGameSettings } = useContext(GameSettingsContext)

    const filteredSymbolData1 = symbolData.filter(a => a.value !== gameSettings.selectedSymbol2)
    const filteredSymbolData2 = symbolData.filter(a => a.value !== gameSettings.selectedSymbol1)

    const filteredColor1 = colorData.filter(a => a.value !== gameSettings.selectedColor2)
    const filteredColor2 = colorData.filter(a => a.value !== gameSettings.selectedColor1)

    const SelectItem = React.forwardRef(({ image, label, description, ...others }, ref) => (
        <div ref={ref} {...others}>
            <Group noWrap>
                <Avatar src={image} />

                <div>
                    <Text size="sm">{label}</Text>
                    <Text size="xs" opacity={0.65}>
                        {description}
                    </Text>
                </div>
            </Group>
        </div>
    ));


    function onFinish(values) {
        // console.log(values)
        setGameSettings({
            ...gameSettings,
            player1Name: values.player1Name,
            player2Name: values.player2Name
        });
        setOpen(false)
        navigate('/game')

    }

    function onReset() {

        formRef.current.resetFields()
        setOpen(false)
    }



    return (
        <div className='modal'>
            <Modal
                open={open}
                onCancel={() => setOpen(false)}
                title="Új játék kezdése"
                centered
                className="centered_modal"
                footer={[
                    <Button
                        danger
                        key="back"
                        size='large'
                        onClick={onReset}
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
                        onClick={() => form.submit()}
                    >
                        Létrehoz
                    </Button>
                ]}
            >

                <div className='description'>
                    <p>A játék két szereplős, megkezdéséhez kötelező nevet, illetve szimbólumot kiválasztania (minden játékoshoz csupán egy szimbólum tartozhat)! Ha kívánja módosíthatja a kiválasztott szimbólum színét, illetve a pálya méretét (alapértelmezetten minden szimbólum fekete színű, illetve a pálya mérete egy 10X10-es háló).</p>
                    <p>Jó játékot!</p>
                </div>

                <Form
                    labelCol={{ span: 24, style: { fontWeight: 600 } }}
                    form={form}
                    onFinish={onFinish}
                    ref={formRef}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                        <div style={{ width: '45%' }}>
                            <Form.Item
                                label="1. játékos"
                                name="player1Name"
                                rules={[{ required: true, message: 'Kérem adjon meg egy nevet!' }]}
                            >

                                < Input
                                    placeholder='Név'
                                    size='default'
                                    autoComplete='off'
                                />
                            </Form.Item>

                            <Form.Item
                                label="Válasszon egy szimbólumot!"
                                name="selectedSymbol1"
                                rules={[{ required: true, message: 'Kérem válasszon egy szimbólumot!' }]}
                            >
                                <Select
                                    placeholder="Válasszon szimbólumot!"
                                    options={filteredSymbolData1}
                                    onChange={(value) => setGameSettings({ ...gameSettings, selectedSymbol1: value })}
                                />
                            </Form.Item>

                            <Form.Item name="selectedColor1" >
                                <MantineSelect
                                    label='Választhat egy színt!'
                                    placeholder='Választhat egy színt!'
                                    itemComponent={SelectItem}
                                    data={filteredColor1}
                                    onChange={(value) => setGameSettings({ ...gameSettings, selectedColor1: value })}
                                    
                                />
                            </Form.Item>
                        </div>



                        <div style={{ width: '45%' }}>
                            <Form.Item
                                label="2. játékos"
                                name="player2Name"
                                rules={[{ required: true, message: 'Kérem adjon meg egy nevet!' }]}
                            >
                                < Input
                                    placeholder='Név'
                                    size='default'
                                    autoComplete='off' />
                            </Form.Item>

                            <Form.Item
                                label="Válasszon egy szimbólumot!"
                                name="selectedSymbol2"
                                rules={[{ required: true, message: 'Kérem válasszon egy szimbólumot!' }]}
                            >
                                <Select
                                    placeholder="Válasszon szimbólumot!"
                                    options={filteredSymbolData2}
                                    onChange={(value) => setGameSettings({ ...gameSettings, selectedSymbol2: value })}
                                />
                            </Form.Item>

                            <Form.Item name="selectedColor2" >
                                <MantineSelect
                                    label='Választhat egy színt!'
                                    placeholder='Választhat egy színt!'
                                    itemComponent={SelectItem}
                                    data={filteredColor2}
                                    onChange={(value) => setGameSettings({ ...gameSettings, selectedColor2: value })}

                                />
                            </Form.Item>
                        </div>
                    </div>

                    <div className='select_wrapper' >
                        <Form.Item
                            label='Választhat háló méretet!'
                            name="selectedboardSize"
                            labelCol={{ span: 24, style: { textAlign: 'center', fontWeight: 600 } }}
                        >

                            <Select
                                placeholder='Választhat háló méretet!'
                                options={boardSizeOptions}
                                onChange={(value) => setGameSettings({ ...gameSettings, selectedBoardSize: value })}
                            />
                        </Form.Item>
                    </div>

                </Form>

            </Modal>
        </div>
    )

}