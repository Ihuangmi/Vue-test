<template>
  <div v-bind="$attrs" class="base-table">
    <slot name="title" />
    <slot />
    <el-table
      :data="data"
      :ref="$attrs.ref"
      v-bind="tableAttrs"
      style="width: 100%"
      v-on="$listeners"
    >
      <div v-for="(col, index) in columnAttrs" :key="index">
        <el-table-column v-if="!col.render" v-bind="col" />
        <el-table-column v-else v-bind="col">
          <template slot-scope="scope">
            <expandDom :row="scope.row" :col="col" :render="col.render" :col-index="index" />
          </template>
        </el-table-column>
      </div>
    </el-table>
    <el-pagination
      v-if="paginationAttrs.isPagination"
      v-bind="paginationAttrs"
      class="pagination-container"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
import {
  defaultTableAttrs,
  defaultColumn,
  defaultPagination
} from "@/utils/tableConfig";
export default {
  name: "BaseTable",
  components: {
    expandDom: {
      functional: true,
      props: {
        row: Object,
        col: Object,
        render: Function,
        colIndex: [Number, String]
      },
      render(h, ctx) {
        const randomIndex = Math.random()
          .toString(35)
          .replace(".", "");
        const params = {
          row: { ...ctx.props.row },
          colIndex: ctx.props.colIndex || randomIndex
        };
        if (ctx.props.col) {
          params.col = ctx.props.col;
        }
        return ctx.props.render && ctx.props.render(h, params);
      }
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    // eslint-disable-next-line vue/require-default-prop
    pagination: {
      type: [Object, Boolean]
    }
  },
  data() {
    return {
      tableAttrs: {},
      columnAttrs: [],
      paginationAttrs: {}
    };
  },
  watch: {
    pagination: {
      handler(val) {
        this.getPagination();
      },
      deep: true
    }
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      // 获取element table上的属性
      const tableAttrs = {};
      Object.keys(defaultTableAttrs).forEach(key => {
        if (this.$attrs[key] !== undefined) {
          tableAttrs[key] = this.$attrs[key];
        }
      });
      this.tableAttrs = Object.assign({}, defaultTableAttrs, tableAttrs);

      // 获取element table col上的属性
      this.columnAttrs = this.columns.map(column => {
        const obj = Object.assign({}, defaultColumn, column);
        return obj;
      });
    },
    getPagination() {
      // 获取element 分页属性
      const pagination = this.pagination;
      let paginationAttrs = {};
      if (pagination) {
        if (typeof pagination === "object") {
          paginationAttrs = {
            ...defaultPagination,
            ...pagination,
            isPagination: true
          };
        } else {
          paginationAttrs = {
            ...defaultPagination,
            isPagination: true
          };
        }
      }
      Object.keys(paginationAttrs).forEach(key => {
        if (this.$attrs[key] !== undefined && key !== "pagination") {
          paginationAttrs[key] = this.$attrs[key];
        }
      });
      this.paginationAttrs = paginationAttrs;
    },
    handleSizeChange(pageSize) {
      this.$emit("size-change", pageSize);
    },
    handleCurrentChange(page) {
      this.$emit("current-change", page);
    }
  }
};
</script>
<style lang="less" scoped>
.pagination-container {
  margin-top: 10px;
  text-align: right;
}
</style>



