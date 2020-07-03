<template>
  <div>
    <my-table :data="tableData" :col-configs="colConfigs">
      <template #action="{colConfig}">
        <el-table-column v-bind="colConfig">
          <template v-slot="{row}">
            <el-button size="mini" @click="onView(row)">查看</el-button>
          </template>
        </el-table-column>
      </template>
    </my-table>
    <!-- 
      <el-table-column min-width="300px" label="备注">
        <template slot-scope="{row}">
          <template v-if="row.edit">
            <el-input v-model="row.note" class="edit-input" size="mini" />
            <el-button
              class="cancel-btn"
              size="mini"
              icon="el-icon-refresh"
              type="warning"
              @click="cancelEdit(row)"
            />
          </template>
          <span v-else>{{ row.note }}</span>
        </template>
      </el-table-column>
     -->
    <my-slot>
      <!-- {{title}} -->
      <!-- v-slot只能添加在一个<template>上 -->
      <!-- <template v-slot:header="msg"> -->
      <template #header="msg">
        {{msg.title}}
        <h1>Here might be a header title</h1>
      </template>
      <!-- 跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把 (v-slot:) 替换为字符 #。例如 v-slot:header 可以被简写为 #header -->
      <!--  v-slot:default="slotProps" 可以简写为v-slot="slotProps"（仅限默认插槽）
            或者使用对象解构 #default={ age } 
            还可以使用变量接收 #default={age:person}，注意这里的age和person中间的冒号两边不能有空格
      -->
      <!-- <template v-slot={age}> -->
      <template #default="{age:person}">
        {{person}}
        <!-- {{slotProps.age}} -->
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <!-- <template v-slot:footer> -->
      <template #footer>
        <p>Here some footer info</p>
      </template>
      <h1>55555555</h1>
    </my-slot>
  </div>
</template>

<script>
import MyTable from "./components/MyTable";
import MySlot from "./components/MySlot";
const ParseTime = {
  props: ["colConfig"],
  template: `<div>5555</div>`
};
export default {
  components: { MyTable, MySlot },
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
          name: "王中虎",
          tag: "USA",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王大虎",
          address: "上海市普陀区金沙江路 1517 弄"
        }
      ],
      colConfigs: [
        { prop: "date", label: "日期", component: ParseTime },
        { prop: "name", label: "姓名" },
        { prop: "address", label: "地址" },
        { prop: "action", slot: "action", label: "操作" }
      ]
    };
  },
  methods: {
    onView(row) {
      console.log(row);
    }
  }
};
</script>