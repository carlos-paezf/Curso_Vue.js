import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/botones',
        name: 'Botones',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "botones" */ '../views/Botones.vue')
    },
    {
        path: '/cards',
        name: 'Cards',
        component: () =>
            import ( /* webpackChunkName: "cards" */ '../views/Cards.vue')
    },
    {
        path: '/tareas',
        name: 'Tareas',
        component: () =>
            import ( /* webpackChunkName: "tareas" */ '../views/Tareas-CRUD.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router