<template>
  <div class="headbox">
     <div class="back" v-if="isback" @click="goBack">&lt;</div>
     <div class="headtitle">{{titleName}}</div>
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
    .headbox{
        width:100%;
        height:50px;
        position: relative;
        background:white;
        box-sizing: border-box;
    }
    .back{
        height:100%;
        line-height: 50px;
        position:absolute;
        left:15px;
        top:0;
        font-size:22px;
        color: #0b8de3;
    }
    .headtitle{
        width:100%;
        height:100%;
        line-height: 50px;
        text-align: center;
        box-sizing: border-box;
        font-weight: 700;
        font-size:18px;
    }

</style>
