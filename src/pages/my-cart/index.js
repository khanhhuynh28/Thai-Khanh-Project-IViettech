import React from 'react';
import { Manage } from '../../components/header/components/Manage/Manage';
import './style.scss';
function ManagerPosts() {
    return (
        <div className="container-home">
            <h2>Giỏ Hàng Quản Lý Page</h2>
            <Manage />
        </div>
    );
}
export default ManagerPosts;
