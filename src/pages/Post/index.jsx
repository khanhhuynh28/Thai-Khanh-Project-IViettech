import React from 'react';
import PostNews from '../../components/Forms/PostNews';
import { Header } from '../../components/header/Header';
import './style.scss';

function Post() {
    return (
        <div className="post-news-container">
            <Header />
            <PostNews />
        </div>
    );
}
export default Post;
