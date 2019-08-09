<template>
  <div id="headbox">
     <div id="back" v-if="isback" @click="goBack"><i class="icon iconfont icon-xiazai6"></i><span>返回</span></div>
     <div id="headtitle">{{titleName}}</div>
  </div>
</template>

<script>
export default {
  name: 'heads',
  data () {
    return {
    }
  },
  props: [ 'titleName', 'isback' ],
  beforeCreate: function () {
    // console.log(22)
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #headbox{
        width:100%;
        height:50px;
        position: relative;
        background:white;
        box-sizing: border-box;
        padding:0;
    }
    #back{
        height:100%;
        line-height: 50px;
        position:absolute;
        left:15px;
        top:0;
        font-size:22px;
        color: #0b8de3;
    }
    #back>span{
      font-size: 16px;
      margin-left: 3px;
    }
    #headtitle{
        width:100%;
        height:100%;
        line-height: 50px;
        text-align: center;
        box-sizing: border-box;
        font-weight: 700;
        font-size:18px;
    }

</style>
