import './style/login-style.scss';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../stores/action/auth.action';
import { Navigate } from 'react-router-dom';
import { appRoute } from '../../const/routes.const';
const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [formLogin, setFormLogin] = useState({
        email: "",
        nickname: "",
        password: "",
    })


    if (user) return <Navigate to={appRoute.home} />

    const handleChangeLogin = (e) => {
        const { value, name } = e.target;
        setFormLogin({
            ...formLogin,
            [name]: value,

        });
    };

    const { email, password, username } = formLogin;
    const onFinish = () => {

        dispatch(
            loginAction({
                email: email,
                username: username,
                password: password
            })
        )
    }
    return (
        <div className="containerLogin">
            <div className="formLogin">
                <h3 className="title">Đăng nhập</h3>
                <div className='login'>
                    <Form
                        onFinish={onFinish}
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                    >
                        <Form.Item
                            // name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập email!',
                                },
                            ]}
                        >
                            <Input
                                name="email"
                                prefix={<MailOutlined />}
                                placeholder="Email"
                                onChange={handleChangeLogin}
                            />
                        </Form.Item>
                        <Form.Item
                            // name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập họ và tên!',
                                },
                            ]}
                        >
                            <Input
                                name="nickname"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Họ và tên"
                                onChange={handleChangeLogin}
                            />
                        </Form.Item>
                        <Form.Item
                            // name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu!',
                                },
                            ]}
                        >
                            <Input
                                name="password"
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Mật khẩu"
                                onChange={handleChangeLogin}
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
                            <Button htmlType="submit" className="login-form-button">
                                Đăng nhập
                            </Button>
                            Hoặc <a href="http://localhost:3000/register">Đăng ký!</a>
                        </Form.Item>
                    </Form>
                    <p className="or">Hoặc sử dụng</p>
                </div>
                <div className="icon">
                    <ul>
                        <li>
                            <img src="https://static.chotot.com/storage/assets/LOGIN/facebook.svg" alt="" />
                        </li >
                        <li>
                            <img src="https://static.chotot.com/storage/assets/LOGIN/google.svg" alt="" />
                        </li>
                        <li className="apple">
                            <img src="https://static.chotot.com/storage/assets/LOGIN/apple.svg" alt="" />
                        </li>
                    </ul >
                </div >
            </div >
        </div >
    );
};
export default Login;
