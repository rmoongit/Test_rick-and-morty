import './assets/main.css'
import {createApp} from 'vue'
import McvApp from '@/App.vue'
import router from './router'

createApp(McvApp).use(router).mount('#app')
