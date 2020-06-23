import Vue from 'vue'
import Index from './index.vue'
import router from './router.js'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
let app = document.createElement('div')
app.setAttribute('id', 'app')
document.body.appendChild(app)
new Vue({
    // 指定vue实例的挂载目标
    "el": '#app',
    router,
    store,
    "render": (h) => h(Index)
    // components: { Index },
    // template: '<Index />'
})