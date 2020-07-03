<template>
  <remote-js></remote-js>
</template>
<script>
export default {
  components: {
    "remote-js": {
      render(createElement) {
        return createElement("script", {
          attrs: {
            type: "text/javascript",
            src: "https://www.paypal.com/sdk/js?client-id=AaFnacwOCP9ImUOwPJJ7jCXRpQNOOctPrGOAo9CpooQ6xVwGn5IQsTOYo4ylwfeg2hT141L6-oCEqDDw"
          }
        });
      },
      props: {
        src: { type: String },
        clientid: { type: String }
      }
    }
  }
};
</script>
