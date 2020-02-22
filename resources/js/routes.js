import Home from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },

    {
        path: '/login',
        name: 'login',
        component: Login
    },

    {
        path: '/register',
        name: 'register',
        component: Register
    }
];

export default routes;