<template>

  <div >
    <section  style="border-bottom: none !important">
      <b-container fluid class="bv-example-row hello ">
        <b-row >
          <b-col >
            <div  >samsakmskasmkasmka555</div>
          </b-col>
          <b-col >
           <p class="p-class">Paragraph - <span class="scroll-s">Scroll happened!</span></p>
          </b-col>
        </b-row>
        <b-row>
          <b-col >
            <HeadePage />
          </b-col>
        </b-row>
 
        <b-row>
         <b-col cols="12 ps-0 pe-0">
           <b-container  class="ps-0 pe-0 container-home ">
             <b-row>
                <b-col
            cols="12"
            lg="6"
            class="d-flex  justify-content-end flex-column ps-5 pe-5"
          >
            <div class="home-banner">
              <div
                class="
                  d-flex
                  align-items-center
                  justify-content-right
                  flex-column
                "
              >
                <h1>PEE ONLINE</h1>
                <h2>
                  PROGRAMA DE ESPECIALIZACIÓN 
                  PARA EJECUTIVOS
                </h2>
              </div>
              <hr class="line" />
              <h4>Conoce nuestras 9 áreas</h4>
              <ul class="list-title">
                <li>Administración y Dirección de Personas</li>
                <li>B2B</li>
                <li>Finanzas</li>
                <li>Energía</li>
                <li>Marketing</li>
                <li>Minería</li>
                <li>Operaciones y Logística</li>
                
                <li>Salud</li>
                <li>Tecnologías de Información</li>
                
                
                
              </ul>
              <div>
                <b-container class="ps-0 pe-0 pb-3">
                  <b-row>
                    <b-col sm="2" cols="4">
                      <div class="h-100 init">
                        <span>inicio</span>
                      </div>
                    </b-col>
                    <b-col sm="10" cols="8">
                      <div class="section-content2">
                  <div class="section-1">18</div>
                  <div class="section-2">
                    <div class="init-date">
                      <span>de octubre</span>
                      
                    </div>
                  </div>
                </div>
                    </b-col>
                  </b-row>
                </b-container>
                
              </div>
            </div>
          </b-col>
          <b-col
            cols="12"
            lg="6"
            class=" col-form"
            id="form-home"
            
          >
            <FormHome />
          </b-col>
             </b-row>
           </b-container>
         </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="areas-section ">
      <b-container>
        <b-row>
          <b-col>
            <div class="subtitles">
              Areas
            </div>
          </b-col>
        </b-row>
          <b-row class="d-flex justify-content-center" >
           <b-col cols="12" lg="4"  sm="6" class="pl-0 pr-0">
            <div class="flip-card" >
              <div class="flip-card-inner">
                <div class="flip-card-front bg-administracion">
                  <router-link class="nav-link" :to="{
                    name: 'administracion_page'
                  }"
                    ><h2>Administración y <br />
                    Dirección de <br />
                    Personas</h2></router-link
                  >
                </div>
         
              </div>
            </div>
          </b-col>

           <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
            <div class="flip-card" >
              <div class="flip-card-inner">
                <div class="flip-card-front bg-b2b">
                       <router-link class="nav-link" :to="{
                    name: 'b2b_page'
                  }"
                    ><h2>Business to <br />
                    Business</h2>
                  </router-link>
                </div>
               
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
            <div class="flip-card" >
              <div class="flip-card-inner">
                <div class="flip-card-front bg-finanzas">
                  <router-link class="nav-link" :to="{
                    name: 'finanzas_page'
                  }"
                    ><h2>Finanzas</h2>
                    
                    </router-link
                  >
                </div>
                
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
            <div class="flip-card" >
              <div class="flip-card-inner">
                <div class="flip-card-front bg-energia">
                  <router-link class="nav-link"  :to="{
                    name: 'energy_page'
                    
                  }" 
                    ><h2>Energía</h2>
                    
                </router-link>
                </div>
                
              </div>
            </div>
     
          </b-col>

        <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
                    <div class="flip-card" >
                      <div class="flip-card-inner">
                        <div class="flip-card-front bg-marketing">
                              <router-link class="nav-link" :to="{
                            name: 'marketing_page'
                          }"
                            ><h2>Marketing</h2></router-link
                          >
                            
                          
                        </div>
                       
                      </div>
                    </div>
                  </b-col>
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
            <div class="flip-card" >
              <div class="flip-card-inner">
                <div class="flip-card-front bg-mineria">
                     <router-link class="nav-link" :to="{
                    name: 'mineria_page'
                  }"
                    ><h2>Minería</h2></router-link
                  >
                </div>
                
              </div>
            </div>
          </b-col> 
     
               
        </b-row>
      </b-container>
    </section>
     <section class="profesores-section ">
      <b-container>
        <b-row>
          <b-col class="mt-5">
            <div class="content-subtitle ">
              <div class="img-number">
              <img src="../assets/home/areas/salud/kv-1.jpg" alt="" >
            </div>
            <div class="subtitles">
              Profesores
            </div>
            </div>
           </b-col>
              </b-row>
           
        
      </b-container>
      <b-container>
       
            <b-row>   
            <b-col >
              <agile :options="myOptions">
        <div class="slide profesor-1">
            <h3>slide 1</h3>
        </div>
        
       <div class="slide profesor-2">
            <h3>slide 2</h3>
        </div>
        <div class="slide profesor-3">
            <h3>slide 3</h3>
        </div>
        <div class="slide profesor-4">
            <h3>slide 4</h3>
        </div>
        
        <div class="slide profesor-5">
            <h3>slide 5</h3>
        </div>
    </agile>
          </b-col>
        </b-row>
        
      </b-container>
    </section>
 
    
 
 
    <FooterPage />
   

    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
import HeadePage from "../components/HeadePage.vue";
import FormHome from "../components/FormHome";
import FooterPage from "../components/FooterPage";

export default {
  name: "HomeView",
  props: {
    msg: String,
  },
  components: {
    FormHome,
    FooterPage,
    HeadePage,
  },
  data () {
    return {
        myOptions: {
            navButtons: false,
            slidesToShow: 1,
            
            responsive: [
               
                {
                    breakpoint: 800,
                    settings: {
                        dots: false,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 380,
                    settings: {
                        dots: false,
                        slidesToShow: 2,
                    }
                },
                
               
            ]
        }
    }
}
  
};
const $ = require('jquery');
// Lo declaramos globalmente


</script>


<style lang="stylus" scoped>
@import '../styles/home.styl';

.BackTo {
  display none;
  background-color pink
}

.BackTo a {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-top: 2px;
}
.subtitles{
  font-size 32px;
  font-weight bold;
  padding-bottom 60px;
  position absolute;
  display: inline-block
}
.img-number{
  position:absolute;
  top: -220px;
  left: 0px
}
.areas-section {
  padding 120px 0px
}
.profesores-section {

  background-color blue;
  padding 120px 0px;
  overflow hidden;
  .content-subtitle{
    position relative;
    display inline-block;
  }
  .profesor-1{
    background-image: url('../assets/home/areas/salud/kv-1.jpg')!important;
  }
  .profesor-2{
    background-image: url('../assets/home/areas/energia/kv-1.jpg')!important;
  }
  .profesor-3{
    background-image: url('../assets/home/areas/salud/kv-1.jpg')!important;
  }
  .profesor-4{
    background-image: url('../assets/home/areas/energia/kv-1.jpg')!important;
  }
  .profesor-5{
    background-image: url('../assets/home/areas/salud/kv-1.jpg')!important;
  }
}
</style>