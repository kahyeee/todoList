import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' //引入bs css套件
import '@/assets/todo-list.css'; //引入自己的css檔案，自己的css檔案存在assets資料夾中

import "bootstrap/dist/js/bootstrap.js" //引入bs js套件

createApp(App).use(router).mount('#app')
