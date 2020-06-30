<template>
  <div class="home">
    <BaseTable :data="tableData" :columns="columns" :height="300"></BaseTable>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
    BaseTable: () => import("@/components/BaseTable")
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王大虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王中虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: '11'
        }
      ],
      columns: [
        {
          prop: "name",
          label: "姓名"
        },
        {
          prop: "date",
          label: "日期"
        },
        {
          prop: "address",
          label: "地址",
          sortable: true,
          render(h, params) {
            const { row } = params;
            // console.log(h);
            // console.log(row);
            return h("span", {}, row.address+(row.tag||''));
          }
        }
      ]
    };
  }
};
</script>

