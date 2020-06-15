<template>
  <div id="userinfo">
    <!-- 搜索 -->
    <div class="search-Box">
      <el-input placeholder="请输入关键字" icon="search" class="search" v-model="search"></el-input>
    </div>
    <el-table
      :data="tables"
      :span-method="arraySpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="nickname" label="昵称"></el-table-column>
      <el-table-column prop="platform" label="平台类型" sortable></el-table-column>
      <el-table-column prop="server" label="服务器"></el-table-column>
      <el-table-column prop="account" label="账号"></el-table-column>
      <el-table-column prop="ifshow" label="是否展示" sortable></el-table-column>
      <el-table-column prop="main_show" label="主展示" sortable></el-table-column>
    </el-table>
    <br />
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
          nickname: "jj",
          count: [
            {
              platform: "MT5",
              server: "fairtrading global-asia",
              account: "778***",
              ifshow: "yes",
              main_show: "no"
            },
            {
              platform: "MT4",
              server: "fairtrading global-asia",
              account: "778***",
              ifshow: "yes",
              main_show: "no"
            },
            {
              platform: "MT4",
              server: "fairtrading global-asia",
              account: "778***",
              ifshow: "yes",
              main_show: "no"
            },
            {
              platform: "MT4",
              server: "fairtrading global-asia",
              account: "778***",
              ifshow: "yes",
              main_show: "no"
            }
          ]
        },
        {
          username: "sunnee",
          nickname: "妮妮",
          count: [
            {
              platform: "MT5",
              server: "rgtrdvdf",
              account: "121",
              ifshow: "no",
              main_show: "no"
            },
            {
              platform: "MT5",
              server: "rgtrdvdf",
              account: "121",
              ifshow: "no",
              main_show: "no"
            }
          ]
        }
      ]
    };
  },
  computed: {
    // 查找筛选
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
  created() {
    this.getIndex();
  },
  methods: {
    // 处理表格数据
    getIndex() {
      let arr = [];
      let s = 0;
      let table = this.tableData;
      let getTable = [];
      table.forEach((item, i, data) => {
        if (arr.length) {
          s = arr[arr.length - 1].row + data[i - 1].count.length;
        }
        arr.push({
          row: s,
          index: item.count.length
        });
        if (item.count && item.count.length) {
          item.count.forEach(subItem => {
            getTable.push({
              username: item.username,
              nickname: item.nickname,
              platform: subItem.platform,
              server: subItem.server,
              account: subItem.account,
              ifshow: subItem.ifshow,
              main_show: subItem.main_show
            });
          });
        }
      });
      this.arr = arr;
      this.tableData = getTable;
    },
    // 合并表格方法
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 1) {
        let obj = [0, 0];
        this.arr.some(v => {
          if (rowIndex === v.row) {
            obj = [v.index, 1];
          }
        });
        return obj;
      }
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
