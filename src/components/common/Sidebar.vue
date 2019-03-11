<template>
    <div class="side-bar">
        <ul>
            <li>
                <router-link to="/Dashboard">
                    <i class="icon iconfont icon-shangjia"></i>
                    <span>首页</span>
                </router-link>
            </li>
            <li>
                <router-link to="/Orders">
                    <i class="icon iconfont icon-dingdan"></i>
                    <span>订单</span>
                </router-link>
            </li>
            <li>
                <router-link to="/Setting">
                    <i class="icon iconfont icon-wode"></i>
                    <span>我的</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
// import '@/assets/icon/iconfont.css'
export default{
  name: 'Sidebar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
    .side-bar{
        width:100%;
        height:40px;
        position:fixed;
        bottom:0;
        left:0;
        background:aliceblue;
    }
    ul{
        height:100%;
    }
    li{
        width:33.3%;
        height:100%;
        float:left;
        font-weight:600;
        font-size: 14px;
        cursor: pointer;
    }
    li a{
        display: block;
        height:100%;
        line-height: 40px;
        color:teal;
        text-decoration: none;
    }
    li a i{
        font-size:20px!important;
    }
    .active{
        background: white;
        color: dodgerblue;
    }

</style>
