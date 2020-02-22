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
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                name: 'login'
            })
        }
        else {
            next()
        }
    }
    else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (store.getters.loggedIn) {
            next({
                name: 'home'
            })
        }
        else {
            next()
        }
    }
})


//app layouts
import AppLayout from './components/AppLayout';
const app = new Vue({
    router,
    store,
    render:(h) => h(AppLayout)
}).$mount('#app');
