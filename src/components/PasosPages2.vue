<template>
  <div>
    <div class="pasos-page" :style="cssVars">
      <b-container class="bv-example-row pasos-areas">
        <b-row no-gutters>
          <b-col>
            <p class="title ">Siguientes pasos</p>
          </b-col>
        </b-row >
        <b-row no-gutters>
          <b-col lg="4" cols="12">
            <div class="pasos-content">
              <Calendario :color="colorIcon"/>
              <p class="subtitle">Calendario</p>
              <p class="description-text">Del 18 de octubre al  <br>
                <span> 11 de diciembre</span>
                 </p>
              <!-- <p v-text="calendarioText" class="description-text"></p> -->
              <div class="vl"></div>
            </div>
             
          </b-col>
          <b-col lg="4" cols="12">
            <div class="pasos-content">       
            <Informes :color="colorIcon"/>
            <p class="subtitle">Informes e inscripciones</p>
            <p class="description-text">Informes@esan.edu.pe 
              <br>
              <span>Alonso de Molina 1652,</span>
              <br>
              <span>Monterrico, Surco </span>
              </p>
            </div>
          </b-col>        
          <b-col lg="4" cols="12">
             <router-link class="nav-link pdf" :to="{
                    name: 'admision_page'
                  }"
                    >            
              <div class="text-center ">
                <Admision :color="colorIcon"/>
                <p class="subtitle">Admisión</p>
                <p class="description-text">Postula</p>
              </div>
             </router-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Informes from './Icons/Informes'
import Calendario from './Icons/Calendario'
import Admision from './Icons/Admision'
export default {
  name: "PasosPages2",
  components:{
    Informes,
    Calendario,
    Admision
  },
  props: {
    bgColor: {
      type: String,
      default: "pink",
    },
    lineColor: {
      type: String,
      default: "pink",
    },
    colorIcon:{
      type: String,
      default: "pink",
    },
    calendarioText:{
      type:String
    },
    informeText:{
      type:String
    },
    folletoText:{
      type:String
    },
    admisionText:{
      type:String
    }
  },
  computed: {
    cssVars() {
      return {
        "--bg-color": this.bgColor,
        "--line-color": this.lineColor,
      };
    },
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';
.pdf
  text-decoration none !important
  color white !important
.subtitle
  font-family gt-pressura-bold
  padding-top 20px
.title
  text-align center
  font-size 30px
  font-family gt-pressura-bold
.pasos-content
  border-right: 2px solid var(--line-color);
  text-align center
  height: 190px;
.pasos-page {
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--bg-color);
}
.description-text
  font-family Raleway-Regular
.pasos-areas {
  padding: 50px 4px
  color white
  margin 0 auto 
  
}
  @media (min-width: 768px) and (max-width: 991px)
    .pasos-content 
      border-right: none
    
  @media ( max-width: 767px) 
    .pasos-content 
      border-right: none
      margin 0
      margin-top 25px
    // .folleto-content
    //   padding-top 25px
</style>