import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ArcoVue from '@arco-design/web-vue';
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';

import '@arco-design/web-vue/dist/arco.css';
import './assets/global.css'
createApp(App).use(store).use(router).use(ArcoVue).use(ArcoVue).use(ArcoVueIcon).mount('#app')




// const app = createApp(App);
// app.use(ArcoVue);
// app.mount('#app');