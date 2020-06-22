<template>
  <div v-show="!item.hiden">
    <el-submenu v-if="item.children && item.children.length>1" :index="item.redirect||item.path">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.meta.title}}</span>
      </template>
      <app-link v-for="route in item.children" :key="route.path" :item="route" />
    </el-submenu>

    <router-link v-else :to="item.path">
      <el-menu-item :index="item.redirect||item.path">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.meta.title}}</span>
      </el-menu-item>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AppLink",
  props: {
    item: Object
  },
  created() {
    // console.log(this.item);
  }
};
</script>