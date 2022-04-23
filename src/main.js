import { createApp } from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import axios from "axios";


createApp(VueResource)
createApp(axios)

createApp(App).mount('#app')
