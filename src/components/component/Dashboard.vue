<template>
  <div class="dashboard">
     <div class="search">
         <div>
             <input type="text" placeholder="搜索商家、商品名称" />
             <div><i class="icon iconfont icon-search"></i></div>
        </div>
     </div>

     <div class="sort">
         <ul>
             <li>综合排序</li>
             <li>距离最近</li>
             <li>外卖节商家</li>
             <li>筛选</li>
         </ul>
     </div>

     <div class="shopList">
         <ul>
             <li class="shop" v-for="shop in shopData.list" @click="goShopDetails(shop.id)">
                 <div><img :src="shop.img" /></div>
                 <div>
                     <div class="shop_box1">
                         {{shop.shopName}}
                     </div>
                     <div class="shop_box2">
                         <div>
                             <div class="star">
                                 <span :style="{width:setScore(shop.score)}"></span>
                             </div>
                             {{shop.score}}
                             月售{{shop.sell_num}}单
                         </div>
                         <div><div v-if="shop.send_special">蜂鸟专送</div></div>
                     </div>
                     <div class="shop_box3">
                         <div>¥{{shop.send_start}}起送 | 配送费{{shop.send_num}}元</div>
                         <div>{{shop.distance}}m | {{shop.send_time}}分钟</div>
                     </div>
                     <div class="shop_box4">
                         <div class="label1" v-if="shop.label1">春季外卖节</div>
                         <div v-for="label in shop.label2">{{label}}</div>
                         <div class="label3" v-if="shop.label3">口碑人气好店</div>
                     </div>
                     <div class="shop_box5">
                         <div>
                             <div>减</div>
                             <div>&nbsp;{{shop.promotions}}</div>
                         </div>
                         <div>{{shop.promotion_num}}个活动</div>
                     </div>
                     <div class="shop_box6" v-if="shop.isMember">
                         超级会员领8元无门槛红包
                     </div>
                 </div>
             </li>
         </ul>
     </div>

     <div class="loading">加载中......</div>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState } from 'vuex'
import { getnews } from '@/service/getData'
export default {
  name: 'Dashboard',
  data () {
    return {
      page: 1,
      shopData: {}
    }
  },
  computed: {
    ...mapState(['shopLists'])
  },
  created(){
    // console.log(1)
    this.init();
  },
  mounted: function() {
    // console.log(this.$store.state.shopLists)
    // console.log(store.state.shopLists)
    this.shopData={
      list: this.shopLists
    }
    this.$nextTick(function () {
     document.getElementsByClassName('dashboard')[0].addEventListener('scroll', this.scrollEven)
   })
  },
  methods: {
    async init(){
      let response = await getnews('TY43,FOCUSTY43,TYTOPIC',this.page++,'5.4.0');
      response.data.forEach((obj,index) => {
        // console.log(index,obj)
      })
    },
    setScore (score) {
      return score * 20 + '%'
    },
    goShopDetails (id) {
      this.$router.push({ path: `/ShopDetails/${id}` })
    },
    scrollEven () {
      var top = document.getElementsByClassName('dashboard')[0].scrollTop;
      var hei = document.getElementsByClassName('search')[0].offsetHeight+document.getElementsByClassName('sort')[0].offsetHeight+document.getElementsByClassName('shopList')[0].offsetHeight-document.getElementsByClassName('dashboard')[0].offsetHeight;
      // console.log(top,hei)
      if(top == hei){
          document.getElementsByClassName('loading')[0].style.display = 'block';
          setTimeout(this.setLate, 4000);
      }
    },
    setLate () {
      document.getElementsByClassName('loading')[0].style.display = 'none';
      this.shopData.list = [...this.shopData.list,...this.shopData.list];
    }
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .dashboard{
        width:100%;
        height:100%;
        overflow: auto;
        margin-bottom: 50px;
    }
    .loading{
        color: #6ddced;
        font-size: 14px;
        padding: 5px;
        border: 1px solid #6ddced;
        margin-top: 10px;
        display: none;
    }
    .search{
        padding:10px 18px;
        background: #03a0ff;
    }
    .search>div{
        background:white;
        position: relative;
    }
    .search>div>input{
        width:80%;
        height:34px;
        outline: none;
        border:0;
    }
    .search>div>div{
        position: absolute;
        right:0;
        top:0;
        width: 20%;
        /* text-align: center; */
        height:36px;
        line-height: 36px;
    }

    .sort{
        padding:12px 0;
        border-bottom: 1px solid #eee;
    }
    .sort ul{
        width:100%;
    }
    .sort ul:after{
        content: "";
        height:0;
        line-height: 0;
        visibility: hidden;
        display: block;
        clear: both;
    }
    .sort ul li{
        width:25%;
        float:left;
        box-sizing: border-box;
        text-align: center;
        font-size:14px;
        color: #666;
    }

    .shopList ul{
        width:100%;
    }
    .shop{
        width:100%;
        font-size:12px;
        border-bottom:2px solid #f6f6f6;
        padding: 13px 8px 8px;
        box-sizing: border-box;
    }
    .shop:after{
        content: "";
        height:0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear: both;
    }
    .shop div{
        text-align: left;
    }
    .shop>div:first-child{
        float:left;
        width: 20%;
    }
    .shop>div:first-child>img{
        width: 95%;
        height:auto;
    }
    .shop>div:last-child{
        float:left;
        width: 80%;
    }
    .shop>div>div{
        padding-bottom: 3px;
    }
    .shop>div>div:after{
        content: "";
        height: 0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear: both;
    }
    .shop_box1 {
        font-weight: 600;
        font-size:14px;
    }
    .shop_box2 div:first-child{
        width: 60%;
        float: left;
    }
    .shop_box2 div:last-child{
        width:40%;
        float: left;
    }
    .shop_box2 div:last-child>div{
        width:50px;
        color:white;
        background:#009bf2;
        float:right;
        text-align: center;
    }
    .star{
        position: relative;
        display: inline-block;
        font-family: "iconfont" !important;
        font-size:12px;
        color:#ddd;
    }
    .star:before{
        content: "\e642\e642\e642\e642\e642";
    }
    .star>span{
        /* width:90%; */
        overflow: hidden;
        position: absolute;
        top:0;
        left:0;
        color:#ffbb12;
    }
    .star>span:before{
        content: "\e642\e642\e642\e642\e642";
    }
    .shop_box3 div{
        width: 50%;
        float:left;
    }
    .shop_box3 div:last-child{
        text-align: right;
    }
    .shop_box4 div{
        float:left;
        border: 1px solid #eee;
        padding:0 1px;
        margin-right: 5px;
    }
    .shop_box4 .label1{
        background: #fd4368;
        color: white;
        border: 1px solid #fd4368;
        border-radius: 3px;
        border: none;
    }
    .shop_box4 .label3{
        border: none;
        color:red;
    }
    .shop_box5{
        border-top:1px solid #eee;
        margin-top:7px;
        padding-top:5px;
    }
    .shop_box5>div:first-child{
        float:left;
        width:70%;
    }
    .shop_box5>div:first-child>div{
        float:left;
    }
    .shop_box5>div:first-child>div:first-child{
        width:10%;
        background: #de6d71;
        border: 1px solid #de6d71;
        border-radius: 2px;
        color: white;
        box-sizing: border-box;
        text-align: center;
    }
    .shop_box5>div:first-child>div:last-child{
        width:90%;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
    .shop_box5>div:last-child{
        float:right;
        width:30%;
        text-align: right;
    }



</style>
