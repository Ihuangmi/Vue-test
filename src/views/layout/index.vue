<template>
  <el-container>
    <el-aside class="aside">
      <sider-bar></sider-bar>
    </el-aside>
    <el-container>
      <!-- <el-header class="header">
        <div class="card">
          <div v-for="(item, index) in cardArray" :key="item" class="card-box">
            <el-row>
              <el-col :span="10">
                <div class="card-img">
                  <img src="@/assets/pln.png" alt style="width: 40px; height: 33px" />
                </div>
              </el-col>
              <el-col :span="14">
                <div class="card-data">
                  <div :class="'toptext'+index">较昨日$0</div>
                  <h3 class="midtext">$0</h3>
                  <div class="undertext">今日盈亏</div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <hr />
      </el-header>-->

      <el-main class="main">
        <transition name="bounce">
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SiderBar from "./components/SiderBar";
export default {
  name: "Layout",
  components: {
    SiderBar
  },
  data() {
    return {
      cardArray: [1, 2, 3, 4, 5]
    };
  }
};
</script>

<style lang="less" scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}


.aside {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 101;
  width: 240px !important;
  background-color: #fff;
  border-right: 2px solid rgb(241, 234, 234);
}
.header {
  height: 100px !important;
  padding-left: 260px;
  padding-top: 8px;
  // display: flex;
  // justify-content: space-between;
  // position: fixed;
  // top: 0;
  // right: 0;
  // left: 0;
  // z-index: 100;
  hr {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .card {
    height: 100%;
    // padding-left: 260px;
    // padding-top: 8px;
    display: flex;
    justify-content: space-between;

    .card-box {
      width: 210px;
      height: 70px;
      padding: 8px 15px;
      // font-size: 14px;
      font-size: small;
      border: 1px solid rgba(54, 64, 74, 0.19);

      .card-img {
        height: 100%;
        padding-top: 10px;
      }
      .card-data {
        height: 100%;
        text-align: right;
        color: #212529;

        .toptext0 {
          color: #7c7eb8;
        }
        .toptext1 {
          color: #ebca72;
        }
        .toptext2 {
          color: #0a70ac;
        }
        .toptext3 {
          color: #3ec37c;
        }
        .toptext4 {
          color: #dc443a;
        }

        .midtext {
          font-size: 20px;
          font-weight: bolder;
          margin: 5px 0;
        }
      }
    }
  }
}

.main {
  padding-left: 260px;
}
</style>

