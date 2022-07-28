<template>
  <div
    v-if="!item.meta || !item.meta.hidden"
    :class="[
      isCollapse ? 'simple-mode' : 'full-mode',
      { 'first-level': isFirstLevel },
    ]"
  >
    <template v-if="theOnlyOneChild && !theOnlyOneChild.children">
      <el-menu-item
        @click="clickMenu(theOnlyOneChild)"
        :index="resolvePath(theOnlyOneChild.path)"
        :class="{ 'submenu-title-noDropdown': isFirstLevel }"
      >
        <svg-icon
          v-if="theOnlyOneChild.meta.icon"
          :name="theOnlyOneChild.meta.icon"
        />
        <span v-if="theOnlyOneChild.meta.title">{{
          // theOnlyOneChild.meta.title
          resolvePath(theOnlyOneChild.path)
        }}</span>
      </el-menu-item>
    </template>
    <el-sub-menu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template v-slot:title>
        <svg-icon v-if="item.meta && item.meta.icon" :name="item.meta.icon" />
        <span v-if="item.meta && item.meta.title">
          <!--          {{  item.meta.title }}-->
          {{ resolvePath(item.path) }}
        </span>
      </template>
      <template v-if="item.children">
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :is-collapse="isCollapse"
          :is-first-level="false"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />
      </template>
    </el-sub-menu>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, ref, toRefs } from "vue";
import { isExternal } from "@/assets/utils/validate";
import path from "path";
import { useStore } from "vuex";
const isCollapse = ref(false);
const isFirstLevel = ref(false);

const props = defineProps({
  item: Object,
  basePath: String,
});
const store = useStore();
const clickMenu = (val: any) => {
  console.log(store);
  store.commit("pushtags", val);
};

const { item, basePath } = toRefs(props);
// let basePath = ''
// console.log(basePath?.value, 'path:____')
// if (item?.value?.children) {
//   basePath = item?.value?.path
//   console.log(item?.value, 'item————————', basePath, 'basePath')
// }

// console.log('------')
// console.log(props)

// console.log(item?.value)
// console.log(item.children)
const resolvePath = (routePath: string) => {
  // if (isExternal(routePath)) {
  //   return routePath
  // }
  // if (isExternal(basePath)) {
  //   return basePath
  // }
  return path.resolve(basePath?.value, routePath);
};
const showingChildNumber = () => {
  if (item?.value?.children) {
    const showingChildren = item?.value?.children.filter((its: any) => {
      return !(its?.meta && its?.meta.hidden);
    });
    return showingChildren.length;
  }
  return 0;
};
const theOnlyOneChild = computed(() => {
  if (showingChildNumber() > 1) {
    return null;
  }

  if (item?.value?.children) {
    for (const child of item?.value?.children) {
      if (!child.meta || !child.meta.hidden) {
        return child;
      }
    }
  }
  // console.log({ ...item?.value, path: '' })
  // If there is no children, return itself with path removed,
  // because this.basePath already conatins item's path information
  // return { ...item?.value, path: '' }
  return { ...item?.value, path: "" };
});
</script>

<style lang="scss">
@import "@/style/index.scss";
.el-submenu.is-active > .el-submenu__title {
  color: $subMenuActiveText !important;
}

.full-mode {
  .nest-menu .el-submenu > .el-submenu__title,
  .el-submenu .el-menu-item {
    min-width: $sideBarWidth !important;
    background-color: $subMenuBg !important;

    &:hover {
      background-color: $subMenuHover !important;
    }
  }
}

.simple-mode {
  &.first-level {
    .submenu-title-noDropdown {
      padding: 0 !important;
      position: relative;

      .el-tooltip {
        padding: 0 !important;
      }
    }

    .el-submenu {
      overflow: hidden;

      & > .el-submenu__title {
        padding: 0px !important;

        .el-submenu__icon-arrow {
          width: 10px;
          display: none;
        }

        & > span {
          visibility: hidden;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.svg-icon {
  margin-right: 16px;
}

.simple-mode {
  .svg-icon {
    margin-left: 20px;
  }
}
</style>
