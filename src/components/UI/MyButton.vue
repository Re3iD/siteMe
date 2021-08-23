<template>
  <button class="closing-button"><slot></slot></button>
</template>

<script>
export default {
    name: 'button-st'
}
</script>

<style scoped>
.closing-button {
  text-decoration: none;
  display: inline-block;
  margin: 10px;
  color: gray;
  box-shadow: 0 0 0 2px white;
  padding: 10px 0;
  width: 150px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  overflow: hidden;
}
.closing-button span {
  font-family: 'Montserrat', sans-serif;
  position: relative;
  z-index: 5;
}
.closing-button:before, .closing-button:after {
  content: "Push It";
  position: absolute;
  top: 5;
  bottom: 0;
  right: 0;
  left: 0;
}
.closing-button:before {
  transform: translateX(-100%);
  background: white;
  transition: transform .3s cubic-bezier(.55, .055, .675, .19);
}
.closing-button:after {
  color:white;
  background: #413ad5;
  transform: translateX(100%);
  transition: transform .3s cubic-bezier(.16, .73, .58, .62) .3s;
}
.closing-button:hover:before, .closing-button:hover:after {
  color:white;
  transform: translateX(0);
}

</style>

