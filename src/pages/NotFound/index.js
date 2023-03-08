import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { appRoute } from '../../const/routes.const';

function NotFound() {
    return (
        <div style={{ height: '200px', padding: '50px' }}>
            <h2>EROR:404 -- Xin lỗi, trang bạn đang tìm kiếm không tồn tại!</h2>
            <Link to={appRoute.home}>
                <Button>Quay lại Trang Chủ</Button>
            </Link>
        </div>
    );
}
export default NotFound;
