<template>
  <div>
    <el-table-column  v-bind="colConfig">
      <template v-slot="{row}">
        <el-button size="mini">
          <i class="el-icon-user-solid"></i>
          {{row.date}}
        </el-button>
      </template>
    </el-table-column>
  </div>
</template>

<script>
export default {
  props: ["colConfig"]
};
</script>