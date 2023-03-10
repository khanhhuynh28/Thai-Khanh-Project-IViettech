import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { appRoute } from './const/routes.const';
import { ProductDetail } from './components/Product/product-detail/ProductDetail';
import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import NotFound from './pages/NotFound';
import Manage from './components/header/components/Manage/Manage';
import Chat from './components/header/components/Chat/Chat';
import { Header } from './components/header/Header';
import ShoppingCart from './components/Product/shopping-cart/ShoppingCart';
import { Order } from './components/Product/order/Order';
import CartItem from './components/Product/cartItem/CartItem';
import DefaultLayout from './assets/DefaultLayout';


function App() {
    return (
        <BrowserRouter >
            <div className="App">
                <Header />
                <div className="content">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Layout = route.layout === null ? Fragment : DefaultLayout;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                        <Route path={appRoute.productDetail} element={<ProductDetail />} />
                        <Route path={appRoute.shoppingCart} element={<ShoppingCart />} />
                        <Route path={appRoute.login} element={<Login />} />
                        <Route path={appRoute.register} element={<Register />} />
                        <Route path={appRoute.notFound} element={<NotFound />} />
                        <Route path={appRoute.manage} element={<Manage />} />
                        <Route path={appRoute.chat} element={<Chat />} />
                        <Route path={appRoute.order} element={<Order />} />
                        <Route path={appRoute.cartItem} element={<CartItem />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
