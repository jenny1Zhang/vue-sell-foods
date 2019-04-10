import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Full from '@/components/Full'
import Dashboard from '@/components/component/Dashboard'
import Orders from '@/components/component/Orders'
import Setting from '@/components/component/Setting'
import AccountInfo from '@/components/component/Account_info'
import MyAddress from '@/components/component/My_address'
import OrderDetails from '@/components/component/Order_details'
import ShopDetails from '@/components/component/Shop_details'

import store from '@/vuex/store'
import { Toast } from 'mint-ui'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Full',
    name: 'Full',
    component: Full,
    children: [
      { path: '/dashboard', name: 'Dashboard', meta: { requireAuth: true, }, component: Dashboard },
      { path: '/Orders', name: 'Orders', component: Orders },
      { path: '/Setting', name: 'Setting', component: Setting }
    ]
  },
  { path: '/AccountInfo', name: 'AccountInfo', component: AccountInfo },
  { path: '/MyAddress', name: 'MyAddress', component: MyAddress },
  { path: '/OrderDetails/:orderId', name: 'OrderDetails', component: OrderDetails },
  { path: '/ShopDetails/:shopId', name: 'ShopDetails', component: ShopDetails }
]

const router =  new Router({
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to,from,next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.isLogin) {
            next();
        }
        else {
          Toast({
            message: '请先登录',
            position: 'top',
            duration: 2500
          });
          next({
              path: '/',
              // query: {redirect: to.fullPath}
          })
        }
    }
    else {
        next();
    }
})

export default router;
