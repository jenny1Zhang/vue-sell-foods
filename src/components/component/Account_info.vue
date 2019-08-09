<template>
  <div class="account_info">
      <heads :titleName="titleName" :isback=true></heads>
      <div class="photo">
          <div class="weightFont">头像</div>
          <div><img src="../../assets/img/user.png" /></div>
      </div>
      <div class="username">
          <div class="weightFont">用户名</div>
          <div class="grayFont">{{userName}}</div>
      </div>
      <div class="title">账户绑定</div>
      <div class="phone">
          <div class="weightFont"><i class="blueFont icon iconfont icon-shouji"></i>手机</div>
          <div class="grayFont">{{phone}}</div>
      </div>
      <div class="title">安全设置</div>
      <div class="set">
          <div>登录密码</div>
          <div class="blueFont">修改</div>
      </div>
      <div class="set">
          <div>小额免密支付</div>
          <div class="blueFont">未设置</div>
      </div>
      <div class="out" @click="logout">退出登陆</div>
  </div>
</template>

<script>
import Heads from '@/components/common/head'
import store from "@/vuex/store"
export default {
  name: 'AccountInfo',
  data () {
    return {
      titleName: '账户信息',
      userName: localStorage.username,
      phone: localStorage.phone
    }
  },
  components: {
    Heads
  },
  methods: {
    logout () {
      store.commit('logoutFuc')
      localStorage.isLogin = false
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .account_info{
        width: 100%;
        height: 100%;
        background: #f7f7f7;
    }
    .account_info>div{
        font-size: 15px;
        background: white;
        padding:7px 10px;
        border-bottom: 1px solid #f7f7f7;
    }
    .account_info>div:after{
        content: "";
        height: 0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear: both;
    }
    .account_info>div>div{
        float:left;
        width:50%;
    }
    .account_info>div>div:first-child{
        text-align: left;
    }
    .account_info>div>div:last-child{
        text-align: right;
    }
    .photo img{
        width:55px;
        height:55px;
        border-radius: 50%;
    }
    .photo>div:first-child{
        height:55px;
        line-height: 55px;

    }
    .account_info .title{
        background: #f7f7f7;
        font-size: 12px;
        text-align: left;
    }

    .weightFont{
        font-weight: 600;
    }
    .grayFont{
        color: #666;
    }
    .blueFont{
        color: #0b8de3;
    }
    .out{
        color: #e17d51;
        font-weight: 600;
        margin-top:20px;
    }

</style>
