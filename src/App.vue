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


const arr = [1,2,2,2,1,3,4,4,5]
console.log(arr.unique())
const list = [2,4,3,5]
const listArr = [[1,2,3],[4,5,6],[7,8]]
let a = list.reduce((pre,cur)=>{
  return pre+ cur
},1)
console.log(listArr.reduce((pre,cur)=>{
  console.log(pre,cur)
  return pre.concat(cur)
},[]))
const strArr =  ['a','b','c','c','d','d','e','b']
const b= strArr.reduce((pre,cur)=>{
  if(!pre[cur]){
    pre[cur] = 1
  }else{
    pre[cur] += 1
  }
  return pre
},{})
console.log(b)
const c = strArr.reduce((pre,cur)=>{
  return !pre.includes(cur) ? pre.concat([cur]) : pre
},[])
console.log(c)
</script>

<template>
<h1>hello word</h1>
  <el-button type="primary" size="large" @click="handleClick(234,456)">点击按钮</el-button>
</template>

<style scoped>

</style>
