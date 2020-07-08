<template>
  <el-table
    :data="tableData"
    v-loading="isLoad"
    stripe
    v-bind="tableConfig"
    @sort-change="changeSort"
    @selection-change="changeSelectRows"
  >
    <template v-for="(colConfig, index) in colConfigs">
      <!-- 循环每一项 有slot的单独渲染 -->
      <slot v-if="colConfig.slot" :name="colConfig.slot" :col-config="colConfig"></slot>

      <!-- 有component的单独渲染 -->
      <component
        v-else-if="colConfig.component"
        :is="colConfig.component"
        :col-config="colConfig"
        :key="index"
      ></component>

      <!-- 普通项 -->
      <el-table-column v-else v-bind="colConfig" :key="index"></el-table-column>
    </template>
  </el-table>
</template>
 

<script>
export default {
  name: "enhanced-table",
  props: {
    colConfigs: Array,
    tableData: Array,
    tableConfig: Object,
    isLoad: Boolean
  },
  // created(){
  //   console.log(this.colConfigs)
  // },
  methods: {
    // 提前先定义排序事件，需要用的时候直接在父组件使用
    changeSort({ column, prop, order }) {
      this.$emit("sort-change", column, prop, order);
    },
    // 提前先定义排序事件，需要用的时候直接在父组件使用
    changeSelectRows(val) {
      this.$emit("selection-change", val);
    }
  }
};
</script>
