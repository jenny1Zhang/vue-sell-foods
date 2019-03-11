<template>
  <div class="login">
      <form>
          <legend class="title">用户登陆</legend>
          <div class="form-group">
              <label>用户名:</label>
              <input type="text" placeholder="请输入用户名" v-model="username" />
          </div>
          <div class="form-group">
              <label>密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
              <input type="password" placeholder="请输入密码" v-model="password" />
          </div>
          <div class="form-group">
              <label>手&nbsp;机&nbsp;号:</label>
              <input type="number" placeholder="请输入手机号" v-model="phone" />
          </div>
          <div class="form-group">
              <div class="btn" @click="toLogin">登录</div>
          </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      phone: ''
    }
  },
  methods: {
    toLogin: function () {
      // console.log(this.username, this.password)
      localStorage.username = this.username
      localStorage.phone = this.phone
      this.$router.push({ path: '/Dashboard' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login{
        width: 100%;
        height: 100%;
        background: #eee;
        font-size: 16px;
    }
    .title{
        font-size: 24px;
        padding:20px;
    }
    form{
        width: 100%;
        padding: 50px 0;
        margin: auto;
    }
    .form-group{
        padding: 10px 0;
    }
    input{
        border:1px solid #ccc;
        padding:3px 0px;
        font-size:14px;
        outline: none;
        text-indent: 6px;
    }
    .btn{
        display: inline-block;
        border:1px solid #ccc;
        font-size:16px;
        background: white;
        padding:5px 20px;
        border-radius: 8px;
        outline: none;
    }
</style>
