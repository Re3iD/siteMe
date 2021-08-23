<template>
  <div class="bg">
      <div id="info"><div class="terminal">
          <div>
              <h1 class="info-head">
                <h2> == FRONT INDUSTRIES UNIFIED OPERATING SYSTEM ==</h2>
                <h2> == COPYRIGHT 2020-2022 FRONT INDUSTRIES ==</h2>
                <h2>  -- SERVER {{Math.round(Math.random()*10)}} --</h2>
              </h1>
              <div v-show="showData.attent"  class="attent">
                  <span>-- PEGI INFO --</span>
                  <p v-if="showData.translate">ДАННЫЙ ВЕБ САЙТ МОЖЕТ ВЫЗВАТЬ 
УТРАТЫ ВЕРЫ В ЧЕЛОВЕЧЕСТВО И ЧУВСТВО ПРЕКРАССНОГО, А ТАК ЖЕ ПРИСТУПЫ РВОТЫ, ЭППИЛЕПСИИ, РАК, ЖЕЛАНИЕ НАПИТЬСЯ ЧТОБЫ ЗАБЫТЬ ЭТОТ УЖАС И СОБЫТИЕ КЛАССА  КЕТТЕР // ДАННЫЕ УДАЛЕНЫ //. ЗАКРЫВАЯ ДАННЫЙ БЛОК ВЫ АВТОМАТИЧЕСКИ СОГЛАШАЕТЕСЬ И ПРИНИМАЕТЕ ВСЕ ПОСЛЕДСТВИЯ В ВИДЕ НЕМИНУЕМОЙ СМЕРТИ ЧУВСТВА ПРЕКРАСНОГО У АВТОРА, БОЛЬ В ГЛАЗАХ, СМЕРТЬ. СОДЕРЖАНИЕ ПРЕДСТАВЛЯЕТ ИЗ СЕБЯ ИЗДЕВАТЕЛЬСТВОМ НАД НТМL  И СSS. ДА БЛАГОСЛОВИ ВАС ГОСПОДЬ!</p>
                  <p v-else>THIS WEBSITE MAY CALL
LOSS OF FAITH IN HUMANITY AND FEELING BEAUTIFUL, AS WELL AS VOMITING, EPILEPSY, CANCER, DRINKING TO FORGET THIS HORROR AND KETTER-CLASS EVENT // DATA EXPUNGED. BY CLOSING THIS UNIT YOU AUTOMATICALLY AGREE AND ACCEPT ALL CONSEQUENCES IN THE FORM OF PERMANENT DEATH THE AUTHOR'S FINE FEELING, EYE PAIN, DEATH. THE CONTENT IS A PUBLISHING OVER HTML AND CSS.<br>LORD BLESS YOU!</p>
              <terminal-button @click="showAnyData(1)" class="btn">Translate</terminal-button>
              <terminal-button @click="showAnyData(2)" class="btn">Close</terminal-button>
              </div>
              <div v-show ="showData.menu" class="menu">
                  <terminal-button class="btn" @click="showAnyData(2)">Notice</terminal-button>
                  <terminal-button class="btn" @click="showAnyData(3)">Authorization</terminal-button>
              </div>
              <div  class="auth" v-show="showData.auth" >
                  <div class="authState"><h3>USER:_Admin_</h3><h3>PASSWORD:  <span>{{(!arka)?'  START HACKING':'  HACKED'}}</span></h3></div>
                  <div class="authTab">
                  <div  class="grid">
                  <div  class="codeTab"  id="elemTab1" v-for="(arr,index) in compAuthArr" :key="index">
                    <span class="itemAu" v-for="(item,index) in arr" :key="index">|    {{item}}    |</span>
                  </div>
                  </div>
                  <div class="grid">
                  <div class="codeTab" id="elemTab2" v-for="(arr,index) in compAuthArr.sort(()=>Math.random()-0.5)" :key="index">
                    <span @click="checkAuth($event)" class="itemAuth" v-for="(item,index) in arr.sort(()=>Math.random()-0.5)" :key="index">|    {{item}}    |</span>
                  </div>
                  </div>
                  </div>
                  <div class="btnGroup">
                      <terminal-button @click="showAnyData(4)">Hack Pentagon</terminal-button>
                     <terminal-button  @click="showAnyData(3)">Close</terminal-button> 
                  </div>
              </div>
              <div class="pentagon" v-show="showData.pentagon">
                  <div class="pentagon-container">
                      <ul class="hackerText" v-for="(item,index) in compHackStr" :key="index">
                          <li>{{item}}</li>
                      </ul>
                    <div class="log-info">
                     <p >CONGRATULATIONS YOU'RE HTML HACKER</p>
                     <p> YOU CAN USE NAVBAR</p>
                     <p>JUST CHECK HEAD</p>
                    </div>
                  </div>     
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import TerminalButton from '../components/UI/TerminalButton.vue'

export default {
  components: { TerminalButton },
  data(){
      return{
          showData:{
              attent: false,
              translate:false,
              menu:true,
              auth: false,
              pentagon:false
          },
          authArr:[],
          lengthConst: Math.max(4,Math.round(Math.random()*6)),
          textArr:[],
          count: 0,
          arka:false,
      }
  },
  
  methods:{
      showAnyData(ind){
          switch (ind){
              case 1:
          let copy = this.showData.translate
          this.showData.translate = !copy
         break
         case 2:
            let copy1 = this.showData.attent
            let copy2 = this.showData.menu
          this.showData.attent = !copy1
          this.showData.menu = !copy2
          break
          case 3:
        let copy3 = this.showData.auth
        let copy4 = this.showData.menu
          this.showData.auth = !copy3
          this.showData.menu = !copy4
          break
          case 4: 
          let copy5 = this.showData.auth
          let copy6 = this.showData.pentagon
            this.showData.auth = !copy5
            this.showData.pentagon = !copy6
            this.$store.commit('setNavbar')
          }
      },
      checkAuth(e){
          let elem = e.target
          let elemText = elem.textContent
          if (this.textArr.includes(elemText)){
              elem.style.background = 'darkgreen';
              this.count+=1
              console.log(this.count)
              if (this.count>=5){
                this.arka = true
                console.log(this.arka)
              }
          }else{
              return null;
          }
      }
      },
  computed:{
      compAuthArr(){
          const lenConst = this.lengthConst
          const createArr = ()=>{
              let arr = [...Array(lenConst)].map(_=>{
              let randSymb = Math.max(34,Math.ceil(Math.random()*133))
              return String.fromCharCode(randSymb)
           })
           return arr.join('')
          }
            
        return this.authArr = [...Array(lenConst*2)].map(_=>[...Array(lenConst)].map(_=>createArr()))

    
      },
      compHackStr(){
          const lenConst = this.lengthConst
          const random = Math.ceil(Math.random()*3)
          const createArr = ()=>{
              let arr = [...Array(lenConst+random)].map(_=>{
              let randSymb = Math.max(34,Math.ceil(Math.random()*133))
              return String.fromCharCode(randSymb)
           })
           return arr.join(' ')
      }
        let arrHack = []
      for (let i=0;i<10;i++){
      const hackStr = [...Array(30)].map(_=>[...Array(lenConst)].map(_=>createArr()))
      arrHack.push(hackStr.join(' '))
      }
      return arrHack}
  },
  watch:{
      'showData.auth': function(newVal){
          if (!newVal) return null;
          const elements = document.getElementsByClassName('itemAu')
            const constanta = (this.lengthConst*2)*this.lengthConst;
            let count;
            for (let i=0;i<=4;i++){
                let randomaizer = Math.ceil(Math.random()*constanta)
                if(count !== randomaizer){
                    let elem = elements[randomaizer]
                    this.textArr[i] = elem.textContent
                    elem.style.background = 'darkgreen'
                   // console.log(elem)
                }else{
                    //console.log('zzz')
                    i-=1
                    return null
                }
            }
            console.log(this.textArr)
      }
  }
}
</script>


<style scoped>
.info-head{
    font-size: 2vw;
    display: flex;
    flex-direction: column;
}
.log-info{
    font-size: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: inherit;
    margin-left: 4vw;
}
.hackerText{
    display: block;
    position: relative;
    width: 4%;
    height:140%;
    height: fit-content;
    animation: hacker 30s linear 0.01s infinite;
    animation-fill-mode: forwards;
    left:1vw;
    font-size: 1em;
    letter-spacing: 2px;
}

@keyframes hacker{
    0%{
        top:-300px;
    }
    to{
        top: -10px;
    }
}

.pentagon{
    display: flex;
    justify-content: center;
    align-items: center;
    width:70vw;
    height: 60vh;
    border: 2px solid darkgreen;
    margin: auto;
}
.pentagon-container{
    width: 90%;
    height: 90%;
    border: 2px solid darkgreen;
    position: relative;
    display: flex;
    flex-direction: row;
}

.btnGroup{
    display: flex;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
}
.authState{
    margin-left:5%;
}
.authState span{
    animation-name: hack;
    animation-duration: 0.15s;
    animation-iteration-count: infinite;
}
@keyframes hack{
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
        text-shadow: seagreen;
    }
    100%{
        text-shadow:none;
        opacity: 0;
    }
}
.authTab{
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    border:2px darkgreen solid;
    margin-inline: 5%;
    margin-top: 5vh;
}
.grid{
    font-size: 18px;
    letter-spacing: 3px;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
    cursor: pointer;
}
.itemAuth:hover{
    background: darkgreen;
}
.btnAuth{
    margin: auto;
}
.menu{
    margin-top: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.btn{
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}
.attent{
    margin: auto;
    width: 800px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    text-align: center;
    font-size: 25px;
    justify-content: center;
    align-items: center;
}

.attent span{
    font-size: 40px;
    margin-bottom: 15px;
}
.bg{
    background: black;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color:rgba(22, 117, 35, 0.7);
    text-shadow: #36d650 0 0 1px, #3edf54 1px 1px 1px;
}
#info{
    overflow: hidden;
    border:10px rgba(241, 241, 241, 0.5) solid;
    border-top: 27px rgba(241, 241, 241, 0.5) solid;
    border-radius: 10px;
    width: 98%;
    height: 95%;
    background-blend-mode: saturation;
    background: linear-gradient(rgba(14, 31, 10, 0.7),rgba(14, 31, 10, 0.7));
}
h1{
    font-size: 45px;
    text-align: center;
}
.auth{
    margin-top: 5vh;
}



</style>