import { Form, Button, Input } from 'antd'
import '../styles/Login.css'
import { useContext, useRef } from 'react'
import Logo from '../assets/logo-removebg.png'
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const formRef = useRef(null)
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()


    function onFinish(values) {
        setUser(values)
        formRef.current.resetFields()
        navigate('/home')
    }


    function onFinishFailed(errorInfo) {
        console.log(errorInfo)
    }

    return (
        <div className="login">
            <img src={Logo} alt='Logo' title='Logo' />
            <div className='login_form'>


                <Form
                    name='login'
                    labelCol={{ span: 24 }}
                    style={{ maxWidth: 400 }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete='off'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    ref={formRef}
                >

                    <Form.Item
                        label='Felhasználónév'
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Kérem adjon meg egy felhasználónevet!',
                            },
                        ]}
                        className='custom-label'
                    >
                        <Input

                            placeholder='Az Ön felhasználóneve'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Jelszó'
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Kérem adja meg a jelszavát!'
                            }
                        ]}
                        className='custom-label'
                    >
                        <Input.Password

                            placeholder='Az Ön jelszava'
                        />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button
                            type="primary"
                            htmlType="submit"
                            size='large'
                        >
                            Bejelentkezés
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}