import { Button, Modal, Select, Form, Input } from 'antd'
import { Select as MantineSelect, Text, Avatar, Group } from '@mantine/core'
import "../styles/Modal.css"
import { symbolData, colorData, boardSizeOptions } from '../utils/Constants'
import React, { useState, useRef } from 'react'

export default function ModalDiv({ open, setOpen }) {

    const [form] = Form.useForm();
    const formRef = useRef(null)
    const [player1Name, setPlayer1Name] = useState(undefined)
    const [player2Name, setPlayer2Name] = useState(undefined)
    const [selectedSymbol1, setSelectedSymbol1] = useState(undefined)
    const [selectedSymbol2, setSelectedSymbol2] = useState(undefined)
    const [selectedColor1, setSelectedColor1] = useState('#000000')
    const [selectedColor2, setSelectedColor2] = useState('#000000')
    const [selectedBoardSize, setSelectedBoardSize] = useState(100)


    const filteredSymbolData1 = symbolData.filter(a => a.value != selectedSymbol2)
    const filteredSymbolData2 = symbolData.filter(a => a.value != selectedSymbol1)

    const filteredColor1 = colorData.filter(a => a.value != selectedColor2)
    const filteredColor2 = colorData.filter(a => a.value != selectedColor1)

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
        console.log(values)
        setOpen(false)
        
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
                    <p>A játék két szereplős, megkezdéséhez kötelező nevet, illetve szimbólumot kiválasztania (minden játékoshoz csupán egy szimbólum tartozhat)! Ha kívánja módosíthatja a kiválasztott szimbólum színét, illetve a pálya méretét (alapértelmezetten minden szimbólum fekete színű, illetve a pálya mérete 10X10-es háló).</p>
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
                                    onChange={(value) => setSelectedSymbol1(value)}
                                />
                            </Form.Item>

                            <Form.Item name="selectedColor1" >
                                <MantineSelect
                                    label='Választhat egy színt!'
                                    placeholder='Választhat egy színt!'
                                    itemComponent={SelectItem}
                                    data={filteredColor1}
                                    onChange={(value) => setSelectedColor1(value)}
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
                                    onChange={(value) => setSelectedSymbol2(value)}
                                />
                            </Form.Item>

                            <Form.Item name="selectedColor2" >
                                <MantineSelect
                                    label='Választhat egy színt!'
                                    placeholder='Választhat egy színt!'
                                    itemComponent={SelectItem}
                                    data={filteredColor2}
                                    onChange={(value) => setSelectedColor2(value)}

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
                                onChange={(value) => setSelectedBoardSize(value)}
                            />
                        </Form.Item>
                    </div>

                </Form>

            </Modal>
        </div>
    )

}