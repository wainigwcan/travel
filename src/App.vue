<template>
  <div id="app">
    <!-- exclude="detail" 不做缓存处理 的组件 -->
    <keep-alive> 
      <router-view/>
    </keep-alive>
  </div>
</template>

<style scoped>
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>
