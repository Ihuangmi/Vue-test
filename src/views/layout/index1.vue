<template>
  <el-container class="container">
    <!-- 左侧导航栏 -->
    <div class="aside_left">
      <sider-bar></sider-bar>
    </div>
    <!-- End 左侧导航栏 -->

    <!-- 头部信息 -->
    <el-header class="header_top">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
      <!-- <h1>header</h1> -->
    </el-header>
    <!-- End 头部信息 -->
    <el-main class="main_content">
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
// import { SiderBar } from "./components";
import SiderBar from "./components/SiderBar";
export default {
  name: "Layout",
  components: {
    SiderBar
  }
};
</script>

<style lang="less" scoped>
body {
  padding: 0;
  margin: 0;
}
a,
a:hover {
  text-decoration: none;
}

li {
  list-style-type: none;
}

.aside_left {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 101;
  // display: block;
  width: 240px;
  // font-weight: 500;
  // color: #fff;
  background-color: darkcyan;
}
.header_top {
  height: 100px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  padding-left: 250px;
  background-color: #fff;
  box-shadow: 0 5px 5px -5px rgba(23, 23, 24, 0.15);
}
.main_content {
  padding-top: 110px;
  padding-left: 250px;
  background-color: #f5f6fa;
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

