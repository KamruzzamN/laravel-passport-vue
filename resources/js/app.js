/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

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


//app layouts
import AppLayout from './components/AppLayout';
const app = new Vue({
    router,
    store,
    render:(h) => h(AppLayout)
}).$mount('#app');
