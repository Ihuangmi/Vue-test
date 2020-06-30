<template>
  <div>
    <!-- <h1>{{name}}</h1>
    <el-button>
      <slot>submit</slot>
    </el-button>-->
    <header>
      <slot name="header" :title="title"></slot>
    </header>

    <main>
        <!-- name为default时，可以省略 -->
      <slot name="default" :age="age"></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "我是水水水",
      age: 18,
    };
  }
};
</script>