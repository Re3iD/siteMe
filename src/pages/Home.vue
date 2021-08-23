<template>
  <div class="parallax">
    <div @mouseenter="check" class="parallax-bg">
      <div class="conteiner">
        <info-tab :item ="item" v-for="item in randomArr" 
        class="zero"
        :key="item.id"
        ></info-tab>
      </div>
    </div>
  </div>
  
</template>

<script>
import InfoTab from "../components/InfoTab.vue"
import img1 from "@/img/HTML.png"
import img2 from "@/img/VUE.jpg"
import img3 from "@/img/react.jpg"
import img4 from "@/img/Noninfo.gif"


export default {
  components: { InfoTab },

  
 data(){
  return{ items: [
     {id:0,title:'STANDART',body:'В комплект STANDART входит знания HTML, CSS, Нативного JS',imgSrc:img1},
        {id:1,title:'Vue.JS',body:'Надежный и быстрый фреймворк, что нравится мне до глубины души',imgSrc:img2},
        {id:2,title:'React.JS',body:'"Безопасность наше все"- так говорят в документации создатели React',imgSrc:img3},
        {id:3,title:'Coming soon',body:'Я надеюсь тут будет Node.JS||Angular||C#',imgSrc:img4},
        {id:4,title:'Coming soon',body:'Я надеюсь тут будет Node.JS||Angular||C#',imgSrc:img4},
        {id:5,title:'Coming soon',body:'Я надеюсь тут будет Node.JS||Angular||C#',imgSrc:img4},
   ]}  
   },
  methods:{
    check(el){
      let bg = el.target
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x *100 + 'px, -' + y * 500 + 'px)';
});
    },
  gallery(){
    console.log(this.$refs['element_0'])
  }
  },
  computed:{
    randomArr(){
    return  this.items.sort(()=>Math.random()-0.5)
    }
  }
  
}
</script>

<style scoped>
*{
  overflow:hidden;
}
.container{
  position:relative;
  display: inline-flex;
  margin-top: 8vh;
  
}

.parallax {
  width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    z-index: 0;
}
.zero{
  margin-left:5%;
}
.parallax-bg {
  overflow: hidden;
    position: absolute;
    background-image: url("../img/Pict-BG.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 120%;
    height: 170%;
    transition: all 0.1s ease;  
}
.btn-gr{
  position: absolute;
  top: 90%;
  left: 33.8%;
  transform: translateX(-66.2%);
  
  display:flex;
  flex-direction: row;
  margin: auto;
  z-index:20;
}


</style>
