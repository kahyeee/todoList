import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/todo-list.css';

createApp(App).use(router).mount('#app')
