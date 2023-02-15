import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import "./style.scss";

function DefaultLayout({ children }) {
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
