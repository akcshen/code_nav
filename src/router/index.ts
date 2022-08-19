import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
// import Layout from '@/layout/Index.vue'
// const nestedRouter = require("./modules/nested")
// console.log(nestedRouter)
const asyncFiles = require.context('./modules', true, /\.ts$/)
let permissionModules: Array<RouteRecordRaw> = []
console.log(asyncFiles, 'asyncFiles')
asyncFiles.keys().forEach((key) => {
  console.log(key)
  if (key === './index.ts') return
  permissionModules = permissionModules.concat(asyncFiles(key).default)
})
console.log(permissionModules, 'permissionModules')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'dashboard',
    component: Layout,
    children: [{
      path: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
      name: 'Dashboard',
      meta: {
        title: 'dashboard',
        icon: 'dashboard',
        affix: true
      }
    }]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [{
      path: 'index',
      name: 'About',
      meta: {
        title: 'guide',
        icon: 'guide',
        noCache: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '../views/About.vue')
    }]

  },
  {
    path: '/components',
    component: Layout,
    redirect: '/components/markdown',
    name: 'ComponentDemo',
    meta: {
      title: 'components',
      icon: 'component'
    },
    children: [{
      path: 'markdown',
      component: () => import(/* webpackChunkName: "markdown" */ '@/views/components-demo/markdown.vue'),
      name: 'markdown',
      meta: {
        title: 'markdown'
        // redirect: 'noredirect'
      }
    }, {
      path: 'mixin',
      component: () => import(/* webpackChunkName: "mixin" */ '@/views/components-demo/mixin.vue'),
      name: 'mixin',
      meta: { title: 'mixin' }
    },
    {
      path: 'htocode',
      component: () => import(/* webpackChunkName: "htocode" */ '@/views/components-demo/h5To2wcode.vue'),
      name: 'htocode',
      meta: { title: 'h5tocode' }
    }]
  },
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    meta: {
      title: 'excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: () => import(/* webpackChunkName: "export-excel" */ '@/views/Excel/index.vue'),
        name: 'ExportExcel',
        meta: { title: 'exportExcel' }
      },
      {
        path: 'upload-excel',
        component: () => import(/* webpackChunkName: "upload-excel" */ '@/views/Excel/upload-excel.vue'),
        name: 'UploadExcel',
        meta: { title: 'uploadExcel' }
      }
    ]
  },
  ...permissionModules
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
