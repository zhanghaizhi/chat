import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import store from '@/store/index'

// import MpvueRouterPatchInterceptor from '@/utils/mpvue_router_patch_interceptor'
// import { every, match } from '@/utils/router_interceptor'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(MpvueRouterPatch)
// Vue.use(MpvueRouterPatchInterceptor, { every, match })
Vue.prototype.$store =store


const app = new Vue(App)
app.$mount()

export default {

}
