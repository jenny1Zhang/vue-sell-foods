<template>
  <div class="orders">
      <heads :titleName="titleName" :isback=false></heads>
      <div class="orderList">
          <ul>
              <li v-for="order in orderLists">
                  <div class="order_first" @click="goShopDetails(order.shopId)">
                      <div>
                          <img :src="getSrc(order.img)" />
                          <!-- <img src="../../assets/img/order1.png" /> -->
                      </div>
                      <div class="shop">
                          <div>
                              <div>{{order.shopName}} &gt;</div>
                              <div>{{order.tiem}}</div>
                              <!-- <div>这儿有家冒菜(动物园) &gt;</div>
                              <div>2019-01-19 11:45</div> -->
                          </div>
                          <div>{{order.status}}</div>
                          <!-- <div>订单已送达</div> -->
                      </div>
                  </div>
                  <div class="order_second" @click="goOrderDetails(order.id)">
                      <div>{{order.foodName}}</div>
                      <div>¥{{order.price}}</div>
                      <!-- <div>招牌千层毛肚冒菜+米饭+饮料</div>
                      <div>¥17.3</div>-->
                  </div>
                  <div class="order_third">
                      <div>再来一单</div>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Heads from '@/components/common/head'
import store from '@/vuex/store'
import { mapState } from 'vuex'
export default {
  name: 'Orders',
  data () {
    return {
      titleName: '我的订单'
    }
  },
  computed: {
    ...mapState(['orderLists'])
  },
  components: {
    Heads
  },
  methods: {
    getSrc (src) {
      return src
    },
    goOrderDetails (id) {
      this.$router.push({ path: `/OrderDetails/${id}` })
    },
    goShopDetails (id) {
      this.$router.push({ path: `/ShopDetails/${id}` })
    }
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .orders{
        width:100%;
        height:100%;
        margin-bottom: 50px;
        overflow: auto;
        background: #eee;
    }
    .orderList li{
        margin-top:10px;
        font-size: 14px;
        color:#666;
        background:white;
        padding:15px 5px 15px 10px;
    }
    .orderList>ul>li>.order_first{

    }
    .orderList>ul>li>div:after{
        content: "";
        height:0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear:both;
    }

    .order_first>div:first-child{
        float:left;
        width:20%;
        text-align: left;
    }
    .order_first img{
        width:80%;
        height:auto;
    }
    .order_first .shop{
        float:right;
        width:80%;
        padding:10px 0;
        box-sizing: border-box;
        text-align: left;
        border-bottom: 1px solid #eee;
    }
    .order_first .shop>div:first-child{
        width:60%;
        float:left;
    }
    .order_first .shop>div>div:first-child{
        font-size: 16px;
        color:black;
        width:100%;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
    .order_first .shop>div>div:last-child{
        font-size: 12px;
        color: #999;
    }
    .order_first .shop>div:last-child{
        float:right;
    }

    .order_second {
        padding:8px;
        padding-left:20%;
        border-bottom: 1px solid #eee;
    }
    .order_second div:first-child{
        float:left;
        width: 60%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .order_second div:last-child{
        float:right;
        font-weight: 600;
    }

    .order_third{
        padding-top:10px;
        padding-right:10px;
    }
    .order_third div{
        float:right;
        padding:6px;
        border: 1px solid #64aecb;
        color: #64aecb;
        font-size:12px;
    }


</style>
