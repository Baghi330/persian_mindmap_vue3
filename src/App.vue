<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  --app-font-family: Avenir, Helvetica, Arial, sans-serif;
}
/* فونت و متغیرهای مخصوص زبان فارسی */
html[lang='fa'] {
  --app-font-family: 'Vazirmatn', Tahoma, sans-serif;
  --el-font-family: 'Vazirmatn', Tahoma, sans-serif;
}
#app {
  font-family: var(--app-font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
