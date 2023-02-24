import Chat from "../components/header/components/Chat/Chat";
import Manage from "../components/header/components/Manage/Manage";
import { Home } from "../pages/home";
import LoginPage from "../pages/Login";
import NotFound from "../pages/NotFound";
import Post from "../pages/Post";
import RegisterPage from "../pages/Register";


//Public Routes
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/post', component: Post, layout: null },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    // { path: '/manager-posts', component: ManagerPost },
    { path: '/*', component: NotFound },
    { path: '/manage', component: Manage },
    { path: '/chat', component: Chat },




];
//Private Routes
export const privateRoutes = [];
