
import "./style/login-style.scss";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from "react";
const Login = () => {
    const [getData, setGetData] = useState();

    const getDataFormInput = () => {
        e.prevenDefault()
    }

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className="containerLogin">
            <div className="login">
                <h3 className="title">Đăng nhập</h3>
                <div></div>
                <div>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tên!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên đăng nhập" onChange={e => setGetData(e.target.value)} />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Mật khẩu"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Nhớ mật khẩu</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Quên mật khẩu?
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Đăng Nhập
                            </Button>
                            Hoặc <a href="./Re">Đăng ký!</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};
export default Login;