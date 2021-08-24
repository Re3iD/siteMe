<template>
  <div class="landing">
      <div class="main">
          <div class="main-head">
              <h1>F.O.R.A.D.</h1>
              <img class="logo" src="../img/logo.svg"/>
              <h2>Emergency<br>Warning<br>System</h2>
            </div>
          <navbar-mob></navbar-mob>
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import NavbarMob from '../components/NavbarMob.vue'
export default {
    components:{
        NavbarMob
    },
    mounted(){
    this.$router.push('/cases')
 }
}
</script>

<style>
.logo{
    object-fit: contain;
    width: 10vw;
    height: 10vh;
    margin-right: 3vw;
}
.landing{
    width: 100vw;
    height: 100vh;
    background: rgb(8, 15, 9);
    display: flex;
    justify-content: center;
    align-items: center;
}
.main{
    border: solid darkgreen 2px;
    width: 95vw;
    height: 95vh;
    color:rgba(22, 117, 35, 0.7);
        text-shadow: #36d650 0 0 0.5px, #3edf54 0.5px 0.5px 0.5px;
}
.main-head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-inline: 3%;
}
.main-head h1{
    font-size: 1.7rem;
}
.main-head h2{
    font-size: 1.2rem;
}
</style>