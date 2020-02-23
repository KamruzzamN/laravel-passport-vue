require('./bootstrap');

window.Vue = require('vue');

//vuex
import Vuex from 'vuex';
Vue.use(Vuex);
import data from './index';
const store = new Vuex.Store(data);

//v-form
import { Form, HasError, AlertError } from 'vform';
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

//vue spinner
Vue.component('spinner', require('vue-simple-spinner'))

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './routes';
const router = new VueRouter({
    mode: 'history',
    saveScrollPosition: true,
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const currentUser = store.getters.loggedIn;
    if(requiresAuth && !currentUser){
        next({name:'login'});
    }
    else if(to.path == '/login' && currentUser){
        next({name:'home'});
    }
    else{
        next();
    }
})


//app layouts
import AppLayout from './components/AppLayout';
const app = new Vue({
    router,
    store,
    render:(h) => h(AppLayout)
}).$mount('#app');
