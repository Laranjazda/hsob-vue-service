import { createApp } from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import axios from "axios";
import {createRouter, createWebHistory} from "vue-router";
import { routes } from "./routes"

createApp(VueResource)
createApp(axios)

// const router = new VueRouter({ routes: routes })
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

createApp(App).use(router).mount('#app')
