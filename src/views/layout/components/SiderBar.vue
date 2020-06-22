<template>
  <div id="SideBar">
    <div class="menutop">
      <img src="@/assets/syslogo.png" alt="logo" style="width: 150px; height: 50px" />
      <br />
      <br />
      <div class="langs">
        <div>选择语言</div>
        <el-select v-model="currentlang" placeholder="请选择" @change="langChange">
          <el-option
            v-for="item in langs"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div>
        <!-- <h4>hellow</h4> -->
      </div>
    </div>
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      background-color="#fff"
      text-color="black"
      active-text-color="#33CC99"
      :unique-opened="true"
    >
      <app-link v-for="route in routes" :key="route.name" :item="route" />
    </el-menu>
  </div>
</template>

<script>
import routes from "@/router";
import AppLink from "./AppLink";
import { setCookie } from "@/utils";

export default {
  name: "SideBar",
  components: { AppLink },
  created() {
    this.currentlang = this.$i18n.locale
  },
  data() {
    return {
      currentlang: "zh",
      langs: [
        { label: "中文", value: "zh" },
        { label: "English", value: "en" }
      ]
    };
  },
  computed: {
    routes() {
      return routes.options.routes;
    },
    active() {
      // console.log(this.$route.path);
      return this.$route.path;
    }
  },
  methods: {
    langChange() {
      this.$i18n.locale = this.currentlang;
      setCookie("PLAY_LANG", this.currentlang);
    },
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