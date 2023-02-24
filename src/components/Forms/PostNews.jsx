import React, { useState } from 'react';
import './style/postnews.scss';

import {
    Button,
    // DatePicker,
    Form,
    Input,
    InputNumber,
    // Radio,
    // Select,
    Switch,
    TreeSelect,
    Upload,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch } from 'react-redux';

// type SizeType = Parameters<typeof Form>[0]['size'];

const abc = [
    {
        title: 'Xe Cộ',
        value: 'xe-co',
        children: [
            { title: 'Ô tô', value: 'oto' },
            { title: 'Xe máy', value: 'xe-may' },
        ],
    },
    {
        title: 'Đồ điện tử',
        value: 'do-dien-tu',
        children: [
            { title: 'Laptop / Máy tính', value: 'laptop' },
            { title: 'Điện thoại', value: 'dien-thoai' },
        ],
    },
    {
        title: 'Thú cưng',
        value: 'thu-cung',
        children: [
            { title: 'Chó', value: 'cho' },
            { title: 'Mèo', value: 'meo' },
        ],
    },
    {
        title: 'Thực phẩm',
        value: 'thuc-pham',
        children: [
            { title: 'Đồ ăn', value: 'do-an' },
            { title: 'Đồ uống', value: 'do-uong' },
        ],
    },
    {
        title: 'Đồ gia dụng',
        value: 'do-gia-dung',
        children: [
            { title: 'Dụng Cụ Bếp', value: 'dung-cu-bep' },
            { title: 'Đồ Điện Nước', value: 'do-dien-nuoc' },
        ],
    },
    {
        title: 'Tủ Lạnh / Máy Giặt',
        value: 'tu-lanh-may-giat',
        children: [
            { title: 'Tủ Lạnh', value: 'tu-lanh' },
            { title: 'Máy Giặt', value: 'may-giat' },
        ],
    },
];

function PostNews() {
    const dispatch = useDispatch()
    const [getDataFromPostNew, setGetDataFromPostNew] = useState({
        category: "",
        title: "",
        shortDescription: "",
        price: "",
    });

    const handleChangePostNew = (e) => {
        const { name, value } = e.target;
        setGetDataFromPostNew({
            ...getDataFromPostNew,
            [name]: value,

        });
    };

    const onFinish = () => {
        const { category, title, shortDescription, price } = getDataFromPostNew;
        dispatch({
            category: category,
            title: title,
            shortDescription: shortDescription,
            price: price,
        })
        console.log(category)
        console.log(title)
        console.log(shortDescription)
        console.log(price)
    }

    return (
        <div className="container-postnews">
            <div className="main-postnews">
                <div className="select-photo">
                    <Form.Item label="Ảnh / Video của sản phẩm:" valuePropName="fileList">
                        <Upload action="/upload.do" listType="picture-card" className="b123" name='srcImage'>
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
                            <Form.Item label="" >
                                <TreeSelect
                                    name="category"
                                    treeData={abc}
                                    placeholder="Danh Mục Đăng Tin"
                                    onChange={handleChangePostNew}
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item >
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
                            <Form.Item label="" >
                                <label>Giá Tiền: </label>
                                <InputNumber
                                    name="price"
                                    onChange={handleChangePostNew}
                                />
                            </Form.Item>
                        </div>

                        <Form.Item label="" valuePropName="checked">
                            <label>Đã qua sử dụng: </label>
                            <Switch />
                        </Form.Item>
                        <div className="post-news-btn">
                            <Form.Item>
                                <Button className="post-news-btn-item">Đăng Tin</Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default PostNews;
