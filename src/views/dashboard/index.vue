<template>
  <div class="about">
    <div class="textstork">积分兑换的现金红包</div>
  </div>
</template>
<script lang="ts" setup>
const myCv = [];
type callbackType = () => void;
function loadScript(url: string, callback: callbackType) {
  // 1. 创建一个script标签
  var script = document.createElement("script");
  // 4. 调用callback
  // 监听script的下载的状态 当状态变为下载完成后 再执行callback
  // 处理ie的兼容
  script.onload = function () {
    callback();
  };
  // if (script.readyState) {
  //   script.onchangereadystate = function () {
  //     // 判断script是否已经下载完成
  //     if (script.readyState == "complate" || script.readyState == "loaded") {
  //       callback();
  //     }
  //   };
  // } else {
  //   script.onload = function () {
  //     callback();
  //   };
  // }
  // 2. 给script标签添加src 引入一个js文件
  script.src = url;
  // 3. 追加到body
  document.body.appendChild(script);
}
setTimeout(() => {
  loadScript("https://static.zixunkankan.xyz/image628/md5.js", () => {
    console.log(9988);
  });
}, 3000);
</script>
<style>
.textstork {
  font-size: 20px;
  color: transparent;
  -webkit-text-fill-color: #fff;
  /* //文字色 */
  -webkit-text-stroke: 3px blue;
  /* //边框色 */
}
</style>
