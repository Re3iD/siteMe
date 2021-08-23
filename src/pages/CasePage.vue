<template>
  <div class="wraper">
          <div v-for="item in items" :key="item.id"  class="case-box">
            <i @click ="item.status=false" v-show="item.status" class="fas fa-folder"></i>
            <div v-show="!item.status" class="case">
                <h2>{{item.title}}</h2>
                <p>{{item.body}}</p>
                <button-mob @click="item.status = true"><i class="fas fa-window-close"></i></button-mob>
            </div>
          </div>
        <div class="help">
            <p>
                Just pick and read.<br> That's all i have or want to have!
            </p>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            items: [
                {id:1,title:'Standart',body: 'В комплект STANDART входит знания HTML, CSS, Нативного JS',status: true},
               {id:2,title:'React.JS',body: '"Безопасность наше все"- так говорят в документации создатели React',status: true},
               {id:3,title:'Vue.JS',body: 'Надежный и быстрый фреймворк, что нравится мне до глубины души',status: true},
               {id:4,title:'Unknown',body: 'Я надеюсь тут будет Node.JS||Angular||C#',status: true},
               ]
        }
    },
    methods:{
    
    }
}
</script>

<style scoped>
    .wraper{
        position: relative;
        width: 100%;
        height: 100%; 
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
    }
    .fas{
        z-index: 2;
    }
    .case-box{
        display: flex;
        flex-direction: column;
        min-width: 45vw;
        min-height: 45vw;
        font-size: 40vw;
        position: relative;
        align-items: center;
        justify-content: center;
        flex: 1 1 auto;
    }
    .case{
        position: absolute;
        top: 0;
        left: 0;
        font-size: 1rem;
        border: darkgreen solid 2px;
        min-width: 40vw;
        min-height: 40vw;
        text-align: center;
        justify-content: center;
        align-items: center; 
        background: black;  
        z-index: 4; 
    }
    .case p{
        margin-top: 2vw;
        margin-bottom: 2vw;
    }
    .help{
        width: 95%;
        height: fit-content;
        font-size: 2rem;
        border: 2px darkgreen solid;
        position: absolute;
        top: 40%;
        transform: translateY(-50%);
        text-align: center;
    }
    
    
</style>