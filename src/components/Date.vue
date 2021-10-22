<template>
  <div class="date-class">
   <b-container>
       <b-row>
           <b-col>
             <h1>01</h1>
           </b-col>
           <b-col>
               <p>
                   inicio
               </p>
               <p>
                   junio
               </p>
           </b-col>
       </b-row>
   </b-container>
  </div>
</template>

<script>
    export default {
  name:"Date",
  
}
</script>
<style lang="stylus" scoped>

 @import "../styles/main.styl"
h1 
  font-size 100px
  line-height 80px
  color white  
  font-weight bold
p
  color white  
.date-class
  background-color primary-pee
  padding 20px
  width 100%
  height 120px

  


</style>