import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"
import components from "./components/UI"
import store from './store/index.js'



const app = createApp(App)

components.forEach(comp => {
    app.component(comp.name,comp)
});

app
    .use(store)
    .use(router)
    .mount('#app')
