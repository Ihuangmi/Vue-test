<template>
  <div>
    <el-input
      placeholder="请输入姓名"
      prefix-icon="el-icon-search"
      v-model="searchValue"
      @change="fuzzySearch(listsData, 'name', searchValue)"
    ></el-input>
    <br />
    <br />
    <enhanced-table :tableData="staff" :col-configs="colConfigs"></enhanced-table>
  </div>
</template>

<script>
import EnhancedTable from "@/components/EnhancedTable";

export default {
  components: { EnhancedTable },
  data() {
    return {
      searchValue: "",
      listsData: [],
      // 测试用的数据
      staff: [
        { name: "April", job: "programmer", age: "18", hobby: "study" },
        { name: "Shawn", job: "student", age: "8", hobby: "study" },
        { name: "Leo", job: "teacher", age: "28", hobby: "play" },
        { name: "Todd", job: "programmer", age: "19", hobby: "sleep" },
        { name: "Scoot", job: "cook", age: "38", hobby: "paintting" }
      ],
      colConfigs: [
        { prop: "name", label: "姓名" },
        { prop: "job", label: "职业" },
        { prop: "age", label: "年龄" },
        { prop: "hobby", label: "爱好" }
      ]
    };
  },
  created() {
    this.listsData = [...this.staff];
  },
  methods: {
    // 精确查找
    exactSearch(lists, key, value) {
      if (value) {
        var arr = lists.filter(item => item[key] === value);
        this.staff = arr;
      } else {
        this.staff = lists;
      }
    },
    // 模糊查询
    fuzzySearch(lists, key, value) {
      if (value) {
        var arr = lists.filter(item => item[key].toLowerCase().includes(value));
        this.staff = arr;
      } else {
        this.staff = lists;
      }
    }
  }
};
</script>