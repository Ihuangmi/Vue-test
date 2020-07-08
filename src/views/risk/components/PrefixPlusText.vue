<template>
  <div>
    <el-table-column  v-bind="colConfig">
      <template v-slot="{row}">
          <i class="el-icon-user-solid"></i>
          <a >{{row.name}}</a>
      </template>
    </el-table-column>
  </div>
</template>

<script>
export default {
  props: ["colConfig"]
};
</script>