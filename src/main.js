import { createApp } from 'vue'
import App from './App.vue'
import './common.css'
import router from './router/index'
import './assets/lib/amfe-flexible.js';

const app = createApp(App);
app.use(router);
app.mount('#app');
