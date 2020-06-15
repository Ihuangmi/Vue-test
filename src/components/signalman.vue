<template>
  <div id="userinfo">
    <div class="search-Box">
      <el-input placeholder="请输入关键字" icon="search" class="search" v-model="search"></el-input>
    </div>
    <br />
    <el-table
      border
      :data="tables"
      :span-method="arraySpanMethod"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="account_number" label="账号"></el-table-column>
      <el-table-column prop="subscription" label="订阅费"></el-table-column>
      <el-table-column prop="follower" label="跟单详情"></el-table-column>
      <el-table-column prop="adding_date" label="添加时间" sortable></el-table-column>
      <el-table-column prop="due_to" label="到期时间" sortable></el-table-column>
      <el-table-column prop="type" label="跟单类型"></el-table-column>
      <el-table-column prop="size" label="跟单大小"></el-table-column>
      <el-table-column prop="follower_belongs" label="follower belongs"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "userinfo",
  data() {
    return {
      fields: [
        {
          key: "username",
          label: "用户名",
          sortable: false
        },
        {
          key: "account_number",
          label: "账号",
          sortable: false
        },
        {
          key: "subscription",
          label: "订阅费",
          sortable: false
        },
        {
          key: "follower",
          label: "follower详情",
          sortable: false
        },
        {
          key: "adding_date",
          label: "添加时间",
          sortable: true
        },
        {
          key: "due_to",
          label: "到期时间",
          sortable: true
        },
        {
          key: "type",
          label: "跟单类型",
          sortable: true
        },
        {
          key: "size",
          label: "跟单大小",
          sortable: false
        },
        {
          key: "follower_belongs",
          label: "follower belongs",
          sortable: true
        }
      ],
      tableData: [
        {
          username: "李宇春",
          count: [
            {
              account_number: "MT5",
              subscription: "rgtrdvdf",
              follower: "121",
              adding_date: "no",
              due_to: "no",
              type: "no",
              size: "no",
              follower_belongs: "no",
            },
            {
              account_number: "MT5",
              subscription: "rgtrdvdf",
              follower: "121",
              adding_date: "no",
              due_to: "no",
              type: "no",
              size: "no",
              follower_belongs: "no",
            },
             {
              account_number: "MT5",
              subscription: "rgtrdvdf",
              follower: "121",
              adding_date: "no",
              due_to: "no",
              type: "no",
              size: "no",
              follower_belongs: "no",
            }
          ]
        },
        {
          username: "胡歌",
          count: [
            {
              account_number: "MT5",
              subscription: "rgtrdvdf",
              follower: "121",
              adding_date: "no",
              due_to: "no",
              type: "no",
              size: "no",
              follower_belongs: "no",
            },
            {
              account_number: "MT5",
              subscription: "rgtrdvdf",
              follower: "121",
              adding_date: "no",
              due_to: "no",
              type: "no",
              size: "no",
              follower_belongs: "no",
            }
          ]
        },
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
              account_number: subItem.account_number,
              subscription: subItem.subscription,
              follower: subItem.follower,
              adding_date: subItem.adding_date,
              due_to: subItem.due_to,
              type: subItem.type,
              size: subItem.size,
              follower_belongs: subItem.follower_belongs,
            });
          });
        }
      });
      this.arr = arr;
      this.tableData = getTable;
    },
    // 合并表格方法
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
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
