import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { appRoute } from '../../const/routes.const';

function NotFound() {
    return (
        <Result
            status="403"
            title="403"
            subTitle="Xin lỗi, trang này không tồn tại."
            extra={<Link to={appRoute.home}><Button style={{ background: "#ff8800" }}>Back Home</Button></Link>}
        />
    );
}
export default NotFound;
