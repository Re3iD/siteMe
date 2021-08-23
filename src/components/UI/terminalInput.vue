<template>
  <input class="input"
  :value="modelValue"
  @input="updateVal"
  type="text"
  />
</template>

<script>
export default {
name:'terminal-input',
props:{
    modelValue:{
        type:[String,Number]
    }
},
methods:{
    updateVal(event){
        this.$emit('update:modelValue',event.target.value)
    }
}
}
</script>

<style>
    .input{
        border:darkgreen solid 2px;
        outline: none;
        background: transparent;
        width: 70vw;
        height: 3.5vh;
        color:rgba(22, 117, 35, 0.7);
        text-shadow: #36d650 0 0 0.5px, #3edf54 0.5px 0.5px 0.5px;
        padding: 0 3px;
    }
</style>