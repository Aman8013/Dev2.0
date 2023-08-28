import React, { useRef } from 'react'
import { Button, Row, Form, Input, Col, Card } from 'antd'

const Register = () => {
    const email = useRef();
    const fname = useRef();
    const password = useRef();

    const HandleRegister = (e) => {
        e.preventDefault()
        console.log(email.current.input.value)
        console.log(password.current.input.value)
        console.log(fname.current.input.value)
    }

    return (
        <>
            <Row justify='center' align="middle" style={{height: '80vh'}}>
                <Col md={10} span={22}>
                    <Card
                        title="Register"
                    >
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Full Name"
                                name="fname"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Full Name!',
                                    },
                                ]}
                            >
                                <Input ref={fname} />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input type='email' ref={email} />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password ref={password} />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The new password that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit" onClick={HandleRegister}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Register