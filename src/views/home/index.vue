
<template>
  <main>
    <div>
      <el-row>
        <el-col :span="8" v-for="item in links" :key="item.title">
          <div class="link-buttons">
            <router-link :to="item.link">
              <el-button type="danger" class="link-button">{{ item.title }}</el-button>
            </router-link>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <search></search>
      </el-row>

      <!-- <el-row :gutter="10">
        <el-col :span="8">
          <div class="grid-content bg-purple card-link">
            <el-card class="box-card">
              <div slot="header" class="clearfix card-header">
                <span>{{$t('home.linkaccount')}}</span>
              </div>
              <div class="text item">
                <el-table border :data="tableData" style="width: 100%">
                  <el-table-column v-for="(col, index) in cols" :key="index" v-bind="col"></el-table-column>
                </el-table>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row> -->

    </div>
  </main>
</template>
<script>
import Search from "./components/search";
export default {
  components: { Search },
  data() {
    return {
      tableData: [
        {
          platform: "MT4",
          account: "aaa",
          balance: 88,
          accounttype: "mwwssssssswwwwwwww"
        },
        {
          platform: "MT5",
          account: "ddd",
          balance: 8348,
          accounttype: "mfd"
        }
      ]
    };
  },
  computed: {
    cols() {
      return [
        {
          prop: "platform",
          label: this.$i18n.t("home.platform")
        },
        {
          prop: "account",
          label: this.$i18n.t("home.account")
        },
        {
          prop: "balance",
          label: this.$i18n.t("home.balance")
        },
        {
          prop: "accounttype",
          label: this.$i18n.t("home.accounttype"),
          width: 200
        }
      ];
    },
    links() {
      return [
        {
          link: "/risk/link-account",
          title: this.$i18n.t("home.title1")
        },
        {
          link: "/risk/risk-exposure",
          title: this.$i18n.t("home.title2")
        },
        {
          link: "/risk/link-account",
          title: this.$i18n.t("home.title3")
        }
      ];
    }
  },

  methods: {}
};
</script>

<style lang="less" scoped>
.link-buttons {
  text-align: center;

  .link-button {
    width: 350px;
    background-color: #d12d2c;
    border-radius: 200px;
    font-size: 16px;
    // text-decoration: none;
    // text-align: center;
    border: none;
  }

  .link-button:hover {
    background-color: #db5655;
  }
}
</style>