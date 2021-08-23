<template>
  <button  class="termbtn"><span></span><slot></slot></button>
</template>

<script>
export default {

}
</script>

<style scoped>
.termbtn{
    background: none;
    color:rgba(22, 117, 35, 0.7);
    text-shadow: #36d650 0 0 1px, #3edf54 1px 1px 1px;
    font-size: 30px;
    border: none;
    width: 230px;
    border-top: 1px solid rgba(22, 117, 35, 0.7);
    border-bottom: 1px solid rgba(22, 117, 35, 0.7);
}
.termbtn:hover{
    background: rgba(22, 117, 35, 0.7);
    color: transparent;
    width: fit-content;
}
.termbtn:hover::before{
    content: '> ';
}
.termbtn:hover::after{
    content: ' <';
}

</style>