<template>
  <div >
    <section  style="border-bottom: none !important">
      <b-container fluid class="bv-example-row hello ">
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
  
};
</script>


<style lang="stylus" scoped>
@import '../styles/home.styl';
</style>