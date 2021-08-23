<template>
  <button><slot></slot></button>
</template>

<script>
export default {
name: 'button-mob'
}
</script>

<style scoped>
    button{
        width: 25%;
        background: transparent;
        border: none;
        font-size: 1.2rem;
        height: 100%;
        padding: 3px 0;
        color:rgba(22, 117, 35, 0.7);
        text-shadow: #36d650 0 0 0.5px, #3edf54 0.5px 0.5px 0.5px;
    }
    button:focus{
        background: darkgreen;
        color: black;
    }
</style>