import Home from '../pages/home';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import Post from '../pages/Post';
import NotFound from '../pages/NotFound';
import ManagerPosts from '../pages/my-cart';

//Public Routes
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/post', component: Post, layout: null },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/manager-posts', component: ManagerPosts },
    { path: '/*', component: NotFound },
];
//Private Routes
export const privateRoutes = [];
