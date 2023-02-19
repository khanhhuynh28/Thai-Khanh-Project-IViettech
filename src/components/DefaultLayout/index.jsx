import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';

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
