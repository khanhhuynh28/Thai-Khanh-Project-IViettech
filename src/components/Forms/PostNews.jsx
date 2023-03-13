import React, { useState } from 'react';
import './style/postnews.scss';

import { Button, Form, Input, Switch, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch } from 'react-redux';
import { postProduct } from '../../stores/action/product.action';
import { Link } from 'react-router-dom';
import { appRoute } from '../../const/routes.const';

const options = [
    {
        label: 'Select Category',
        value: 'DEFAULT',
    },
    {
        label: 'Cars',
        value: 'cars',
    },
    {
        label: 'Phones',
        value: 'phones',
    },
    {
        label: 'Pets',
        value: 'pets',
    },
    {
        label: 'Foods',
        value: 'foods',
    },
    {
        label: 'House-ware(Small)',
        value: 'house-ware',
    },
    {
        label: 'House-ware(Big)',
        value: 'house-ware',
    },
];

function PostNews() {
    const dispatch = useDispatch();
    const [getDataFromPostNew, setGetDataFromPostNew] = useState({
        srcImage: '',
        title: '',
        shortDescription: '',
        price: 0,
        category: '',
    });
    const handleSubmit = () => { };
    const handleChangePostNew = (e) => {
        const { value, name } = e.target;

        setGetDataFromPostNew({ ...getDataFromPostNew, [name]: value });
    };

    const onFinish = () => {
        console.log(getDataFromPostNew);

        const { category, title, shortDescription, price } = getDataFromPostNew;
        dispatch(
            postProduct({
                srcImage:
                    'https://t4.ftcdn.net/jpg/03/08/68/19/240_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg',
                category: category,
                title: title,
                shortDescription: shortDescription,
                price: price,
            })
        );
    };

    return (
        <div className="container-postnews">
            <div className="main-postnews">
                <div className="select-photo">
                    <Form.Item label="Ảnh / Video của sản phẩm:" valuePropName="fileList">
                        <Upload
                            action="/upload.do"
                            listType="picture-card"
                            className="b123"
                            name="srcImage"
                        >
                            <div className="a1234">
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Tải ảnh lên.</div>
                            </div>
                        </Upload>
                    </Form.Item>
                </div>
                <div className="data-input">
                    <Form
                        onFinish={onFinish}
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"
                        style={{ maxWidth: 600 }}
                    >
                        <div>
                            <Form.Item label="Select">
                                <select name="category" onChange={handleChangePostNew}>
                                    {options.map((option, index) => (
                                        <option
                                            key={index}
                                            name={option.label}
                                            selected={option.value === 'DEFAULT' ? true : false}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item>
                                <label>Tên sản phẩm</label>
                                <Input
                                    name="title"
                                    placeholder="Nhập tên của sản phẩm!"
                                    onChange={handleChangePostNew}
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item>
                                <label>Thông tin chi tiết!</label>
                                <TextArea
                                    name="shortDescription"
                                    placeholder="Nhập thông tin của sản phẩm"
                                    onChange={handleChangePostNew}
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item label="">
                                <label>Giá Tiền: </label>
                                <Input name="price" onChange={handleChangePostNew} />
                            </Form.Item>
                        </div>
                        <Form.Item label="" valuePropName="checked">
                            <label>Đã qua sử dụng: </label>
                            <Switch />
                        </Form.Item>
                        <div className="post-news-btn">
                            <Form.Item>
                                <Link to={appRoute.home}>
                                    <Button className="post-news-btn-item" onClick={onFinish}>
                                        Đăng Tin
                                    </Button>
                                </Link>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default PostNews;
