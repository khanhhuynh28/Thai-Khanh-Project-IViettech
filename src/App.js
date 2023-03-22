import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { appRoute } from './const/routes.const';
import ProductDetail from './components/Product/product-detail/ProductDetail';
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
import { LayoutAdmin } from './components/admin/layout/LayoutAdmin';
import { Overview } from './components/admin/pages/overview/Overview';
import { Client } from './components/admin/pages/client/Client';
import { OrderAdmin } from './components/admin/pages/order/OrderAdmin';
import { ProductList } from './components/admin/pages/product/ProductList';
import Admin from './components/admin/Admin';


function App() {
    return (

        <BrowserRouter >
            <div className="App">
                <div className='header'>
                    <Header />
                </div>
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
                        <Route path={appRoute.admin} element={<Admin />} />
                        <Route path={appRoute.overview} element={<Overview />} />
                        <Route path={appRoute.client} element={<Client />} />
                        <Route path={appRoute.orderAdmin} element={<OrderAdmin />} />
                        <Route path={appRoute.productList} element={<ProductList />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
