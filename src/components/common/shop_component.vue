<template>
  <div class="shopComponent" :style="{height: getHeight()}">
      <div>
          <ul>
              <li v-for="(data,index) in dataList" :class="{active: data.index==activeIndex}" @click="changeActive(data.index)">
                  <i v-if="index=='sell_hot'" class="icon iconfont icon-hothuorererexiao"></i>
                  <i v-if="index=='sale'" class="icon iconfont icon-youhui"></i>
                  {{data.name}}
              </li>
          </ul>
      </div>
      <div class="listbox">
          <div v-for="(data,index) in dataList" :id="data.index" class="libox">
              <div><span>{{data.name}}</span> {{data.title}}</div>
              <ul>
                  <li v-for="food in data.data">
                      <div><img :src="food.img" /></div>
                      <div class="food_right">
                          <div>{{food.name}}</div>
                          <div>{{food.text}}</div>
                          <div>月售{{food.sellNum}} 好评率{{food.grade}}</div>
                          <div>
                              <div>¥{{food.price}}</div>
                              <div>
                                  <span v-on:click="deleteFood(food)" v-show="food.num>0">-</span>
                                  <span v-show="food.num>0">{{food.num}}</span>
                                  <span v-on:click="addFood(food,$event)">+</span>
                              </div>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
      <!-- <shopcart ref="Shopcart" style="display:none;"></shopcart> -->
  </div>
</template>

<script>
import Shopcart from '@/components/common/shopcart'
export default {
  name: 'shopComponent',
  data () {
    return {
      activeIndex: '0',
      boxHeiArr: []
    }
  },
  props: [ 'dataList' ],
  computed: {
  },
  components: {
   Shopcart
  },
  beforeCreate: function () {
  },
  mounted: function() {
    var boxLen = document.getElementsByClassName('libox').length;
    var sum = 0;
    for(var i=0; i<boxLen; i++){
      sum += document.getElementsByClassName('libox')[i].offsetHeight;
      this.boxHeiArr[i] = sum;
    }
    // console.log(this.boxHeiArr)
    //绑定listbox的滚动事件
    this.$nextTick(function () {
     document.getElementsByClassName('listbox')[0].addEventListener('scroll', this.scrollEvent)
    })

  },
  methods: {
    getHeight () {
      return document.body.clientHeight + 'px'
    },
    //选择商品类型
    changeActive (index) {
      this.activeIndex = index
      var hei = 0
      for(var i=0; i<index; i++){
        var key = i+''
        hei += document.getElementById(key).offsetHeight
      }
      // console.log(hei)
      document.getElementsByClassName('listbox')[0].scrollTop = hei
    },
    scrollEvent () { //判断滚动到哪类商品
      var scrTop = document.getElementsByClassName('listbox')[0].scrollTop;
      if(scrTop<this.boxHeiArr[0]-50){
        this.activeIndex = 0;
      }else{
        for(var i=1; i<this.boxHeiArr.length; i++){
          if(scrTop>=this.boxHeiArr[i-1] && scrTop<=this.boxHeiArr[i]){
            if(i != this.activeIndex){
              this.activeIndex = i;
            }
          }
        }
      }
    },
    addFood(food,e){ //添加商品（将数据发送给父组件）
      this.$emit('getFood',{type: 'add',data: food,tar: e.target});
    },
    deleteFood(food){ //删除商品（将数据发送给父组件）
      food.num--;
      if(food.num == 0){
         this.$emit('getFood',{type: 'delete',data: food})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .shopComponent{
        padding-top: 20px;
        width: 100%;
        box-sizing: border-box;
    }
    .shopComponent:after{
        content: "";
        height:0;
        line-height: 0;
        visibility: hidden;
        display: block;
        clear: both;
    }
    .shopComponent>div:first-child{
        width:20%;
        float:left;
        background: #f3f3f3;
        height: 100%;
    }
    .shopComponent>div:first-child li{
        text-align: center;
        background: #f3f3f3;
        font-size: 13px;
        color:#777;
        display: inline-block;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-decoration: none;
    }
    .shopComponent>div:first-child .active{
        background: white;
        color: black;
    }
    .shopComponent>div:first-child .active i{
        color: red;
    }
    .shopComponent>div:last-child{
        width:80%;
        height: 100%;
        float:left;
        overflow-y: auto;
        font-size: 12px;
        color: #777;
    }
    .shopComponent>div:last-child>div{
        text-align: left;
        padding: 6px;
    }
    .listbox>.libox>div:first-child>span{
        font-size: 13px;
        color: black;
    }
    .libox li{
        padding: 5px;
    }
    .libox li:after{
        content: "";
        height:0;
        line-height: 0;
        visibility: hidden;
        display: block;
        clear: both;
    }
    .libox li>div:first-child{
        float:left;
        width:30%;
        padding-top: 5px;
    }
    .libox li>div:first-child img{
        width:90%;
        height: auto;
    }
    .libox li>div:last-child{
        float:left;
        width:70%;
    }
    .libox .food_right>div:first-child{
        color:black;
        font-size: 15px;
    }
    .libox .food_right>div:nth-child(2){
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .libox .food_right>div:last-child>div:first-child{
        float:left;
        width: 50%;
        font-size: 18px;
        font-weight: 500;
        color:#de5c46;
    }
    .libox .food_right>div:last-child>div:last-child{
        float:left;
        width: 50%;
        text-align: right;
    }
    .libox .food_right>div:last-child>div:last-child span{
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
    .libox .food_right>div:last-child>div:last-child span:first-child{
        border: 1px solid  #2a90f2;
        color: #2a90f2;
        background: white;
    }
    .libox .food_right>div:last-child>div:last-child span:nth-child(2){
        font-size: 15px;
        background: none;
        color: black;
        font-weight: 400;
    }

</style>
