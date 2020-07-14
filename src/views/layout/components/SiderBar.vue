<template>
  <div id="SideBar">
    <!-- <div class="menutop">
      <img src="@/assets/syslogo.png" alt="logo" style="width: 150px; height: 50px" />
      <br />
      <br />
      <div class="langs">
        <div>选择语言</div>
        <el-select v-model="currentlang" placeholder="请选择" @change="langChange">
          <el-option
            v-for="lang in languages"
            :key="lang.value"
            :label="lang.label"
            :value="lang.value"
          ></el-option>
        </el-select>
      </div>
    </div>-->
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      background-color="#fff"
      text-color="black"
      active-text-color="#33CC99"
      :unique-opened="true"
    >
      <app-link
        v-for="route in routesItem"
        :key="route.name"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script>
import routes from "@/router";
import AppLink from "./AppLink";

export default {
  name: "SideBar",
  components: { AppLink },
  data() {
    return {
      currentlang: "zh",
      languages: [
        { label: "中文", value: "zh" },
        { label: "English", value: "en" }
      ]
    };
  },
  computed: {
    routesItem() {
      console.log(`routes.options.routes=`, routes.options.routes);
      return routes.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      console.log(`activeMenu=`, path);
      return path;
    }
  },
  methods: {
    langChange() {
      this.$i18n.locale = this.currentlang;
      sessionStorage.setItem("PLAY_LANG", this.currentlang);
    }
  }
};
</script>
<style lang="less" scoped>
.menutop {
  padding: 20px;

  .langs {
    display: flex;
  }
}
</style>