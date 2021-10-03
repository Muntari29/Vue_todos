import { createApp } from 'vue'
import App from '~/App'
import store from '~/store/index'

const app = createApp(App)
app.use(store)
app.mount('#app')
