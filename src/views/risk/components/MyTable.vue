<template>
  <div>
    <el-table :data="data" border>
      <template v-for="colConfig in colConfigs">
        <slot v-if="colConfig.slot" :name="colConfig.slot" :col-config="colConfig"></slot>
        <component
          v-else-if="colConfig.component"
          :is="colConfig.component"
          :col-config="colConfig"
          :key="colConfig.prop+'2'"
        ></component>
        <!-- <span v-else>{{row[colConfig.prop]}}</span> -->
        <el-table-column v-bind="colConfig" :key="colConfig.prop"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "MyTable",
  props: ["colConfigs", "data"]
};
</script>