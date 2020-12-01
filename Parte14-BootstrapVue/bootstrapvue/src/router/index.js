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
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/grid',
        name: 'Grid',
        component: () =>
            import ( /* webpackChunkName: "grid" */ '../views/Grid.vue')
    },
    {
        path: '/cards',
        name: 'Cards',
        component: () =>
            import ( /* webpackChunkName: "cards" */ '../views/Cards.vue')
    },
    {
        path: '/form',
        name: 'Form',
        component: () =>
            import ( /* webpackChunkName: "form" */ '../views/Form.vue')
    },
    {
        path: '/form2',
        name: 'Form2',
        component: () =>
            import ( /* webpackChunckName: "form2" */ '../views/Form2.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router