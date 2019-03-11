<template>
  <div class="full">
     <sidebar></sidebar>
     <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from '@/components/common/Sidebar'
export default {
  name: 'Login',
  data () {
    return {

    }
  },
  components: {
    Sidebar
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .full{
        width:100%;
        height:100%;
    }

</style>
