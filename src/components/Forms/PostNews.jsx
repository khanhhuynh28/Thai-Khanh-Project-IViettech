import React from 'react';
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
    // const [componentSize, setComponentSize] = (useState < SizeType) | ('default' > 'default');

    return (
        <div className="container-postnews">
            <div className="main-postnews">
                <div className="select-photo">
                    <Form.Item label="Ảnh / Video của sản phẩm:" valuePropName="fileList">
                        <Upload action="/upload.do" listType="picture-card" className="b123">
                            <div className="a1234">
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Tải ảnh lên.</div>
                            </div>
                        </Upload>
                    </Form.Item>
                </div>
                <div className="data-input">
                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"
                        // initialValues={{ size: componentSize }}
                        // onValuesChange={onFormLayoutChange}
                        //   size={componentSize as SizeType}
                        style={{ maxWidth: 600 }}
                    >
                        <div>
                            <Form.Item label="">
                                <TreeSelect treeData={abc} placeholder="Danh Mục Đăng Tin" />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item>
                                <label>Tên sản phẩm</label>
                                <Input placeholder="Nhập tên của sản phẩm!" />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item>
                                <label>Thông tin chi tiết!</label>
                                <TextArea placeholder="Nhập thông tin của sản phẩm" />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item label="">
                                <label>Giá Tiền: </label>
                                <InputNumber />
                            </Form.Item>
                        </div>

                        {/* <div>
                            <Form.Item>
                                <label>Ngày Sản Xuất:</label>
                                <DatePicker className="ngay-san-xuat" />
                            </Form.Item>
                        </div> */}

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

// const App: React.FC = () => {

//   const onFormLayoutChange = ({ size }: { size: SizeType }) => {
//     setComponentSize(size);
//   };

//   return (
//     <Form
//       labelCol={{ span: 4 }}
//       wrapperCol={{ span: 14 }}
//       layout="horizontal"
//       initialValues={{ size: componentSize }}
//       onValuesChange={onFormLayoutChange}
//       size={componentSize as SizeType}
//       style={{ maxWidth: 600 }}
//     >
//       <Form.Item label="Form Size" name="size">
//         <Radio.Group>
//           <Radio.Button value="small">Small</Radio.Button>
//           <Radio.Button value="default">Default</Radio.Button>
//           <Radio.Button value="large">Large</Radio.Button>
//         </Radio.Group>
//       </Form.Item>
//       <Form.Item label="Input">
//         <Input />
//       </Form.Item>
//       <Form.Item label="Select">
//         <Select>
//           <Select.Option value="demo">Demo</Select.Option>
//         </Select>
//       </Form.Item>
//       <Form.Item label="TreeSelect">
//         <TreeSelect
//           treeData={[
//             { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
//           ]}
//         />
//       </Form.Item>
//       <Form.Item label="Cascader">
//         <Cascader
//           options={[
//             {
//               value: 'zhejiang',
//               label: 'Zhejiang',
//               children: [{ value: 'hangzhou', label: 'Hangzhou' }],
//             },
//           ]}
//         />
//       </Form.Item>
//       <Form.Item label="DatePicker">
//         <DatePicker />
//       </Form.Item>
//       <Form.Item label="InputNumber">
//         <InputNumber />
//       </Form.Item>
//       <Form.Item label="Switch" valuePropName="checked">
//         <Switch />
//       </Form.Item>
//       <Form.Item label="Button">
//         <Button>Button</Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default App;
