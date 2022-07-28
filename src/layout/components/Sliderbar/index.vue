<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      class="menuclass-demo"
      :default-active="activeMenu"
      :collapse="isCollapse"
      :unique-opened="false"
      :collapse-transition="false"
      mode="vertical"
      @select="changeSelect"
      background-color="#304156"
      text-color="#bfcbd9"
      :router="true"
      active-text-color="#409EFF"
    >
      <slidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
        :is-collapse="isCollapse"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import variables from '@/style/_variables.scss'
import SlidebarItem from '@/layout/components/Sliderbar/SidebarItem.vue'
import { useRouter, useRoute } from 'vue-router'
// console.log(SlidebarItem)
// console.log(variables)
// import  from "@/style/_"
const router = useRouter()
const route = useRoute()
// console.log(1)
const routes = ref(router.options.routes)
// console.log(router.options.routes)
// console.log(routes)
const activeMenu = ref('')
// activeMenu.value = routes.value?.[0].path
const isCollapse = ref(false)
const menuActiveTextColor = () => {
  console.log(variables.menuActiveText, '111')
  return variables.menuActiveText
}
const changeSelect = (e) => {
  console.log(e)
}
// const routes = () => {
//
// }
</script>
<style lang="scss">
//@import "@/style/index.scss";
.scrollbar-wrapper {
  /*width: 100px;*/
  width: $sideBarWidth;
  background-color:#999999;
}
.menuclass-demo {
  background-color:$menuBg;
  text-color:$menuText;
  active-text-color:$menuActiveText;
  --active-color:$menuActiveText!important;
  --text-color:#999999;
  --bg-color:$menuBg;
}
div {
  //background-color: $menuActiveText;
}
</style>
