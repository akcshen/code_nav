<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup>
// 此处用的是vue3中的setup函数语法糖
import { defineProps, computed } from 'vue'
const props = defineProps({
  // 接收props参数
  name: {
    type: String,
    required: true
  }
})

const iconName = computed(() => {
  // computed计算属性
  return `#icon-${props.name}`
  // return `#icon-${props.icon}`
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin: 0 0.5em;
}
</style>
