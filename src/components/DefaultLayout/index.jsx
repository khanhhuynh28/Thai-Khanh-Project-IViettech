import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
