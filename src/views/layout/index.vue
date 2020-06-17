<template>
  <div>
    <div class="layout">
      <!-- 左侧导航栏 -->
      <aside class="aside_left">
        <sider-bar></sider-bar>
      </aside>
      <!-- End 左侧导航栏 -->

      <!-- 头部信息 -->
      <!-- <header class="header_top">
        <nav class="header_content">
          <div class="header_left">
            <i class="el-icon-s-fold"></i> 后台管理系统
          </div>

          <div v-if="ifLogin" class="header_right">
            <img class="img-avatar" src="@/assets/avatar.jpg" alt="笔下光年" />
            <div class="nickname">
              笔下光年
              <i class="el-icon-edit"></i>
            </div>
          </div>
          <div v-else class="login">
            <div>登录后查看</div>
            <router-link to="/login">登录</router-link>
            <i class="el-icon-user"></i>
          </div>
        </nav>
      </header>-->
      <!-- End 头部信息 -->
      <div class="main_content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// import { SiderBar } from "./components";
import SiderBar from "./components/SiderBar";
export default {
  name: "Layout",
  components: {
    SiderBar
  }
};
</script>

<style lang="less" scoped>
body {
  padding: 0;
  margin: 0;
  color: #4d5259;
  line-height: 1.5;
  font-size: 14px;
  background-color: #f5f6fa;
}
a {
  text-decoration: none;
  color: #4d5259;
}
a:hover {
  text-decoration: none;
  color: #4d5259;
}
li {
  list-style-type: none;
}

.aside_left {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 5;
  display: block;
  width: 240px;
  font-weight: 500;
  color: #fff;
  background-color: darkcyan;

  .title {
    height: 68px;
    line-height: 68px;
    font-size: 28px;
    text-align: center;
    border-bottom: 3px solid rgba(77, 82, 89, 0.15);
    box-shadow: 0 1px 1px -1px rgba(77, 82, 89, 0.15);
  }

  ul {
    padding: 0;
    margin: 0;

    li {
      height: 48px;
      line-height: 48px;
      display: flex;

      i {
        margin: 0 13px;
      }
      a {
        color: #fff;
        display: block;
        width: 100%;
        height: 100%;
        border-right: 3px solid transparent;
        padding-left: 25px;
      }
      .router-link-active {
        background-color: rgb(8, 181, 181);
        border-right: 3px solid #33cabb;
      }
    }
  }
}
.header_top {
  height: 68px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 4;
  padding-left: 240px;
  background-color: #fff;
  box-shadow: 0 1px 1px -1px rgba(77, 82, 89, 0.15);

  .header_content {
    height: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .header_left {
      line-height: 68px;
    }
    .header_right {
      padding: 0 20px;
      display: flex;

      .img-avatar {
        width: 67px;
        height: 67px;
        border-radius: 50%;
        box-shadow: 0 5px 10px 5px rgba(110, 122, 139, 0.15);
      }
      .nickname {
        line-height: 68px;
        margin: 0 20px;
        color: darkcyan;
        cursor: pointer;
      }
    }
    .login {
      line-height: 68px;
      padding: 0 20px;
      display: flex;

      div {
        font-size: 12px;
        color: darkcyan;
        margin: 0 20px;
      }
      a {
        display: inline;
        font-size: 14px;
        color: darkcyan;
      }
      a:hover {
        color: rgb(7, 192, 192);
      }
      i {
        width: 32px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        margin: auto 7px;
        background-color: #ececec;
        border-radius: 50%;
      }
    }
  }
}
.main_content {
  padding-top: 68px;
  padding-left: 240px;
  background-color: #f5f6fa;
}
</style>

