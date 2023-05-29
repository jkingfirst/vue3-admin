<script setup lang="ts">
function debounce (fn,delay){
  console.log(23)
  const that = this
  let timer = null
  return function (...rest){
    clearTimeout(timer)
    timer = setTimeout(function (){
      fn.apply(that,rest)
    },delay)
  }
}
function debounce2(fn,delay) {
  let timer = null
  let that = this
  return function (...rest){
    timer && clearTimeout(timer)
   if(!timer){
     fn.apply(that,rest)
   }
    timer = setTimeout(function (){
      timer =null
    },delay)
  }
}
const handle = (args)=>{
  console.log(args)
}
const handleClick = debounce2(function (...rest){
  handle(rest)
},1000)
</script>

<template>
<h1>hello word</h1>
  <el-button type="primary" size="large" @click="handleClick(234,456)">点击按钮</el-button>
</template>

<style scoped>

</style>
