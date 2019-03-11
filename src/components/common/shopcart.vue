<template>
    <div class="shopcart">
        <div class="blackbox" v-show="isShowCar" @click="hideCar"></div>
        <div class="shopcar">
            <div class="ball-container">
                <div v-for="ball in balls">
                  <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
                    <div class="ball" v-show="ball.show">
                      <div class="inner inner-hook"></div>
                    </div>
                  </transition>
                </div>
            </div>
            <div class="car" v-show="isShowCar">
                <div>
                    <div>购物车</div>
                    <div><div @click="deleteAllFood"><i class="icon iconfont icon-delete"></i>清空</div></div>
                </div>
                <div class="foodbox" v-for="(food,index) in foodList">
                    <div>{{food.name}}</div>
                    <div>
                        <div>{{food.price}}</div>
                        <div>
                            <span @click="deleteFood(index)">-</span>
                            <span>{{food.num}}</span>
                            <span @click="addFood(index,$event)">+</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>餐盒</div>
                    <div>{{allNum}}</div>
                </div>
            </div>
            <div class="pay">
                <div @click="showCar">
                    <div>¥{{allMoney}}</div>
                    <div>另需配送费8元</div>
                </div>
                <div>去结算</div>
                <div :class="{active: foodList.length>0}" @click="showCar">
                    <i class="icon iconfont icon-gouwuche"></i>
                    <div class="num" v-if="foodList.length>0">{{allNum}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
  name: 'Shopcart',
  data () {
    return {
      isShowCar: false,
      balls: [
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
      ],
      dropBalls: [],
    }
  },
  props: ['foodList'],
  computed: {
    allMoney(){ //总金额
      var all = 0;
      for(var i=0; i<this.foodList.length; i++){
        all += (Number(this.foodList[i].price)+1);
      }
      return all;
    },
    allNum(){ //总个数
      var all = 0;
      for(var i=0; i<this.foodList.length; i++){
        all += this.foodList[i].num;
      }
      return all;
    }
  },
  mounted: function(){
  },
  methods: {
    showCar(){ //显示购物车
      if(this.foodList.length > 0){
          this.isShowCar = true;
      }
    },
    hideCar(){ //隐藏购物车
      this.isShowCar = false;
    },
    deleteAllFood(){ //清空（将数据发送给父组件）
      this.$emit('getFood',{type: 'deleteAll',data: []})
    },
    deleteFood(index){ //商品-1（将数据发送给父组件）
      // console.log(index,this.foodList[index])
      this.foodList[index].num--;
      if(this.foodList[index].num == 0){
        this.$emit('getFood',{type: 'delete',data: this.foodList[index]})
      }
    },
    addFood(index,e){ //商品+1（将数据发送给父组件）
      this.foodList[index].num++;
      this.drop(e.target)
    },
    drop(el) {
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i];
        if (!ball.show) {
          ball.show = true;
          ball.el = el;
          this.dropBalls.push(ball);
          return;
        }
      }
    },
    beforeDrop(el) {
        let count = this.balls.length;
        while (count--) {
          let ball = this.balls[count];
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect();
            let x = rect.left - 32;
            let y = -(window.innerHeight - rect.top - 22);
            el.style.display = '';
            el.style.webkitTransform = `translate3d(0,${y}px,0)`;
            el.style.transform = `translate3d(0,${y}px,0)`;
            let inner = el.getElementsByClassName('inner-hook')[0];
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
            inner.style.transform = `translate3d(${x}px,0,0)`;
          }
        }
    },
    dropping(el, done) {
        /* eslint-disable no-unused-vars */
        let rf = el.offsetHeight;
        this.$nextTick(() => {
          el.style.webkitTransform = 'translate3d(0,0,0)';
          el.style.transform = 'translate3d(0,0,0)';
          let inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform = 'translate3d(0,0,0)';
          inner.style.transform = 'translate3d(0,0,0)';
          el.addEventListener('transitionend', done);
        });
    },
    afterDrop(el) {
        let ball = this.dropBalls.shift();
        if (ball) {
          ball.show = false;
          el.style.display = 'none';
        }
    }
  }
}

</script>

<style scoped>
    .shopcart{
    }
    .blackbox{
        width: 100%;
        height: 100%;
        position: fixed;
        left:0;
        top:0;
        z-index: 1;
        background: #333;
        opacity: .5;
    }
    .shopcar{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background: white;
        z-index: 9;
        font-size: 15px;
    }
    .shopcar .car{
        max-height: 260px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .shopcar .car>div:after{
        content: "";
        height:0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear:both;
    }
    .shopcar .car>div>div{
        float: left;
        width: 50%;
        text-align: left;
        padding: 12px;
        box-sizing: border-box;
    }
    .shopcar .car>div:first-child{
        background: #f3f3f3;
        padding: 7px 10px;
        box-sizing: border-box;
        color: #777;
    }
    .shopcar .car>div:first-child>div{
        padding:0;
    }
    .shopcar .car>div:first-child>div:last-child{
        text-align: right;
    }
    .shopcar .car>div:first-child>div:last-child>div{
        display: inline-block;
    }
    .shopcar .car .foodbox{
        border: 1px solid #f7f7f7;
    }
    .shopcar .car .foodbox>div:first-child{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .shopcar .car .foodbox>div:last-child:after{
        content: "";
        height:0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear:both;
    }
    .shopcar .car .foodbox>div:last-child>div{
        float:left;
        width: 50%;
        font-size:18px;
    }
    .shopcar .car .foodbox>div:last-child>div>span{
        display: inline-block;
        width: 16px;
        height: 16px;
        text-align: center;
        line-height: 16px;
        font-size: 16px;
    }
    .shopcar .car .foodbox>div:last-child>div>span:first-child{
        border: 1px solid #2a90f2;
        border-radius: 50%;
        color: #2a90f2;
        font-size: 20px;
        font-weight: 600;
    }
    .shopcar .car .foodbox>div:last-child>div>span:last-child{
        background: #2a90f2;
        border-radius: 50%;
        color: white;
        font-size: 20px;
        font-weight: 600;
    }
    .pay{
        position: relative;
    }
    .pay>div:first-child{
        float:left;
        font-size: 14px;
        background: #47464b;
        width: 70%;
        text-align: center;
        padding: 7px 0 2px;
    }
    .pay>div:first-child>div:first-child{
        color: white;
    }
    .pay>div:first-child>div:last-child{
        color: #f3f3f3;
        font-size: 12px;
    }
    .pay>div:nth-child(2){
        float:left;
        padding: 12px 0;
        width: 30%;
        text-align: center;
        background: #3ac872;
        color: white;
    }
    .pay>div:last-child{
        width: 38px;
        height: 38px;
        padding: 0;
        background: #222124;
        color: #aaa;
        border-radius: 50%;
        position: absolute;
        left: 15px;
        top: -10px;
        border: 5px solid #47464b;
        line-height: 38px;
        text-align: center;
        box-sizing: content-box;

    }
    .pay>.active{
        background: #358fef!important;
        color: white!important;
    }
    .pay>div:last-child>i{
        font-size: 26px;
    }
    .pay>div:last-child .num{
        position: absolute;
        right: -5px;
        top: -3px;
        background: #ff5a2b;
        color: white;
        padding: 0;
        width: 16px;
        height: 16px;
        font-size: 12px;
        text-align: center;
        line-height: 16px;
        border-radius: 50%;
    }

    .ball{
        position: fixed;
        left: 32px;
        bottom: 22px;
        z-index: 200;
        transition: all 0.6s cubic-bezier(0.49, -0.29, 0.75, 0.41);
    }
    .inner{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #358fef;
        transition: all 0.6s linear;
    }


</style>
