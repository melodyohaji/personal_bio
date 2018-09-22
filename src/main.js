// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { store } from './store.js'
import App from './App'
import router from './router'

const fb = require('./fireBaseConfig.js')


// Firebase init

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'


// handle page reloads
let app
fb.auth.onAuthStateChanged(user => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            components: { App },
            template: '<App/>'
        })
    }
})
