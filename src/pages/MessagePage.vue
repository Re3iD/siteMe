<template>
  <div class="wraper">
      <div class="msgMain">
          <div v-for="(item,index) in chatArr" :key="index" class="msg">
              <h4><i class="fas fa-user-secret"></i>{{item.username}}</h4>
              <span>{{item.chatMsg}}</span>
              <h6>{{new Date().toLocaleString()}}</h6>
          </div>
      </div>
      <button-mob @click="formState = false" v-show="formState" class="open"><i class="far fa-keyboard"></i></button-mob>
      <div v-show="!formState" class="form-group">
            <form @submit.prevent>
                <fieldset >
                    <legend>Don't forget your encryption</legend>
                <terminal-input v-model="userName" placeholder="User"/>
            <terminal-input v-model="message" placeholder="Message" />
            <div class="btn-gr">
                <button-mob @click="createMsg"><i class="far fa-paper-plane"></i></button-mob>
                <button-mob @click="clear"><i class="far fa-trash-alt"></i></button-mob>
                <button-mob @click="formState = true"><i class="far fa-times-circle"></i></button-mob>
            </div>
            </fieldset>
            </form>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            loremArr: [],
            userArr: [],
            chatArr: [],
            userName: '',
            message: '',
            formState: true,
        }
    },
    methods:{
        clear(){
            this.chatArr=[]
        },
        createMsg(){
        
            const chatUser = {
                username: this.userName,
                chatMsg: this.message.replaceAll(/\w/g,'*')
            }
            if (!chatUser.chatMsg) return null;
            this.chatArr.unshift(chatUser)
            this.message= ''

        },
        getRandom(mult){
                   return Math.ceil(Math.random()*mult)
                   },
        fakeChat(){
            try{
            const lenObj = {
                lorem: this.loremArr.length-1,
                user: this.userArr.length-1,
                count: Math.ceil(this.loremArr.length/this.userArr.length)
            }
            const msgArr = [...this.loremArr].sort(_=> Math.random()-0.5)
            const getRandom = this.getRandom
            function getChatMsg(arr){
                const msg = arr[getRandom(lenObj.lorem)].title
                return msg
            }
             const chatUser = {
                    username: this.userArr[getRandom(lenObj.user)].name,
                    chatMsg: []
                } 
               chatUser.chatMsg = getChatMsg(msgArr)
                return chatUser
            }
            catch(e){
                console.log(e)
            }
        },
        timeout(){
            setInterval(()=>{
                const obj = this.fakeChat()
                return this.chatArr.unshift(obj)
            },this.getRandom(13000))
        },
        renderChat(){
            
            for(let i=0;i<this.getRandom(1);){
                this.timeout()
                i++
            }
        },



      async fetchData(){
            const random = Math.ceil(Math.random()*10) 
            try{
                const lorem = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${random*5}`,{
                        params:{
                            _limit: random*5
                        }
                    })
                    const users = await axios.get(`https://jsonplaceholder.typicode.com/users?_limit=${random*2}`,{
                        params:{
                            _limit: random*2+3
                        }
                    })
                    this.loremArr = lorem.data
                    this.userArr = users.data
            }catch(e){
                console.log('fuck, just hold on ethernet',e)
            }
        }
    },
    mounted(){
        this.renderChat()
        this.fetchData()
    },
    watch:{
        chatArr:{
            handler: function (val){
                if(val.length > 9){
                    this.chatArr.splice(-1,1)
                }
            },
            deep:true
        }
    }
}
</script>

<style scoped>
.open{
    position: absolute;
    z-index: 300;
    right: 1vw;
    font-size: 2em;
}
    .wraper{
        width: 100%;
        height: 100vh;
        color:rgba(22, 117, 35, 0.7);
        text-shadow: #36d650 0 0 0.5px, #3edf54 0.5px 0.5px 0.5px;
        z-index: 0;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .msgMain{
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:flex-start;
        z-index: 1;
    }
    .msg{
        display: flexbox;
        max-width: 60vw;
        height: auto;
        border: 2px solid darkgreen;
        margin-top: 1vh;
        margin-left: 1vh;
        clear: both;
        padding: 0.5vh;
    }
    .msg h6{
        border-top:2px solid darkgreen;
        font-size: 1vh;
        font-weight: 100;
        text-align: end;
    }
    .form-group{
        z-index: 100;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 35%;
        background:transparent;
        font-size: 1.2rem;
    }
    .form-group fieldset{
        background: black;
        width: 90%;
        height: auto;
        margin: auto;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: darkgreen solid 2px;
    }
    .btn-gr{
        background:transparent;
        height: fit-content;
        font-size:1.2em;
        width: 72vw;
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-grow: 25%;
        flex-shrink: 1;
        justify-content: space-around;
        margin-top:3px;
    }
</style>