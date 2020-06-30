<template>
  <div>
    <my-table :data="tableData" :col-configs="colConfigs">
      <template v-slot:edit="{row}">
        <el-button size="mini" @click="onEditClick(row)">编辑</el-button>
      </template>
      <template v-slot:colConfig="{row}">
        <span>111</span>
        <span>{{row.tag}}</span>
        <span>222</span>
      </template>
    </my-table>
    <risk-exposure>
      <!-- {{title}} -->
      <!-- v-slot只能添加在一个<template>上 -->
      <!-- <template v-slot:header="msg"> -->
      <template #header="msg">
        {{msg.title}}
        <h1>Here might be a header title</h1>
      </template>
      <!-- 跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把 (v-slot:) 替换为字符 #。例如 v-slot:header 可以被简写为 #header -->
      <!-- v-slot:default="slotProps" 可以简写为v-slot="slotProps"或者如下：对象解构 #default="{ age }" -->
      <!-- <template v-slot="{age}"> -->
      <template #default="{age}">
        {{age}}
        <!-- {{slotProps.age}} -->
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <!-- <template v-slot:footer> -->
      <template #footer>
        <p>Here some footer info</p>
      </template>
      <h1>55555555</h1>
    </risk-exposure>
  </div>
</template>

<script>
import MyTable from "./components/MyTable";
import RiskExposure from "./risk-exposure";
export default {
  components: { MyTable, RiskExposure },
  data() {
    return {
      title: "插槽",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          tag: "china",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          tag: "USA",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        }
      ],
      colConfigs: [
        { prop: "date", label: "日期" },
        { prop: "name", label: "姓名", tag: "3eca" },
        { prop: "address", label: "地址" },
        { solt: "action", label: "操作" }
      ]
    };
  },
  methods: {
    onEditClick(row) {
      console.log(row);
    }
  }
};
</script>