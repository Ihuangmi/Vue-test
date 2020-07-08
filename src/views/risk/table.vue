<template>
  <ul>
    <li>
      <h2>基本表格</h2>
      <enhanced-table :tableData="tableData" :col-configs="basicTableConfigs"></enhanced-table>
      <pagination
        v-show="total>0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getList"
      />
    </li>

    <li>
      <h2>特殊行用slot的表格</h2>
      <enhanced-table :tableData="tableData" :col-configs="slotTableConfigs">
        <template v-slot:options="{colConfig}">
          <el-table-column v-bind="colConfig">
            <template v-slot="{row}">
              <el-button size="mini">查看{{row.date}}</el-button>
            </template>
          </el-table-column>
        </template>
      </enhanced-table>
    </li>

    <li>
      <h2>特殊行用component的表格</h2>
      <enhanced-table :tableData="tableData" :col-configs="componentTableConfigs"></enhanced-table>
    </li>

    <li>
      <h2>有排序的表格</h2>
      <enhanced-table
        :tableData="tableData"
        :col-configs="sortedTableConfigs"
        @sort-change="changeCustomSort"
      ></enhanced-table>
    </li>

    <li>
      <h2>可以勾选行的表格</h2>
      <enhanced-table
        :tableData="tableData"
        :col-configs="selectRowTableConfigs"
        @selection-change="selectDeleteRows"
      ></enhanced-table>
    </li>

    <li>
      <h2>有加载状态的表格</h2>
      <enhanced-table
        :is-load="isShowTableLoading"
        :tableData="tableData"
        :col-configs="selectRowTableConfigs"
      ></enhanced-table>
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src
import EnhancedTable from "@/components/EnhancedTable.vue";
import Pagination from "@/components/Pagination.vue";
import PrefixPlusText from "./components/PrefixPlusText.vue";

export default {
  name: "home",
  components: {
    EnhancedTable,
    Pagination,
    PrefixPlusText
  },
  data() {
    let basicTableConfigs = [
      { prop: "date", label: "日期" },
      { prop: "name", label: "姓名" },
      { prop: "address", label: "地址" },
      { prop: "trend", label: "趋势" }
    ];
    let slotTableConfigs = [
      { prop: "date", label: "日期" },
      { prop: "name", label: "姓名" },
      { prop: "address", label: "地址" },
      { prop: "trend", label: "趋势" },
      { slot: "options", label: "slot的操作", message: "message" }
    ];
    let componentTableConfigs = [
      { prop: "date", label: "日期" },
      { prop: "name", label: "姓名" },
      { prop: "address", label: "地址" },
      { prop: "trend", label: "趋势" },
      { component: PrefixPlusText, prop: "change", label: "component的变化" }
    ];
    let sortedTableConfigs = [
      {
        prop: "date",
        label: "有排序的日期，不是自定义的不需要加事件",
        sortable: true
      },
      {
        prop: "name",
        label: "自定义排序的姓名，需要加事件",
        sortable: "custom"
      },
      { prop: "address", label: "地址" },
      { prop: "trend", label: "趋势" }
    ];
    let selectRowTableConfigs = [
      { prop: "随便", type: "selection", label: "日期" },
      { prop: "date", label: "日期" },
      { prop: "name", label: "姓名" },
      { prop: "address", label: "地址" },
      { prop: "trend", label: "趋势" }
    ];
    let loadingTableConfigs = [
      { prop: "date", label: "日期" },
      { prop: "name", label: "姓名" },
      { prop: "address", label: "地址" },
      { prop: "trend", label: "趋势" }
    ];
    return {
      total: 50,
      listQuery: {},
      basicTableConfigs,
      slotTableConfigs,
      componentTableConfigs,
      sortedTableConfigs,
      // 下面rowsToDelete在勾选事件的时候能是数组，每项就是row
      selectRowTableConfigs,
      rowsToDelete: [],
      // 下面的isShowTableLoading就是加载的flag
      loadingTableConfigs,
      isShowTableLoading: true,

      tableData: [
        {
          id: "1",
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          change: "12%",
          trend: "10%"
        },
        {
          id: "2",
          date: "2016-05-02",
          name: "王大虎",
          address: "上海市普陀区金沙江路 1518 弄",
          change: "12%",
          trend: "10%"
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.isShowTableLoading = false;
    }, 3000);
  },
  methods: {
    getList() {
      console.log("getList");
    },
    changeCustomSort(column, prop, order) {
      console.log(arguments);
      let isAsc;
      order === null && (isAsc = "");
      order === "ascending" && (isAsc = true);
      order === "descending" && (isAsc = false);
      this.sortBy = prop;
      this.isAsc = isAsc;
    },
    selectDeleteRows(val) {
      console.log(arguments);
      this.rowsToDelete = val;
    }
  }
};
</script>

