
<template>
  <div id="home">
    <div>111</div>
    <!-- <h1>home</h1> -->
    <!-- <PayPal
      amount="0.01"
      currency="USD"
      :client="credentials"
      env="sandbox"
      :button-style="buttonStyle"
      @payment-authorized="paymentAuthorized"
      @payment-completed="paymentCompleted"
      @payment-cancelled="paymentCancelled"
    ></PayPal> -->
  </div>
</template>
<script>
// import PayPal from "vue-paypal-checkout";

export default {
  data() {
    return {
      // credentials: {
      //   sandbox:
      //     "AXq9VayhSWKCBHw1moyz-1SXaXK9Zu21cDb1kBKWfNcyv4-pLPdaamV4Nq65Oa4i8ULbCijzH0UTM0mI",
      //   production:
      //     "AUQYWEC2FeJeN7WjLHPq5FlQJoz6E92O8S0Z7lZDFHrB1uARMhK2A7z5n2sk4DLPx27Pi6PagmBTvn1s"
      // },

      // buttonStyle: {
      //   label: "paypal",
      //   size: "responsive",
      //   shape: "rect",
      //   color: "gold"
      // }
    };
  },
  components: {
    // PayPal
  },

  methods: {
    paymentAuthorized(data) {
      // 授权完成的回调，可以拿到订单id
      console.log(data);
    },

    paymentCompleted(data) {
      // 用户支付完成的回调，可以拿到订单id
      console.log(data);
    },

    paymentCancelled(data) {
      // 用户取消交易的回调
      console.log(data);
    }
  }
};
</script>