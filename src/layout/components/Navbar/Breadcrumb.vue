<template>
<!--  <div>122</div>-->
  <el-breadcrumb
    class="app-breadcrumb"
    separator="/"
  >
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbs"
        :key="item.path"
      >
        <span
          v-if="item.redirect === 'noredirect' || index === breadcrumbs.length-1"
          class="no-redirect"
        >{{ item.meta.title }}</span>
        <a
          v-else
          @click.prevent="handleLink(item)"
        >{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { watch, ref, reactive } from 'vue'
import { RouteRecordRaw, useRouter, useRoute, RouteLocationMatched } from 'vue-router'
const router = useRouter()
const route = useRoute()
// const breadcrumbs: Array<RouteRecordRaw> = ref([])
const breadcrumbs = reactive([])
watch(
  () => router.currentRoute.value.path,
  (n, o) => {
    // console.log(n, 'n')
    // const i = routerParams.findIndex((it) => it === n);
    // if (i !== -1) {
    //   currentTab.value = i.toString();
    //   sessionStorage.setItem("tabindex", i.toString());
    // }
    getBreadcrumb()
  }
)

const getBreadcrumb = () => {
  breadcrumbs.length = 0
  let mached = route.matched.filter((item) => {
    // console.log(item.meta)
    return item?.meta?.title
  })
  // item.meta.title);
  // console.log(route.matched, mached)
  // console.log(mached, 'mached')
  // 第一个路径如果不是首页，需要在匹配路径前面拼接一个首页
  const first = mached[0]
  const homePath:RouteLocationMatched[] = [{ path: '/', meta: { title: '首页' } }]
  if (first.path !== '/dashboard') {
    mached = homePath.concat(mached)
  }
  // console.log(mached, 'mached')
  const ss = mached.filter((item:any) => {
    return item.meta && item.meta.title && item.meta.breadcrumb !== false
  })
  Object.assign(breadcrumbs, ss)
  // breadcrumbs = ss
  // console.log(ss, 'ss')
}

getBreadcrumb()

//
// private getBreadcrumb () {
//   let matched = this.$route.matched.filter((item) => item.meta && item.meta.title)
//   const first = matched[0]
//   if (!this.isDashboard(first)) {
//     matched = [{ path: '/dashboard', meta: { title: 'dashboard' } } as RouteRecord].concat(matched)
//   }
//   this.breadcrumbs = matched.filter((item) => {
//     return item.meta && item.meta.title && item.meta.breadcrumb !== false
//   })
// }
//
// private isDashboard (route: RouteRecord) {
//   const name = route && route.name
//   if (!name) {
//     return false
//   }
//   return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
// }
//
// private pathCompile (path: string) {
//   // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
//   const { params } = this.$route
//   const toPath = compile(path)
//   return toPath(params)
// }
//
// private handleLink (item: any) {
//   const { redirect, path } = item
//   if (redirect) {
//     this.$router.push(redirect).catch(err => {
//       console.warn(err)
//     })
//     return
//   }
//   this.$router.push(this.pathCompile(path)).catch(err => {
//     console.warn(err)
//   })
// }

</script>

<style lang="scss" scoped>
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}

.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  width: 700px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
