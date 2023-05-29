import { createApp } from 'vue'
import type {App} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import root from './App.vue'
const app:App = createApp(root)
app.use(ElementPlus)
app.mount('#app')
