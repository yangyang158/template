import Vue from 'vue'
import Index from './index.vue'
import router from './router.js'

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