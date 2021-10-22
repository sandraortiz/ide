<template>
  <div>
    <div class="cursos-page">
      <b-container  class="bv-example-row section-areas">
        <b-row no-gutters>
          <b-col>
            <p v-text="title" class="title-text-curso" ></p>
          </b-col>
        </b-row>
        <b-row no-gutters >
          <b-col cols="12" class="pl-0 pr-0">
            
            <ul class="navbar-nav ">
             <slot></slot>
          
            </ul> 
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "CursosPage",
  props: {
    title: {
      type: String,
      require: true,
    }
  },
 
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';
.title-text-curso
  font-family gt-pressura-bold
  font-size 30px
  padding-top 20px
  padding-bottom 20px
  
.cursos-page {
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
}

.navbar-nav {
  flex-direction: row;
  display flex;
  justify-content flex-start
  flex-wrap wrap 
}

.nav-link {
  padding-left: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: flex-end;
}


.section-areas {
  padding: 50px 0px;

}

section {
  border-bottom: 4px solid primary-pee;
}
@media ( max-width: 767px) 
  .section-areas 
    padding: 50px 25px;
    margin 0
  .title-text-curso
    line-height 30px 
    font-size 28px


</style>