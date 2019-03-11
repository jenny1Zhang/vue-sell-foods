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

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
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
        { path: '/dashboard', name: 'Dashboard', component: Dashboard },
        { path: '/Orders', name: 'Orders', component: Orders },
        { path: '/Setting', name: 'Setting', component: Setting }
      ]
    },
    { path: '/AccountInfo', name: 'AccountInfo', component: AccountInfo },
    { path: '/MyAddress', name: 'MyAddress', component: MyAddress },
    { path: '/OrderDetails/:orderId', name: 'OrderDetails', component: OrderDetails },
    { path: '/ShopDetails/:shopId', name: 'ShopDetails', component: ShopDetails }
  ]
})
