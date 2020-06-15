<template>
  <div class="table">
    <div class="search-Box">
      <el-input placeholder="请输入关键字" icon="search" class="search" v-model="search"></el-input>
    </div>
    <el-table :data="tables" :span-method="arraySpanMethod" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" sortable></el-table-column>
      <el-table-column prop="region" label="深圳"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="company" label="企业名称"></el-table-column>
      <el-table-column prop="age" label="企业年龄" sortable></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      tableData: [
        {
          id: 1,
          region: "深圳",
          type: "外贸",
          company: [
            { name: "公司111", age: 2 },
            { name: "公司211", age: 3 },
            { name: "公司111", age: 12 },
            { name: "公司111", age: 2 }
          ]
        },
        {
          id: 2,
          region: "深圳",
          type: "外贸",
          company: [
            { name: "公司111", age: 112 },
            { name: "公司111", age: 72 },
            { name: "公司111", age: 2 },
            { name: "公司111", age: 2 }
          ]
        },
        {
          id: 3,
          region: "深圳",
          type: "外1贸",
          company: [
            { name: "公司111", age: 2 },
            { name: "公司111", age: 52 },
            { name: "公司111", age: 2 },
            { name: "公司111", age: 2 }
          ]
        }
      ]
    };
  },
  computed: {
    tables() {
      //筛选
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
    getIndex() {
      let arr = [];
      let s = 0;
      let table = this.tableData;
      let getTable = [];
      table.forEach((item, i, data) => {
        console.log(`arr=`, arr)
        
        if (arr.length) {
          console.log(`arr.length=`, arr.length);

          s = arr[arr.length - 1].row + data[i - 1].company.length;
        }
        arr.push({
          row: s,
          index: item.company.length
        });
        if (item.company && item.company.length) {
          item.company.forEach(subItem => {
            getTable.push({
              id: item.id,
              region: item.region,
              type: item.type,
              company: subItem.name,
              age: subItem.age
            });
          });
        }
      });
      this.arr = arr;
      this.tableData = getTable;
    },
    // 合并表格方法
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2) {
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