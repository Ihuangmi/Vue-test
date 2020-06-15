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
      <el-table-column prop="nickname" label="昵称"></el-table-column>
      <el-table-column prop="note" label="备注">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="link_accounts" label="关联账户"></el-table-column>
      <el-table-column prop="registration_time" label="注册时间" sortable></el-table-column>
      <el-table-column prop="last_correlation_time" label="最近关联时间" sortable></el-table-column>
      <el-table-column prop="invite_code" label="邀请码"></el-table-column>
      <el-table-column prop="wallet_balance" label="钱包余额" sortable></el-table-column>
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
          username: "Dicken",
          nickname: "cdonald",
          note: "44",
          email: "136",
          link_accounts: "11",
          registration_time: "2222",
          last_correlation_time: "3333",
          invite_code: "666",
          wallet_balance: "2"
        },
        {
          username: "ckerson",
          nickname: "onald",
          note: "58",
          email: "qq",
          link_accounts: "121",
          registration_time: "22222",
          last_correlation_time: "33233",
          invite_code: "666",
          wallet_balance: "1"
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
  },
  methods: {
    handleEdit(index, row) {
      console.log(`index=`, index);
      console.log(`row=`, row);
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
