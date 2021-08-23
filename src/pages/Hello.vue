<template>
  <div class="wraper">
    <div v-show="showState"  class="fgr">
      <img src="../img/logo.svg"/>
        <div  class="text-block">
            <span>Frontend</span>
            <span>O-This need</span>
            <span>R - for NORAD reference</span>
            <span>A - maybe that's mean Junior</span>
            <span>Development</span>
        </div>
      <button-mob @click="showState = false" class="btn">INFORMATION</button-mob>
    </div>
      <div v-show="!showState"  class="attent">
                  <span>-- PEGI INFO --</span>
                  <p v-if="translate">ДАННЫЙ ВЕБ САЙТ МОЖЕТ ВЫЗВАТЬ 
УТРАТЫ ВЕРЫ В ЧЕЛОВЕЧЕСТВО И ЧУВСТВО ПРЕКРАССНОГО, А ТАК ЖЕ ПРИСТУПЫ РВОТЫ, ЭППИЛЕПСИИ, РАК, ЖЕЛАНИЕ НАПИТЬСЯ ЧТОБЫ ЗАБЫТЬ ЭТОТ УЖАС И СОБЫТИЕ КЛАССА  КЕТТЕР // ДАННЫЕ УДАЛЕНЫ //. ЗАКРЫВАЯ ДАННЫЙ БЛОК ВЫ АВТОМАТИЧЕСКИ СОГЛАШАЕТЕСЬ И ПРИНИМАЕТЕ ВСЕ ПОСЛЕДСТВИЯ В ВИДЕ НЕМИНУЕМОЙ СМЕРТИ ЧУВСТВА ПРЕКРАСНОГО У АВТОРА, БОЛЬ В ГЛАЗАХ, СМЕРТЬ. СОДЕРЖАНИЕ ПРЕДСТАВЛЯЕТ ИЗ СЕБЯ ИЗДЕВАТЕЛЬСТВОМ НАД НТМL  И СSS. ДА БЛАГОСЛОВИ ВАС ГОСПОДЬ!</p>
                  <p v-else>THIS WEBSITE MAY CALL
LOSS OF FAITH IN HUMANITY AND FEELING BEAUTIFUL, AS WELL AS VOMITING, EPILEPSY, CANCER, DRINKING TO FORGET THIS HORROR AND KETTER-CLASS EVENT // DATA EXPUNGED. BY CLOSING THIS UNIT YOU AUTOMATICALLY AGREE AND ACCEPT ALL CONSEQUENCES IN THE FORM OF PERMANENT DEATH THE AUTHOR'S FINE FEELING, EYE PAIN, DEATH. THE CONTENT IS A PUBLISHING OVER HTML AND CSS.<br>LORD BLESS YOU!</p>
              <button-mob @click="translate = !translate" class="btn">TRANSLATE</button-mob>
              <button-mob @click="showState = true" class="btn">RETURN</button-mob>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            showState: true,
            translate: true
        }
    }
}
</script>

<style scoped>

.btn{
    margin-top: 2vh;
    width: fit-content;
    font-weight: 600;
    border: darkgreen solid 2px;
}
.wraper{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img{
    object-fit: cover;
    width: 70%;
    height: 70%;
}
.fgr{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
span::first-letter{
    
    font-size: 2rem;
}
.text-block{
    text-align: left;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin: auto;
}
span{
    
    font-size: 1.3rem;
}
.attent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
}
.attent span{
    font-size: 2rem;
}
.attent p {
    margin: 2vw;
    font-size: 1.2rem;
}
</style>