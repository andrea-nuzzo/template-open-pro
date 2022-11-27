import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import VeeValidatePlugins from "./plugins/VeeValidatePlugins";


import 'aos/dist/aos.css';
import './css/style.css'

const app = createApp(App)
app.use(router)
app.use(VeeValidatePlugins)
app.mount('#app')
