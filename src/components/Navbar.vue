<template>
<div class="cent">
  <button-st @click="$router.push('/home')">Home</button-st>
  <button-st @click="$router.push('/Intro')">Intro</button-st>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .cent{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgba(29, 32, 167, 0.2);
    height: 70px;
    
  }
</style>
