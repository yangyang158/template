import Vue from 'vue'
import Index from './index.vue'
import router from './router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
let app = document.createElement('div')
app.setAttribute('id', 'app')
document.body.appendChild(app)
new Vue({
    "el": '#app',
    router,
    "render": (h) => h(Index)
    // components: { Index },
    // template: '<Index />'
})