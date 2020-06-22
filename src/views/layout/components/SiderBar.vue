<template>
  <div id="SideBar">
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
    >
      <app-link v-for="route in routes" :key="route.path" :item="route" />
    </el-menu>
  </div>
</template>

<script>
import routes from "@/router";
import AppLink from "./AppLink";

export default {
  name: "SideBar",
  components: { AppLink },
  created() {
    console.log(`routes.options.routes=`, routes.options.routes);
  },
  computed: {
    routes() {
      return routes.options.routes;
    },
    active() {
      console.log(this.$route.path);
      return this.$route.path;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.el-menu-vertical-demo {
  /* min-height: 600px; */
}
</style>