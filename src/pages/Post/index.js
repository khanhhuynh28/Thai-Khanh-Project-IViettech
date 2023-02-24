import PostNews from '../../components/Forms/PostNews';
import { Header } from '../../components/header/Header';
// import Product from '../../components/Product/Product';
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
