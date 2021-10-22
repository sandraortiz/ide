<template>
    <li class="nav-item li-area">
      <a target="_blank" class="text" :href="linkCurso">
        <div class="box-area" :style="cssVars">
          <p class="title-curso" v-text="sectionName"></p>
          <p class="name-curso" v-text="cursoName"></p>
          <hr class="new4" :style="cssVars" />
          
                <img src="../assets/components/cursoList/shap/online.png" alt="">
          <p class="encargado" v-text="teacherName"></p>
          <p class="fecha" v-text="horarioName"></p>
        </div>
      </a>
  
    </li>
</template>

<script>
export default {
  name: "CursoList",
  props: {
   linkCurso:{
      type: String,
      require: true,
   } ,
   sectionName: {
      type: String,
      require: true,
    },
    cursoName: {
      type: String,
      require: true,
    },
    teacherName: {
      type: String,
      require: true,
    },
    horarioName: {
      type: String,
      require: true,
    },
    bgColor: {
      type: String,
      default: "pink",
    },
    lineColor: {
      type: String,
      default: "pink",
    },
  },
  computed: {
    cssVars() {
      return {
        "--bg-color": this.bgColor,
        "--line-color": this.lineColor,
      };
    },
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';

// .name-curso {
//   padding-bottom: 10px;
// }
.text
  color #212529
  text-decoration: none; /* no underline */

.name-curso
  font-size: 20px;
  font-family gt-pressura-bold
.title-curso 
  font-size: 15px;
  margin-block-end: 5px;
  font-family Raleway-Regular

.fecha {
  font-size: 14px;
  font-family Raleway-Regular
  margin-block-start: 0px
}

.encargado {
  padding-top 10px
  margin-block-end: 0px;
  font-size: 15px;
  font-family Raleway-Bold
}

hr.new4 {
  border: 1px solid var(--line-color);
  opacity: 1;
  margin-block-end: 0.2em;
}

.cursos-page {
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.nav-item {
  display: inline-block;
  max-width 374px;
  width: 100%!important;
  font-size: 24px;
  min-height: 70px;
  margin 0px 3px
}

a {
  color: white;
  width: 100%;
  height: 100%;
}

.navbar-nav {
  flex-direction: row;
  display flex;
  justify-content space-between
  flex-wrap wrap 
}

.nav-link {
  padding-left: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: flex-end;
}

.box-area {
  font-weight: bold;
  line-height: 23px;
  width: 100%;
  height: 217px;
  border: 1px solid  var(--bg-color);
  padding: 10px;
  
}

li {
  background: #DBDBDB;
  margin 0 3px 10px 3px!important
}

li:nth-child(odd) {
  background: white;
}

// .home-banner {
// height: 88vh;
// }
.section-areas {
  padding: 50px 0px;
  padding-top: 20px;
}

section {
  border-bottom: 4px solid primary-pee;
}
@media (min-width: 1200px) and (max-width: 1399px)
  .nav-item 
    max-width 373px;
    width: 100%!important;
@media (min-width: 992px) and (max-width: 1199px)
  .nav-item 
    max-width 311px;
    width: 100%!important;    
    
@media (min-width: 768px) and (max-width: 991px)
  .nav-item 
    max-width 353px;
    width: 100%!important;   
@media (max-width: 767px)
  .box-area
    height auto  

</style>