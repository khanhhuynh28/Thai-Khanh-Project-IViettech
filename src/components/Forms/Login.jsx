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
        password: "",
    })


    if (user) return <Navigate to={"/"} />

    const handleChangeLogin = (e) => {
        const { value, name } = e.target;
        setFormLogin({
            ...formLogin,
            [name]: value,

        });
    };

    const { email, password } = formLogin;
    const onFinish = (e) => {

        dispatch(
            loginAction({
                email: email,
                password: password
            })
        )
        console.log(email)
        console.log(password)
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
                                name="username"
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

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="37"
                                height="37"
                                fill="currentColor"
                                className="bi bi-facebook"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </li >
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="37"
                                height="37"
                                fill="currentColor"
                                className="bi bi-browser-chrome"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                                />
                            </svg>
                        </li>
                        <li className="apple">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                fill="currentColor"
                                className="bi bi-apple"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                            </svg>
                        </li>
                    </ul >
                </div >
            </div >
        </div >
    );
};
export default Login;
