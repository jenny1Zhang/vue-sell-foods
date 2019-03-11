<template>
  <div class="my_address">
      <heads :titleName="titleName" :isback=true></heads>
      <div class="addressList">
          <ul>
              <li class="address" v-for="addre in addressLists">
                  <div class="add1">
                      <span>{{addre.username}}</span>
                      <span>{{addre.sex}}</span>
                      <span>{{addre.phone}}</span>
                  </div>
                  <div class="add2">
                      <div>{{addre.address}}</div>
                      <div class="opt">
                          <i class="icon iconfont icon-xiugai"></i>
                      </div>
                      <div class="opt">
                          <i class="icon iconfont icon-cha"></i>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
      <div class="add">
          <i class="icon iconfont icon-jia"></i>
          <span>新增收货地址</span>
      </div>
  </div>
</template>

<script>
import Heads from '@/components/common/head'
import store from '@/vuex/store'
import { mapState } from 'vuex'
export default {
  name: 'MyAddress',
  data () {
    return {
      titleName: '我的地址'
    }
  },
  computed: {
    ...mapState(['addressLists'])
  },
  components: {
    Heads
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .my_address{
        width: 100%;
        height: 100%;
        background: #f7f7f7;
        overflow: auto;
        margin-bottom: 45px;
    }
    .addressList{
        border-top:1px solid #f7f7f7;
        background: white;
    }
    .address{
        padding:15px 10px 10px;
        border-bottom: 1px solid #f7f7f7;
        color: #666;
    }
    .address>div{
        text-align: left;
    }
    .add1>span:first-child{
        font-weight: 600;
        color: black;
    }
    .add2{
        font-size: 14px;
    }
    .add2:after{
        content: "";
        height: 0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear: both;
    }
    .add2>div:first-child{
        width:80%;
        float:left;
    }
    .add2 .opt{
        width:10%;
        float:left;
        text-align: center;
    }
    .add{
        width: 100%;
        padding: 10px 0;
        text-align: center;
        position: fixed;
        bottom:0;
        left:0;
        background: white;
        color: #0b8de3;
    }
    .add i{
        font-size: 18px;
    }

</style>
