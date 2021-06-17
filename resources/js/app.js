/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 window.Vue = require('vue');
 import VueRouter from 'vue-router'
 import routes from './routes'
 import Chart from 'chart.js'
 import VueChartkick from 'vue-chartkick'
 import VueSweetalert2 from 'vue-sweetalert2';
 import 'sweetalert2/dist/sweetalert2.min.css';
 import Vue2Editor from "vue2-editor";
 import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
 import 'leaflet/dist/leaflet.css';
 
 Vue.component('l-map', LMap);
 Vue.component('l-tile-layer', LTileLayer);
 Vue.component('l-marker', LMarker);
 Vue.use(Vue2Editor);
 Vue.use(VueSweetalert2);
 Vue.use(VueRouter)
 Vue.use(VueChartkick)
 Vue.use(Chartkick.use(Chart)) 

 const router = new VueRouter(routes)
 
 function loggedIn(){
     return localStorage.getItem('token')
 }
 
 router.beforeEach((to, from, next) => {
     if (to.matched.some(record => record.meta.requiresAuth)) {
         // this route requires auth, check if logged in
         // if not, redirect to login page.
         if (!loggedIn()) {
             next({
             path: '/login',
             query: { redirect: to.fullPath }
             })
         } else {
             next()
         }
     } else if(to.matched.some(record => record.meta.guest)) {
         if (loggedIn()) {
             next({
             path: '/',
             query: { redirect: to.fullPath }
             })
         } else {
             next()
         }
     } else {
         next() // make sure to always call next()!
     }
 })
 
 /**
  * The following block of code may be used to automatically register your
  * Vue components. It will recursively scan this directory for the Vue
  * components and automatically register them with their "basename".
  *
  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
  */
 
 // const files = require.context('./', true, /\.vue$/i)
 // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
 
 // Vue.component('example-component', require('./components/ExampleComponent.vue').default);
 
 /**
  * Next, we will create a fresh Vue application instance and attach it to
  * the page. Then, you may begin adding components to this application
  * or customize the JavaScript scaffolding to fit your unique needs.
  */
 
 const app = new Vue({
     el: '#app',
     router,
 });