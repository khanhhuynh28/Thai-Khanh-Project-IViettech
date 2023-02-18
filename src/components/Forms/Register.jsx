import './style/register.scss';

import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import { registerAction } from '../../stores/action/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 24,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const Register = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [getDataRegister, setGetDataRegister] = useState({
        nickname: '',
        email: '',
        id: '',
        password: '',
    });
    const [form] = Form.useForm();

    if (user) return <Navigate to={'./login'} />;

    const handleChangeRegister = (e) => {
        const { value, name } = e.target;
        setGetDataRegister({
            ...getDataRegister,
            [name]: value,
        });
    };

    const onFinish = () => {
        const { nickname, email, id, password } = getDataRegister;
        dispatch(
            registerAction({
                nickname: nickname,
                email: email,
                id: id,
                password: password,
            })
        );
        console.log(nickname);
        console.log(email);
        console.log(id);
        console.log(password);
    };
    return (
        <div className="containerRegister">
            <div className="register">
                <h3 className="titleRegister">Đăng ký</h3>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        prefix: '84',
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    scrollToFirstError
                >
                    <Form.Item
                        name="nickname"
                        tooltip="What do you want others to call you?"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập họ và tên!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input
                            placeholder="Họ và tên"
                            name="nickname"
                            onChange={handleChangeRegister}
                            width="100%"
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập email!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="Email" name="email" onChange={handleChangeRegister} />
                    </Form.Item>
                    <Form.Item
                        name="id"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập địa chỉ!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="Địa chỉ" name="id" onChange={handleChangeRegister} />
                    </Form.Item>
                    {/* <Form.Item
                        name="phone"
                        label="Số điện thoại"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập số điện thoại!',
                            },
                        ]}
                    >
                        <Input
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item> */}

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                            placeholder="Mật khẩu"
                            name="password"
                            onChange={handleChangeRegister}
                        />
                    </Form.Item>

                    {/* <Form.Item
                        name="confirm"
                        label="Xác nhận"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng xác nhận mật khẩu!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error('The two passwords that you entered do not match!')
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item> */}

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value
                                        ? Promise.resolve()
                                        : Promise.reject(new Error('Hãy chấp nhận điều khoản')),
                            },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            Tôi đã đọc <a href="">điều khoản</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button className="form-submit-register" htmlType="submit">
                            Đăng ký
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default Register;
