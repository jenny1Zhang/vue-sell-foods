<template>
  <div class="setting">
      <heads :titleName="titleName" :isback=false></heads>
      <div class="userInfo" @click="goAccountInfo">
          <div class="userImg">
              <img src="../../assets/img/user.png" />
          </div>
          <div class="userIn">
              <div class="username">{{userName}}</div>
              <div class="usernum">{{phone}}</div>
          </div>
          <div class="userright">&gt;</div>
      </div>
      <div class="userpacket">
          <div class="red-packet">
              <div><span>2</span>个</div>
              <div>红包</div>
          </div>
          <div>
              <div><span>20</span>个</div>
              <div>金币</div>
          </div>
      </div>
      <div class="advertisement">
          <div>
              <div>成为超级会员</div>
              <div>立送最高20元无门槛红包 &gt;</div>
          </div>
      </div>
      <div class="operation">
          <ul>
              <li @click="goAddress">
                  <div>
                      <i class="icon iconfont icon-dizhi"></i>
                      <span>我的地址</span>
                  </div>
                  <div class="op-right">&gt;</div>
              </li>
              <li>
                  <div>
                      <i class="icon iconfont icon-shouye"></i>
                      <span>金币商城</span>
                  </div>
                  <div class="op-right">&gt;</div>
              </li>
              <li>
                  <div>
                      <i class="icon iconfont icon-kefu"></i>
                      <span>我的客服</span>
                  </div>
                  <div class="op-right">&gt;</div>
              </li>
              <li>
                  <div>
                      <i class="icon iconfont icon-bianmaguize"></i>
                      <span>规则中心</span>
                  </div>
                  <div class="op-right">&gt;</div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Heads from '@/components/common/head'
export default {
  name: 'Setting',
  data () {
    return {
      titleName: '我的',
      userName: localStorage.username,
      phone: localStorage.phone
    }
  },
  components: {
    Heads
  },
  beforeCreate: function () {
    console.log(11)
  },
  methods: {
    goAccountInfo () {
      this.$router.push({ path: '/AccountInfo' })
    },
    goAddress () {
      this.$router.push({ path: '/MyAddress' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
    .setting{
        width:100%;
        height:100%;
        overflow: auto;
        margin-bottom: 50px;
    }

    .userInfo{
        width:100%;
        height:90px;
        background:aliceblue;
        padding:15px;
        box-sizing: border-box;
    }
    .userImg{
        width:60px;
        height:60px;
        float:left;
    }
    .userImg img{
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        border-radius: 50%;
    }
    .userIn{
        height:60px;
        padding-left:20px;
        float:left;
    }
    .userIn .username{
        height: 35px;
        line-height: 35px;
        font-size: 16px;
        font-weight: 600;
    }
    .userIn .usernum{
        height: 25px;
        line-height: 25px;
        font-size: 14px;
    }
    .userright{
        float:right;
        width: 20px;
        height:60px;
        line-height: 60px;
        font-size: 18px;
        font-weight: 600;
    }

    .userpacket{
        border-bottom:1px solid #eee;
    }
    .userpacket:after{
        content: "";
        height:0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear:both;
    }
    .userpacket>div{
        width:50%;
        text-align: center;
        float:left;
        font-size:14px;
        padding: 12px 0;
    }
    .userpacket .red-packet{
        border-right:1px solid #eee;
        box-sizing: border-box;
    }
    .userpacket>div>div:first-child{
        color:green;
    }
    .userpacket div span{
        font-size:22px;
        font-weight: 600;
    }
    .userpacket>.red-packet>div:first-child{
        color:red;
    }

    .advertisement{
        padding:20px 0 0;
        background:#eee;
    }
    .advertisement>div{
        padding:15px 0 ;
        /* background:#ecd68d; */
        background: -webkit-linear-gradient(left,#ecd68d,#fff2c1);
        background: -o-linear-gradient(left,#ecd68d,#fff2c1);
        background: -moz-linear-gradient(left,#ecd68d,#fff2c1);
        background: linear-gradient(left,#ecd68d,#fff2c1);
        padding-left:6%;
        text-align: left;
    }
    .advertisement>div>div{
        font-size: 18px;
        font-weight: 600;
    }
    .advertisement>div>div:first-child{
        font-size:14px;
        font-weight: 400;
        color:#666;
    }

    .operation{
        padding: 20px 0 2px;
        background:#eee;
    }
    .operation ul{
        width: 100%;
    }
    .operation ul li{
        width: 100%;
        height:42px;
        line-height: 42px;
        background:white;
        padding: 0 10px;
        box-sizing: border-box;
        margin-bottom:10px;
    }
    .operation ul li div{
        float:left;
    }
    .operation .op-right{
        float:right;
    }

</style>
