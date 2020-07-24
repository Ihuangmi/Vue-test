<template>
  <div v-show="!item.hiden">
    <el-submenu v-if="item.children && item.children.length>1" :index="item.redirect||item.path">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.meta.title}}</span>
      </template>
      <app-link v-for="route in item.children" :key="route.path" :item="route" :base-path="item.path" />
    </el-submenu>

    <router-link v-else :to="resolvePath(item.path)" append>
      <!-- <router-link v-else :to="item.path"> -->
      <el-menu-item :index="resolvePath(item.redirect || item.path)">
        <div class="menu-item">
          <i class="el-icon-menu"></i>
          <!-- <img :src="item.icon" class="icon" /> -->
          <span slot="title">{{item.meta.title}}</span>
        </div>
      </el-menu-item>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AppLink",
  props: {
    item: Object,
    basePath: String
  },
  created() {
    // console.log(`process.env.NODE_ENV=`, process.env.NODE_ENV);
  },
  methods: {
    resolvePath(routePath) {
      const path = require("path");
      const url = path.resolve(this.basePath, routePath);
      // console.log('***************')
      // console.log(`this.basePath=`, this.basePath)
      // console.log(`routePath=`, routePath)
      // console.log(`url=`, url)
      // console.log('***************')

      return url;
    }
  }
};
</script>
<style lang="less" scoped>
// .menu-item{
// padding: 10px;
// text-align: center;
// }
// .icon {
//   width: 40px;
//   height: 40px;
// }
// .el-menu-item,
// .el-submenu__title {
//   height: 70px;
//   line-height: 25px;
// }
// .el-submenu /deep/ .el-submenu__title {
//   height: 70px;
//   line-height: 25px;
// }
</style>