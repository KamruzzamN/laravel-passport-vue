import Home from './pages/Index';
import Users from './pages/Users';
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
        path: '/users',
        name: 'users',
        component: Users,
        meta:{
            requiresAuth: true
        }
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
        meta:{
            requiresAuth: false
        }
    },

    {
        path: '/logout',
        name: 'logout',
        component: Logout,
        meta:{
            requiresAuth: true
        }
    },

    {
        path: '/register',
        name: 'register',
        component: Register,
        meta:{
            requiresAuth: false
        }
    }
];

export default routes;