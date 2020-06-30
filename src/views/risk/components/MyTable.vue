<template>
  <div>
    <!-- <el-table :data="data" border>
      <el-table-column
        v-for="(colConfig, index) in colConfigs"
        :key="index"
        v-bind="colConfig"
      >
        <template>
          <slot v-if="colConfig.slot" :name="colConfig.slot">
            <el-button type='danger' size="mini">查看</el-button>
          </slot>
        </template>
      </el-table-column>
    </el-table>-->
    <el-table :data="data" border>
      <el-table-column v-bind="colConfig" v-for="(colConfig, index) in colConfigs" :key="index">
        <slot v-if="colConfig.tag" name="colConfig" :row="colConfig"></slot>

        <slot v-if="colConfig.solt" name="edit" :row="colConfig"></slot>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "MyTable",
  props: ["colConfigs", "data"]
};
</script>