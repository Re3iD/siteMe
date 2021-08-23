<template>
  <div class="navig">
      <button-mob @click="$router.push('/cases')"><i class="fas fa-laptop-house"></i></button-mob>
      <button-mob @click="$router.push('/msg')"> <i class="fas fa-broadcast-tower"></i></button-mob>
      <button-mob @click="$router.push('/contacts')"><i class="fas fa-satellite-dish"></i></button-mob>
      <button-mob @click="$router.push('/hello')"><i class="fas fa-info-circle"></i></button-mob>
  </div>
</template>

<script>
import buttonMob from './UI/button-mob.vue'
export default {
  components: { buttonMob },
  name: 'navbar-mob'

}
</script>

<style>
    .navig{
        background: transparent;
        border: solid 2px darkgreen;
        border-collapse: collapse;
        width: 100%;
        height: fit-content;
        border: darkgreen solid 2px;
        display: flex;
        flex-direction: row;
        flex-grow: 25%;
        flex-shrink: 1;
        justify-content: space-around;
    }
</style>