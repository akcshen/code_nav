<template>
  <div class="home">
    <!--    <h1>layout1</h1>-->
    <slider-bar class="sidebar-container"></slider-bar>
    <div class="main-container">
      <nav-bar></nav-bar>
      <tags-view></tags-view>
      <!-- <router-view></router-view> -->
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SliderBar from "./components/Sliderbar/index.vue";
import NavBar from "./components/Navbar/index.vue";
import TagsView from "@/layout/components/TagsView/index.vue";
import AppMain from "@/layout/components/AppMain.vue";
import { Options, Vue } from "vue-class-component";

// console.log(SliderBar)
// import sliderBar from '@/layout/index.vue' // @ is an alias to /src

// import SliderBar from './components/Sliderbar/index'
// console.log(sliderBar)
</script>

<style lang="scss" scoped>
.sidebar-container {
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  width: $sideBarWidth;
  height: 100%;
}
.main-container {
  width: 100%;
  margin-left: $sideBarWidth;
  transition: margin-left 0.28s;
}
</style>
