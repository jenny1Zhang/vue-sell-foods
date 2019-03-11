<template>
  <div class="order_details">
      <heads :titleName="titleName" :isback=true></heads>
      <div>
          <div class="status_info">
              <div>订单已送达</div>
              <div>
                  <div>感谢您对饿了吗的信任，欢迎再次光临</div>
                  <div><div>再来一单</div></div>
              </div>
          </div>
          <div class="food_info">
              <div class="food1">
                  <div>
                      <img :src="orderDetail.shopImg" />
                      {{orderDetail.shopName}}
                  </div>
                  <div>&gt;</div>
              </div>
              <div class="food2" v-for="food in orderDetail.foods">
                  <div>
                      <div>
                          <div>{{food.name}}</div>
                          <div>{{food.name}}</div>
                      </div>
                      <div>x{{food.num}}</div>
                  </div>
                  <div>¥{{food.price}}</div>
              </div>
              <div class="food2">
                  <div>
                      <div>餐盒费</div>
                      <div>x{{orderDetail.boxNum}}</div>
                  </div>
                  <div>¥{{orderDetail.boxPrice}}</div>
              </div>
              <div>
                  <div>配送费</div>
                  <div>¥{{orderDetail.sendPrice}}</div>
              </div>
              <div class="food3">
                  <div>在线支付立减优惠</div>
                  <div>-¥{{orderDetail.discount}}</div>
              </div>
              <div class="food3 food4">
                  <div>
                      <div>红</div> 店铺红包
                  </div>
                  <div>-¥{{orderDetail.redPacket}}</div>
              </div>
              <div class="food3 food5">
                  <div>
                      <i class="icon iconfont icon-dianhua"></i>
                      联系商家
                  </div>
                  <div>实付<span>¥{{orderDetail.reallyPay}}</span></div>
              </div>
          </div>
          <div class="send_info">
              <div>配送信息</div>
              <div>送达时间：{{orderDetail.sendTime}}</div>
              <div class="send1">
                  <div>送货地址：</div>
                  <div>
                      <div>{{orderDetail.sendAddress[0]}}</div>
                      <div>{{orderDetail.sendAddress[1]}}</div>
                      <div>{{orderDetail.sendAddress[2]}}</div>
                  </div>
              </div>
              <div>配送方式：{{orderDetail.sendType}}</div>
              <div class="send1 send2">
                  <div>配送骑手：</div>
                  <div>
                      <span>
                          <i class="icon iconfont icon-dianhua"></i>
                          联系商家
                      </span>
                      |
                      <span>{{orderDetail.sender}}</span>
                  </div>
              </div>
          </div>
          <div class="order_info">
              <div>订单信息</div>
              <div>订单号：{{orderDetail.orderNum}}</div>
              <div>支付方式：{{orderDetail.payType}}</div>
              <div>下单时间：{{orderDetail.payTime}}</div>
              <div v-if="orderDetail.orderText">订单备注：{{orderDetail.orderText}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import Heads from '@/components/common/head'
import store from '@/vuex/store'
import { mapState }  from 'vuex'
export default {
  name: 'OrderDetails',
  data () {
    return {
      titleName: '订单详情'
    }
  },
  components: {
    Heads
  },
  computed: {
    ...mapState(['orderDetailsLists']),
    orderDetail () {
      console.log(this.orderDetailsLists[parseInt(this.$route.params.orderId)-1])
      return this.orderDetailsLists[parseInt(this.$route.params.orderId)-1]
    }
  },
  beforeCreate: function () {
    console.log(this.$route.params.orderId)
  },
  methods: {

  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .order_details{
        width: 100%;
        height: 100%;
    }
    .order_details>div:last-child{
        padding:12px 8px;
        box-sizing: border-box;
        font-size:14px;
        background: #f7f7f7;
    }
    .order_details>div>div{
        background: white;
        padding: 10px;
        box-sizing: border-box;
        text-align: left;
        margin-bottom:12px;
    }

    .status_info>div:first-child{
        border-bottom: 1px solid #eee;
        font-size: 22px;
        padding: 15px 0;
    }
    .status_info>div:last-child>div:first-child{
        font-size: 16px;
        padding:15px 0;
    }
    .status_info>div:last-child>div:last-child>div{
        display: inline-block;
        padding: 5px;
        border: 1px solid #0b8de3;
        color: #0b8de3;
        border-radius: 4px;
    }

    .food_info>div{
        padding: 7px 2px;
        border-top: 1px solid #f3f3f3;
        font-size: 14px;
        color:black
    }
    .food_info>div:after{
        content: "";
        height: 0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear: both;
    }
    .food_info>div>div:first-child{
        width: 90%;
        float:left;
    }
    .food_info>div>div:last-child{
        width: 10%;
        float:left;
        text-align: right;
    }
    .food1{
        position: relative;
        border-bottom: 2px solid #f3f3f3;
        margin-bottom: 2px;
    }
    .food1>div:first-child{
        height: 36px;
        line-height: 36px;
        text-indent: 40px;
        box-sizing: border-box;
        color: #666;
    }
    .food1>div:first-child img{
        width: 30px;
        height: 30px;
        position: absolute;
        left: 5px;
        top: 10px;
    }
    .food2{
        color:black;
    }
    .food2>div:first-child{
        width:95%;
    }
    .food2>div:last-child{
        width:5%;
    }
    .food2>div:first-child>div:first-child{
        width:90%;
        float:left;
    }
    .food2>div:first-child>div:last-child{
        width:10%;
        float:left;
    }
    .food2>div:first-child>div:first-child>div:first-child{
        width: 100%;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
    .food2>div:first-child>div:first-child>div:last-child{
        font-size: 12px;
        font-weight: 400;
        color: #666;
    }
    .food_info .food3>div:first-child{
        width:70%;
    }
    .food_info .food3>div:last-child{
        width:30%;
        color: #e8856e;
    }
    .food_info .food4{
        border-bottom: 2px solid #f3f3f3;
        margin-bottom:2px;
    }
    .food_info .food4>div:first-child>div:first-child{
        float:left;
        background: #f8754b;
        border-radius: 2px;
        color:white;
        padding:0 2px;
    }
    .food_info .food5>div:first-child{
        color:#379ce2;
        padding-top: 8px;
    }
    .food_info .food5>div:last-child{
        color: black;
        font-size: 16px;
        padding-top: 5px;
    }
    .food_info .food5 i{
        border: 1px solid #379ce2;
        border-radius: 50%;
    }

    .send_info>div{
        padding: 8px 0px;
        border-bottom: 1px solid #f3f3f3;
        color: #666;
    }
    .send_info>div:first-child{
        color:black;
        font-size: 16px;
    }
    .send_info>.send1:after{
        content: "";
        height: 0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear: both;
    }
    .send_info>.send1>div:first-child{
        float:left;
        width: 25%;
    }
    .send_info>.send1>div:last-child{
        float:left;
        width: 75%;
    }
    .send_info>.send2>div:last-child{
        text-align:right;
    }
    .send_info>.send2>div:last-child>span:first-child{
        color: #379ce2;
    }
    .send_info>.send2>div:last-child>span:first-child>i{
        border: 1px solid #379ce2;
        border-radius: 50%;
    }

    .order_info>div{
        padding: 8px 0px;
        border-bottom: 1px solid #f3f3f3;
        color: #666;
    }
    .order_info>div:first-child{
        color:black;
        font-size: 16px;
    }




</style>
