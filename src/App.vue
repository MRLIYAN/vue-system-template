<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin:0; padding:0; 
  -ms-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html,body{
  width:100%; height: 100%;
}
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: PingFang SC,Arial,Microsoft YaHei,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%; 
  height: 100%;
}

</style>
