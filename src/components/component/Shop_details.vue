<template>
  <div class="shopDetails">
      <heads :titleName="titleName" :isback=true></heads>
      <div class="shop_img" :style="{backgroundImage: 'url(' + require('../../assets/img/shop_background.png') + ')' }">
          <img :src="shopdetail.backgroundImg" />
      </div>
      <div class="shop_introduce">
          <div>{{shopdetail.name}}&nbsp;<i class="icon iconfont icon-jiantou1"></i></div>
          <div class="intro">
              <span>评价4.8</span>&nbsp;&nbsp;
              <span>月售1140单</span>&nbsp;&nbsp;
              <span>商家配送约36分钟</span>&nbsp;&nbsp;
          </div>
          <div class="discount">
              <div><span>满减</span>满40减8</div>
              <div>4个优惠<i class="icon iconfont icon-jiantou"></i></div>
          </div>
          <div>
              公告：1.餐厅外送时间30分钟送达 2.大份订餐（20份以上）需要加长备餐时间
          </div>
      </div>
      <div class="shop_options">
          <div v-for="(opt, index) in shop_options" :class="{active: index===isOption}" @click="changeOption(index)">
              <span>{{opt}}</span>
          </div>
      </div>
      <div class="shop_options_box">
          <div :class="{active: isOption===0}">
              <div class="shop_adv"><img src="../../assets/img/shop_adv.png" /></div>
              <div class="shop_recom">
                  <p>商家推荐</p>
                  <ul>
                      <li class="recom">
                          <div><img src="../../assets/img/shop_food1.png" /></div>
                          <div>吉味拼饭</div>
                          <div>月售507 好评95%</div>
                          <div>
                              <div>¥38.5</div>
                              <div><span>+</span></div>
                          </div>
                      </li>
                      <li class="recom">
                          <div><img src="../../assets/img/shop_food2.png" /></div>
                          <div>吉味拼饭</div>
                          <div>月售507 好评95%</div>
                          <div>
                              <div>¥38.5</div>
                              <div><span>+</span></div>
                          </div>
                      </li><li class="recom">
                          <div><img src="../../assets/img/shop_food1.png" /></div>
                          <div>吉味拼饭</div>
                          <div>月售507 好评95%</div>
                          <div>
                              <div>¥38.5</div>
                              <div><span>+</span></div>
                          </div>
                      </li><li class="recom">
                          <div><img src="../../assets/img/shop_food2.png" /></div>
                          <div>吉味拼饭</div>
                          <div>月售507好评95%</div>
                          <div>
                              <div>¥38.5</div>
                              <div><span>+</span></div>
                          </div>
                      </li><li class="recom">
                          <div><img src="../../assets/img/shop_food1.png" /></div>
                          <div>吉味拼饭</div>
                          <div>月售507 好评95%</div>
                          <div>
                              <div>¥38.5</div>
                              <div><span>+</span></div>
                          </div>
                      </li>
                  </ul>
              </div>
              <shopComponent :dataList="shopdetail.order.foodList" v-on:getFood="getComFood"></shopComponent>
          </div>
          <div :class="{active: isOption===1}">
              <div class="score_title">
                  <div>4.8</div>
                  <div>
                      <div>商家评分</div>
                      <div class="star">
                          <span :style="{width:setScore(4.3)}"></span>
                      </div>
                  </div>
                  <div>
                      <div>味道</div>
                      <div>4.8</div>
                  </div>
                  <div>
                      <div>包装</div>
                      <div>4.8</div>
                  </div>
                  <div>
                      <div>配送</div>
                      <div>4.8</div>
                  </div>
              </div>
              <scoreComponent :scoreData="scoreLists"></scoreComponent>
          </div>
          <div :class="{active: isOption===2}">
              <div class="shopInfo1">
                  <div>配送信息</div>
                  <div>由商家配送提供配送，约36分钟送达，距离534m</div>
                  <div>配送费¥8</div>
              </div>
              <div class="shopInfo2">
                  <div>活动与服务</div>
                  <div>
                      <span>满减</span> 满40减8
                  </div>
                  <div>
                      <span>折扣</span> 折扣商品5折起
                  </div>
                  <div>
                      <span>首单</span> 新用户下单立减17元（不与其它活动共享）
                  </div>
                  <div>
                      <span>特价</span> 特价商品49.6元起
                  </div>
              </div>
          </div>
      </div>
      <shopcart ref="Shopcart" :foodList="foodlist" v-on:getFood="getComFood"></shopcart>
  </div>
</template>

<script>
import Heads from '@/components/common/head'
import ShopComponent from '@/components/common/shop_component'
import ScoreComponent from '@/components/common/score_component'
import Shopcart from '@/components/common/shopcart'
import store from '@/vuex/store'
import { mapState }  from 'vuex'
export default {
  name: 'ShopDetails',
  data () {
    return {
      shop_options: ['点餐', '评价', '商家'],
      isOption: 0,
      titleName: '商家详情',
      foodlist: []
    }
  },
  components: {
    Heads, ShopComponent, ScoreComponent, Shopcart
  },
  beforeCreate: function () {
    // console.log(this.shopdetail)
  },
  computed: {
    ...mapState(['shopDetailLists', 'scoreLists']),
    //匹配商家id,找到对应的商家data
    shopdetail () {
      for(var i=0; i<this.shopDetailLists.length; i++){
        if(this.shopDetailLists[i].id === this.$route.params.shopId){
          return this.shopDetailLists[i]
        }
      }
    }
  },
  mounted: function(){
    // console.log(this.shopdetail)
    var arr = this.shopdetail.order.foodList;
    var arrList = arr.choice_combo.data.concat(arr.sale.data,arr.sell_hot.data,arr.single_staple_food.data,arr.sweetmeats.data);
    // console.log(arrList)
    for(var i=0; i<arrList.length; i++){
        if(arrList[i].num>0){
            this.foodlist.push(arrList[i])
        }
    }
  },
  methods: {
    changeOption(index) {
      this.isOption = index;
    },
    setScore(score){
      return score * 20 + '%'
    },
    _drop(target){
        this.$nextTick(() => {
          this.$refs.Shopcart.drop(target);
        });
    },
    getComFood(food){
      // console.log(food,food.data,food.data.name)
      if(food.type == 'add'){ //商品+1
          for(var i=0; i<this.foodlist.length; i++){
              if(this.foodlist[i].name == food.data.name){
                  this.foodlist[i].num+=1;
                  this._drop(food.tar);
                  return
              }
          }
          food.data.num = 1;
          this.foodlist.push(food.data);
          this._drop(food.tar);
      }else if(food.type == 'delete'){ //商品-1
          for(var i=0; i<this.foodlist.length; i++){
              if(this.foodlist[i].name == food.data.name){
                  this.foodlist.splice(i,1);
              }
          }
      }else if(food.type == 'deleteAll'){ //清空商品
          for(var i=0; i<this.foodlist.length; i++){
              this.foodlist[i].num  = 0;
          }
          this.foodlist = [];
      }

    }
  },
  watch: {
    // foodlist: {
    //   handler(val, oldval){
    //     console.log(val, oldval)
    //   },
    //   deep: true
    // }
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .shopDetails{
        width: 100%;
        height: 100%;
    }

    .shop_img{
        width: 100%;
        height: 90px;
        position: relative;
    }
    .shop_img img{
        width:40px;
        height: 40px;
        position: absolute;
        bottom: -10px;
        left: 50%;
        margin-left: -20px;
    }

    .shopDetails .shop_introduce{
        padding: 20px 20px 10px;
        font-size: 12px;
        color: #999;
    }
    .shopDetails .shop_introduce>div{
        padding: 2px 0;
    }
    .shop_introduce>div:first-child{
        font-size: 18px;
        font-weight: 600;
        color:black;
    }
    .shop_introduce>div:first-child i{
        font-size: 12px;
    }
    .discount>div:first-child{
        float:left;
        width: 50%;
        text-align: left;
        color: black;
    }
    .discount>div:first-child>span{
        display: inline-block;
        background: #f0717c;
        color: white;
        padding: 0 3px;
        margin-right: 4px;
    }
    .discount>div:last-child{
        float:left;
        width: 50%;
        text-align: right;
    }
    .shop_introduce>.discount i{
        font-size: 10px;
        color: #bbb;
    }
    .shop_introduce>div:last-child{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-top: 5px!important;
    }

    .shop_options{
        border-bottom: 1px solid #eee;
    }
    .shop_options:after{
        content: "";
        height:0;
        line-height: 0;
        visibility: hidden;
        display: block;
        clear: both;
    }
    .shop_options>div{
        float:left;
        width: 33.33%;
        text-align: center;
        color: #999;
    }
    .shop_options>div>span{
        display: inline-block;
        padding: 8px 0;
    }
    .shop_options>.active>span{
        color:black;
        border-bottom: 2px solid #3a96e3;
    }

    .shop_options_box{
        padding: 5px 0px;
        margin-bottom: 48px;
    }
    .shop_options_box>div{
        display: none;
    }
    .shop_options_box>.active{
        display: block;
    }

    .shop_options_box .shop_adv img{
        width: 100%;
        height: auto;
    }
    .shop_options_box .shop_recom{
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
    }
    .shop_recom>p{
        padding: 0 15px;
        text-align: left;
        color: black;
    }
    .shop_options_box .shop_recom ul{
        white-space: nowrap;
    }
    .shop_options_box .shop_recom ul:after{
        content: "";
        height:0;
        line-height: 0;
        visibility: hidden;
        display: block;
        clear: both;
    }
    .shop_options_box .shop_recom li{
        display: inline-block;
        width: 32%
    }
    .shop_options_box .shop_recom li>div{
        width: 100%;
    }
    .shop_options_box .shop_recom li img{
        width: 70%;
        height: auto;
    }
    .shop_recom .recom{
        font-size: 12px;
        color: #777;
    }
    .shop_recom .recom>div:nth-child(2){
        font-size: 14px;
        color:black;
    }
    .shop_recom .recom>div:nth-child(3){
        font-weight: 100;
    }
    .shop_recom .recom>div:last-child>div{
        float:left;
        width:50%;
        font-size: 16px;
        color: #de5c46;
    }
    .shop_recom .recom>div:last-child>div:last-child{
        text-align: right;
    }
    .shop_recom .recom>div:last-child>div:last-child>span{
        display: inline-block;
        background: #2a90f2;
        color: white;
        width:17px;
        height:17px;
        border-radius: 50%;
        text-align: center;
        line-height: 17px;
        font-weight: 800;
        font-size: 18px;
    }

    .score_title{
        padding: 15px 0 25px;
        border-bottom: 5px solid #f3f3f3;
    }
    .score_title:after{
        content: "";
        height:0;
        line-height: 0;
        visibility: hidden;
        display: block;
        clear: both;
    }
    .score_title>div{
        float:left;
        width: 14%;
        font-size: 14px;
        color: #777;
    }
    .score_title>div:first-child{
        width: 24%;
        color: #fd6814;
        font-size: 40px;
    }
    .score_title>div:nth-child(2){
        width: 26%;
        padding: 5.5px 0;
    }
    .score_title>div:nth-child(4){
        width: 17%;
    }
    .score_title>div:last-child{
        width: 19%;
        border-left: 1px solid #eee;
        box-sizing: border-box;
    }
    .score_title>div>div:last-child{
        font-size: 22px;
        color: #555;
    }
    .shop_options_box .score_title>div>.star{
        position: relative;
        display: inline-block;
        font-family: "iconfont" !important;
        font-size:14px!important;
        color:#ddd;
    }
    .shop_options_box .score_title>div>.star:before{
        content: "\e642\e642\e642\e642\e642";
    }
    .shop_options_box .score_title>div>.star>span{
        overflow: hidden;
        position: absolute;
        top:0;
        left:0;
        color:#ffbb12;
    }
    .shop_options_box .score_title>div>.star>span:before{
        content: "\e642\e642\e642\e642\e642";
    }

    .shopInfo1,.shopInfo2{
        font-size: 12px;
        color: #666;
        text-align: left;
        padding: 12px 12px 15px;
        border-bottom: 6px solid #f3f3f3;
    }
    .shopInfo1>div{
        padding: 1px 0;
    }
    .shopInfo1>div:first-child{
        font-size: 14px;
        font-weight: 600;
        color: #333;
        padding:2px 0 7px;
    }
    .shopInfo2>div:first-child{
        font-size: 14px;
        font-weight: 600;
        color: #333;
        padding:2px 0 7px;
    }
    .shopInfo2>div{
        padding: 3px 0;
    }
    .shopInfo2>div>span{
        background: #e28371;
        color: white;
        padding: 1px 2px;
    }
    .shopInfo2>div:nth-child(4)>span{
        background: #74ad42;
    }
    .shopInfo2>div:last-child>span{
        background: #bc875f;
    }

</style>
