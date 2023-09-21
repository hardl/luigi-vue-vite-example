import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import './style.css'
import App from './App.vue'
import LuigiCore from './components/LuigiCore.vue'
import HelloWorld from './components/HelloWorld.vue'

const routes = [
    { path: '/', component: LuigiCore },
    { path: '/hello', component: HelloWorld },
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

const app = createApp(App)
app.use(router)
app.mount('body')

