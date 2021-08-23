<template>

  
  <div :style="{backgroundImage:`url(${item.imgSrc})`,}"  id="cont" ref="cont" class="container">
    <div class="inner">
      <h2>{{item.title}}<br>
      <span>{{item.body}}</span></h2>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    item:{
      type: Object,
      default: ()=>{}
    }
  },
  
    
    data(){
      return{
      }
  },
    
}
</script>

<style scoped>

  .container{
    position: relative;
    border-radius: 4px;
    border: rgba(219, 219, 219, 0.747) solid 7px;
    width: 400px;
    height: 500px;
    background: border-box no-repeat center/cover;
    background-position-x: center;
  }
  .inner{
    position: absolute;
    color:white;
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align:center;
  }
   h2{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 40px;
    color: transparent;
    -webkit-text-stroke: 0.3px white;
    opacity: 0;
  }
 h2:hover{
   opacity:1;
 }
  .bg-fon{
    width: 150%;
    height: 150%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .container:hover{
    outline: 7px solid  white;
    outline-offset: 2px;
  }
  .inner:hover{
    background-blend-mode: overlay;
    background: linear-gradient(rgba(50, 25, 161, 0.7),rgba(40, 101, 233, 0.7));
  }
</style>
