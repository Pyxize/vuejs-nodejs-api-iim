import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from "./store/index"
import { TroisJSVuePlugin } from 'troisjs';

createApp(App).use(router).use(store).use(TroisJSVuePlugin).mount('#app')
