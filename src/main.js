import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import nativemod from "../native/index.node"
console.log(nativemod.hello())
console.log(nativemod.ff())

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) {
    return h(App)
  },
}).$mount("#app")
