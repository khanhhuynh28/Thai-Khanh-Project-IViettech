import { Footer } from 'antd/es/layout/layout';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/header/Header';
import './style.scss';

function DefaultLayout(props) {
    const { children } = props;
    return (
        <div>
            <Header />
            <div className="containerContent">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
