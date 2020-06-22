<template>
  <el-container>
    <el-aside class="aside">
      <sider-bar></sider-bar>
    </el-aside>
    <el-container>
      <el-header class="header">
        <h1>sss</h1>
      </el-header>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SiderBar from "./components/SiderBar";
export default {
  name: "Layout",
  components: {
    SiderBar
  }
};
</script>

<style lang="less" scoped>
.aside {
  // position: fixed;
  top: 0;
  bottom: 0;
  z-index: 101;
  // display: block;
  width: 240px !important;
  // font-weight: 500;
  // color: #fff;
  background-color: darkcyan;
}
.header {
  height: 100px !important;
  border-bottom: 2px solid darkcyan;
  // position: fixed;
  // top: 0;
  // right: 0;
  // left: 0;
  // z-index: 100;
  // padding-left: 250px;
}

.main {
  padding-top: 100px;
  // padding-left: 250px;
  background-color: burlywood;
}
</style>

