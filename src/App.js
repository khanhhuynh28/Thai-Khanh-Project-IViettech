import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DefaultLayout from './components/DefaultLayout';
import { publicRoutes } from './routes';
// import { Header } from './components/Header/Header';
// import { DatePicker } from 'antd';
// import { Layout } from './components/Layout/HomeLayout';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
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
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
{
    /* <div className="App">
  <Header />
  <Layout />
</div>; */
}
