<template>
  <div id="app">
    <!-- <el-row >
      <el-col :span="6">
        <el-menu
          default-active="$router.path"
          class="el-menu-vertical-demo"
          :router="true"
          :unique-opened="true"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="/components">
            <template slot="title">
              <span>导航一</span>
            </template>
            <el-menu-item index="/HelloWorld" :route="{name:'HelloWorld'}">选项1</el-menu-item>
            <el-menu-item index="HelloWorld">选项1</el-menu-item>
            <el-menu-item index="1-3">选项1</el-menu-item>
            <el-menu-item index="1-4">选项1</el-menu-item>
            <el-menu-item index="1-5">选项1</el-menu-item>
            <el-menu-item index="1-6">选项1</el-menu-item>
          </el-submenu>
      </el-menu>
      </el-col>
      <el-col :span="18"><router-view></router-view></el-col>
    </el-row>-->
    
    <router-view></router-view>
  
  </div> 
</template>

<script>
export default {
  name: 'App',
  methods: {
      // handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      // handleClose(key, keyPath) {
      //   console.log(key, keyPath);
      // }
    }
};


</script>

<style>
html,body,#app{

 height: 100%;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
