
<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  provide() {
    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true //控制视图是否显示的变量
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function() {
        this.isRouterAlive = true; //再打开
      });
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  padding: 0;
  margin: 0;
  font-size: small;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
input:focus {
  outline: none;
}

// 布局
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

// 表格
body .el-table th.gutter {
  display: table-cell !important;
}
.el-table__header th,
.el-table__header tr {
  color: black;
  font-size: small;
}

.el-table__body td,
.el-table__body th {
  font-size: small !important;
}

// home页面的card
.el-card__header {
  color: #fff;
  background-color: #d12d2c;
  padding: 5px 10px !important;
}
.el-card__body {
  padding: 10px !important;
}
</style>
