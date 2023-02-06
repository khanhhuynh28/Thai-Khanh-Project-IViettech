import Home from '../pages/home';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import Post from '../pages/Post';
import NotFound from '../pages/NotFound';

//Public Routes
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/post', component: Post, layout: null },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/*', component: NotFound },
    
];
//Private Routes
export const privateRoutes = [];
