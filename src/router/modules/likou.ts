import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const likouRouter: Array<RouteRecordRaw> = [{
    path: '/likou',
    component: Layout,
    // redirect: 'noredirect',
    name: 'likou',
    meta: {
        title: 'likou',
        icon: 'likou'
    },
    children: [
        {
            path: 'index',
            component: () => import(/* webpackChunkName: "index" */ '@/views/likou/shuati/index.vue'),
            name: 'index',
            meta: { title: 'index' }
        }
    ]
}]

export default likouRouter
