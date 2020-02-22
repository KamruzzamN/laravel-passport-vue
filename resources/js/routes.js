import Home from './pages/Index';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta:{
            requiresAuth: true
        }
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
        meta:{
            requiresGuest: true
        }
    },

    {
        path: '/logout',
        name: 'logout',
        component: Logout
    },

    {
        path: '/register',
        name: 'register',
        component: Register,
        meta:{
            requiresGuest: true
        }
    }
];

export default routes;