<template>
  <div>
    <header>header</header>
    <main>
      <div id="paypal-button-container"></div>
      <PayPal
      amount="0.02"
      currency="USD"
      :client='credentials'
      env="sandbox"
      >
        
      </PayPal>
    </main>
    <footer>footer</footer>
  </div>
</template>
<script>
import PayPal from "@/components/PayPalCheckout.vue";

export default {
  components: { PayPal },
  data() {
    return {
       credentials: {
        //沙箱环境client_id
        sandbox:
          "AXq9VayhSWKCBHw1moyz-1SXaXK9Zu21cDb1kBKWfNcyv4-pLPdaamV4Nq65Oa4i8ULbCijzH0UTM0mI",
        //线上环境client_id
        production:
          "AUQYWEC2FeJeN7WjLHPq5FlQJoz6E92O8S0Z7lZDFHrB1uARMhK2A7z5n2sk4DLPx27Pi6PagmBTvn1s"
      },
      paypalAmount: "0.02",
      clientId:
        "AaFnacwOCP9ImUOwPJJ7jCXRpQNOOctPrGOAo9CpooQ6xVwGn5IQsTOYo4ylwfeg2hT141L6-oCEqDDw",
      custom_id: "45ff"
    };
  },
  created() {},
  // created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
  // mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
  mounted() {
    // const oScript = document.createElement("script");
    // oScript.type = "text/javascript";
    // oScript.src = `https://www.paypal.com/sdk/js?client-id=${this.clientId}`;
    // document.body.appendChild(oScript);
    // this.setPaypal();
  },
  methods: {
    setPaypal() {
      var that = this;
      paypal
        .Buttons({
          createOrder(data, actions) {
            // This function sets up the details of the transaction, including the amount and line item details.
            return actions.order.create({
              purchase_units: [
                {
                  custom_id: that.custom_id,
                  amount: {
                    value: that.paypalAmount
                  }
                }
              ]
            });
          },
          onApprove(data, actions) {
            // This function captures the funds from the transaction.
            return actions.order.capture().then(function(details) {
              // This function shows a transaction success message to your buyer.
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
              console.log(details);
            });
          }
        })
        .render("#paypal-button-container");
    }
  }
};
</script>
<style scoped>
header {
  height: 15vh;
  /* background-color: lightblue; */
}
main {
  padding: 20px;
  /* height: calc(100vh - 200px); */
  /* background-color: rgb(127, 165, 199); */
}
footer {
  height: 15vh;
  /* background-color: rgb(157, 233, 252); */
}
.box {
  /* + 和 - 运算符的两边必须要有空白字符 
  比如，calc(50% -8px) 会被解析成为一个无效的表达式，
  解析结果是：一个百分比 后跟一个负数长度值。而加有空白字符的、
  有效的表达式 calc(8px + -50%) 会被解析成为：一个长度 后跟一个加号 再跟一个负百分比。
  */
  font-size: calc(12px + 1vw);
}
</style>