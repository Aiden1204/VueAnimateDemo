import Vue from 'vue'
import Router from 'vue-router'
import A from './views/A.vue'
import B from './views/B.vue'
import C from './views/C.vue'
import D from './views/D.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/A',
        name: 'A',
        component: A
    },
    {
        path: '/B',
        name: 'B',
        component: B
    },
    {
        path: '/C',
        name: 'C',
        component: C
    },
    {
        path: '/D',
        name: 'D',
        component: D
    }
  ]
})
