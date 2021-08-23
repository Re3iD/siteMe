<template>
  <div class="wraper">
      <p>
          THIS BLOCK CONTAINS INFORMATION ABOUT WHO CREATED THIS HORROR AND MAY BE SUPPORTING IT. BELOW ARE HIS CONTACTS
      </p>
      <div class="content-block">
      <div class="content-box">
             <a target="_blank" href="https://t.me/pqtno"><i class="fab fa-telegram"></i></a>
      </div>
      <div class="content-box">  
             <a target="_blank" href="https://github.com/Re3iD?tab=repositories"><i class="fab fa-git-square"></i></a>
      </div>
      <div class="content-box">
        <a target="_blank" href="https://vk.com/re3id"><i class="fab fa-vk"></i></a>
    
      </div>
      <div class="content-box">
               <a href="tel: +79826329102"> <i class="fas fa-mobile"></i></a>

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wraper{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

}
.wraper p{
    font-size: 1.2em;
    width: 90%;
    text-align: center;
    margin-top: 1vh;
}
.content-box{
    display: flex;
    margin-top: 2vh;
    flex-direction: column;
    font-size: 4em;
    align-items: center;

}
.content{
    font-size: 3vh;
}
a{
    text-decoration: none;
}
a:link{
    color:transparent;
}
a:visited{
    color: darkslategray;
    opacity: 0.6;
}
.content-block{
    margin-top: 10vh;
    }
</style>

