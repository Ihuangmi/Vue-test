<template>
  <div id="userinfo">
    <div class="search-Box">
      <el-input placeholder="请输入关键字" icon="search" class="search" v-model="search"></el-input>
    </div>
    <br />
    <el-table
      border
      :data="tables"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="account_number" label="账号"></el-table-column>
      <el-table-column prop="subscription" label="订阅费"></el-table-column>
      <el-table-column prop="signal_account" label="跟单账号"></el-table-column>
      <el-table-column prop="adding_date" label="添加时间" sortable></el-table-column>
      <el-table-column prop="due_to" label="到期时间" sortable></el-table-column>
      <el-table-column prop="type" label="跟单类型" sortable></el-table-column>
      <el-table-column prop="size" label="跟单大小"></el-table-column>
      <el-table-column prop="signal_belongs" label="signal belongs"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "userinfo",
  data() {
    return {
      search: "",
      tableData: [
        {
          username: "jack",
          account_number: "MT5",
          subscription: "rgtrdvdf",
          signal_account: "121",
          adding_date: "no",
          due_to: "no",
          type: "no",
          size: "no",
          signal_belongs: "no"
        },
        {
          username: "sunnee",
          account_number: "MT5",
          subscription: "rgtrdvdf",
          signal_account: "121",
          adding_date: "no",
          due_to: "no",
          type: "no",
          size: "no",
          signal_belongs: "no"
        }
      ]
    };
  },
  computed: {
    //筛选
    tables() {
      var search = this.search;
      if (search) {
        return this.tableData.filter(function(dataNews) {
          return Object.keys(dataNews).some(function(key) {
            return (
              String(dataNews[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
      return this.tableData;
    }
  }
};
</script>

<style lang="less" scoped>
#userinfo {
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  box-shadow: 0 5px 10px 5px rgba(110, 122, 139, 0.15);
}
</style>
