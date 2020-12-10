
window.Vue = require('vue');

require('./bootstrap');
require('./components/user');

//support vuex
import Vuex from 'vuex'
Vue.use(Vuex);
import storeData from "./store/user/index";

const store = new Vuex.Store(
    storeData
);

console.log('Hello');
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({

    el: '#app',

    store, //vuex

});
