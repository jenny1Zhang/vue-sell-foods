<template>
  <div class="scoreComponent">
      <div class="scoreTitle">
          <ul>
              <li v-for="(data,index) in scoreData.liList" :class="{active: index==activeIndex}" @click="changeActive(index)">
                 {{data.name}} {{data.num}}
              </li>
          </ul>
      </div>
      <div class="scorebox">
          <div v-for="(list,index) in scoreData.scoLists" :class="{active: index==activeIndex}">
              <ul>
                  <li v-for="data in list">
                      <div class="box1">
                          <div>
                              <div><img :src="data.userImg" /></div>
                              <div>
                                  <div>{{data.userName}}</div>
                                  <div>
                                      <div class="star">
                                          <span :style="{width:setScore(data.score)}"></span>
                                      </div>
                                      {{data.grade}}
                                  </div>
                              </div>
                          </div>
                          <div>{{data.time}}</div>
                      </div>
                      <div class="box2">{{data.text}}</div>
                      <div class="box3" v-if="data.img">
                          <img :src="data.img" />
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'scoreComponent',
  data () {
    return {
      activeIndex: 0,
    }
  },
  props: [ 'scoreData' ],
  mounted: function() {

  },
  methods: {
    changeActive(index){
      // console.log(index)
      this.activeIndex = index;

    },
    setScore(score){
      return score * 20 + '%'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .scoreComponent{

    }
    .scoreComponent .scoreTitle{
        padding: 10px 5px;
        border-bottom: 1px solid #f3f3f3;
    }
    .scoreComponent .scoreTitle ul:after{
        content: "";
        height:0;
        line-height: 0;
        visibility: hidden;
        display: block;
        clear: both;
    }
    .scoreComponent .scoreTitle li{
        float:left;
        font-size: 13px;
        color: #555;
        background: #ecf3fb;
        padding: 5px 7px;
        margin: 5px;
    }
    .scoreComponent .scoreTitle .active{
        background: #0e95ef;
        color: white;
    }

    .scorebox>div{
        display: none;
    }
    .scorebox>.active{
        display: block;
    }
    .scorebox li{
        padding: 10px 10px 15px;
        border-bottom: 1px solid #f3f3f3;
        font-size: 12px;
    }
    .scorebox .box1>div{
        float:left;
        width: 70%;
    }
    .scorebox .box1>div:last-child{
        text-align: right;
        width: 30%;
        padding: 6px;
        box-sizing: border-box;
        color: #999;
    }
    .scorebox .box1>div:first-child>div{
        float:left;
    }
    .scorebox .box1>div:first-child>div:last-child{
        text-align: left;
        padding-left: 12px;
    }
    .scorebox .box1:after{
        content: "";
        height:0;
        line-height: 0;
        visibility: hidden;
        display: block;
        clear: both;
    }
    .scorebox .box1 img{
        width: 30px;
        border-radius: 50%;
    }
    .scorebox .star{
        position: relative;
        display: inline-block;
        font-family: "iconfont" !important;
        font-size:12px;
        color:#ddd;
    }
    .scorebox .star:before{
        content: "\e642\e642\e642\e642\e642";
    }
    .scorebox .star>span{
        overflow: hidden;
        position: absolute;
        top:0;
        left:0;
        color:#ffbb12;
    }
    .scorebox .star>span:before{
        content: "\e642\e642\e642\e642\e642";
    }
    .box2{
        font-size: 14px;
        color: #333;
        padding: 7px 0;
    }
    .box3 img{
        width: 50%;
        height: auto;
    }
    .box2,.box3{
        padding-left: 42px;
        text-align: left;
    }

</style>
