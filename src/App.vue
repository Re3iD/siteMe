<template>
  <div v-if="!mobile" @mousemove="checkShow($event)" class="app">
<transition name="fade">
    <navbar  v-show="showOrHide&&$store.state.navbar" class="nav"></navbar>
    </transition>
    <router-view></router-view>
    </div>
    <div v-else>
      <home-mob></home-mob>
    </div>
  
</template>
<script>
import Navbar from './components/Navbar.vue'
import HomeMob from "./pages/HomeMob.vue"
export default{
  components: { Navbar,HomeMob },
  data(){
    return{
    showOrHide: true,
    mobile: false
    }
  },
  
  methods:{
    checkShow(event){
        if(event.screenY<200) this.showOrHide = true
        if(event.screenY>200) this.showOrHide = false
    }
  },
  created(){
    if(screen.width<=900){
      this.mobile = true
    }else{
      this.mobile = false
    }
  }



}
</script>
<style>
*{
  overflow: hidden;
  padding: 0;
 
  margin: 0;
}
.app{
  background: black;
}
.nav{
  position:absolute;
  z-index: 2;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}


</style>
