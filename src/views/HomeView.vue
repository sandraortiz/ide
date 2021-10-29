<template>
  <div>
    <section style="border-bottom: none !important">
    
            <HeadePage />
        
      <b-container fluid class="bv-example-row hello">
        

        <b-row class="h-100">
          <b-col cols="12 ps-0 pe-0" class="h-100 d-flex align-items-end">
            <b-container class="ps-0 pe-0 container-home">
              <b-row>
                <b-col
                  cols="12"
                  lg="6"
                  class="d-flex justify-content-end flex-column ps-5 pe-5"
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
                      <h1>LOREM IPSUM
SIC AMET </h1>
                      <h2>PROGRAMA DE ESPECIALIZACIÓN PARA EJECUTIVOS</h2>
                    </div>
                    <h4>Subtítulo lorem ipsum sic ametlorem ipsum sicamet lorem
ipsum sic amet. Ipsum sic ametlorem ipsum sic amet. Lorem 
ipsum sic amet.</h4>
                   
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
                <b-col cols="12" lg="6" class="col-form" id="form-home">
                  <div id="form-content" class="form-class">
                    <b-form
                      v-on:submit.prevent="sendInformationRequest"
                      v-if="show"
                      class="form-g"
                    >
                      <b-form-group class="all-btn">
                        <h1>
                          Regístrate <br />
                          aquí:
                        </h1>
                       
                      </b-form-group>
                      <b-form-group
                        class="all-btn"
                        id="input-group-3"
                        label-for="input-3"
                      >
                        <select
                          class="form-select"
                          aria-label="ciudad_de_residencia"
                          name="ciudad_de_residencia"
                          id="input-3"
                          v-model="usuario.area"
                          required
                        >
                          <option value="">¿Qué área te interesa?</option>
                          <option value="Aeronáutica agricola">
                            Aeronáutica agricola
                          </option>
                          <option value="Alimentaria">Alimentaria</option>
                          <option value="Pesca y agricultura">
                            Pesca y agricultura
                          </option>
                          <option value="Turismo rural">Turismo rural</option>
                          <option value="Veterinaria">Veterinaria</option>
                        </select>
                      </b-form-group>
                      <b-form-group
                        class="all-btn"
                        id="input-group-2"
                        label-for="input-2"
                      >
                        <b-form-input
                          id="input-2"
                          v-model="usuario.nombres"
                          placeholder="Nombres"
                          required
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        class="all-btn"
                        id="input-group-4"
                        label-for="input-4"
                      >
                        <b-form-input
                          id="input-4"
                          v-model="usuario.apellido"
                          placeholder="Apellidos"
                          required
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        class="all-btn"
                        id="input-group-5"
                        label-for="input-1"
                      >
                        <b-form-input
                          id="input-1"
                          v-model="usuario.email"
                          type="email"
                          placeholder="Correo electrónico"
                          required
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        class="all-btn"
                        id="input-group-6"
                        label-for="input-6"
                      >
                        <b-form-input
                          id="input-6"
                          v-model="usuario.telefono"
                          placeholder="Teléfono"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        class="all-btn"
                        id="input-group-12"
                        v-slot="{ ariaDescribedby }"
                      >
                        <b-form-checkbox-group
                          v-model="usuario.acepta_politica_de_privacidad"
                          id="checkboxes-4"
                          :aria-describedby="ariaDescribedby"
                          required class="pb-5"
                        >
                          <b-form-checkbox class="conditions" value="0">
                          </b-form-checkbox>
                          <span class="text-condiciones">
                            Acepto las
                            <a @click="toggleModal">
                             Acepto los términos y condiciones de <br>
tratamiento para mis datos personales.
                            </a>
                          </span>
                        </b-form-checkbox-group>
                        <b-button class="btn all-btn" type="submit">Solicitar Información</b-button>
                      </b-form-group>
                      
                    </b-form>
                    <b-modal
                      ref="my-modal"
                      hide-footer
                      title="Política de Protección de Datos Personales"
                    >
                      <div class="d-block text-justify modal1">
                        <h3 class="text-center">
                          Política de Protección de Datos Personales
                        </h3>
                        <p>
                          De conformidad con la Ley N° 29733, Ley de Protección
                          de Datos Personales, el usuario da su consentimiento
                          para el tratamiento de los datos personales que son
                          facilitados en el presente formulario o por cualquier
                          medio desde el momento de su ingreso o utilización del
                          portal. Asimismo, el usuario consiente que la
                          Universidad ESAN pueda ceder estos datos a terceros
                          para los fines expuestos a continuación.
                        </p>
                        <p>
                          Estos serán incorporados en el banco de datos de
                          usuarios de la Universidad ESAN, para utilizarlos en
                          seguimiento de un eventual proceso de matrícula, envío
                          de publicidad mediante cualquier medio y soporte,
                          envío de invitaciones a actividades convocadas por
                          ESAN o sus socios comerciales, para fines
                          estadísticos, gestiones institucionales y
                          administrativas; y se mantendrán mientras sean útiles
                          para que la Universidad pueda prestar y ofrecer sus
                          servicios y darles trámite.
                        </p>
                        <p>
                          El usuario podrá ejercer los derechos de acceso,
                          rectificación, oposición y cancelación de los datos
                          personales escribiendo a datospersonales@esan.edu.pe o
                          a la siguiente dirección: <br />
                          Oficina de Protección de Datos Personales, Universidad
                          ESAN. Alonso de Molina 1652, Monterrico, Surco, Lima -
                          Perú
                        </p>
                      </div>
                      <b-container fluid class="modal2">
                        <b-row class="mb-1 text-center">
                          <b-col cols="5">
                            <b-button class="btn-m" block @click="hideModal"
                              >Cerrar</b-button
                            >
                          </b-col>
                          <b-col cols="7">
                            <b-button class="btn-m" block @click="accept"
                              >Acepto esta política</b-button
                            >
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-modal>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="areas-section">
      <b-container>
        <b-row>
          <b-col>
            <div class="subtitles">EXPLORA TU CAMINO</div>
          </b-col>
        </b-row>
        <b-row class="d-flex justify-content-center">
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front bg-administracion">
                  <router-link
                    class="nav-link"
                    :to="{
                      name: 'administracion_page',
                    }"
                    ><h2>
                      Administración y <br />
                      Dirección de <br />
                      Personas
                    </h2></router-link
                  >
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-col lg="4" class="pb-2">
              <a href="#form-content">
                 <b-button @click="alimentaria"  >Alimentaria</b-button>
              </a>

             </b-col>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="profesores-section">
      <b-container>
        <b-row>
          <b-col class="mt-5">
            <div class="content-subtitle">
               <div class="img-number ">
                1
              </div>
              <div class="subtitles">VENTAJAS COMPETITIVAS</div>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col>
            <agile :options="myOptions">
             
              <div class="slide ">
                <img src="../assets/home/expositores/example.png" alt="">
                <h3>Mg. William Arteaga Donayre</h3>
                <p>Exviceministro de Políticas Agrarias en Ministerio de Agricultura.</p>
              </div>

              <div class="slide ">
                <img src="../assets/home/expositores/example.png" alt="">
                <h3>Mg. Jorge Sandoval Ramírez</h3>
                <p>Director Ejecutivo del Programa de Compensaciones para la Competitividad – AGROIDEAS.</p>
              </div>
              <div class="slide ">
                <img src="../assets/home/expositores/example.png" alt="">
                <h3>Mg. Walther Reátegui Vela</h3>
                <p>Ha sido Gerente General del Banco Agropecuario – AGROBANCO.</p>
              </div>
              <div class="slide ">
                <img src="../assets/home/expositores/example.png" alt="">
                  <h3>Mg. William Arteaga Donayre</h3>
                <p>Exviceministro de Políticas Agrarias en Ministerio de Agricultura.</p>
              </div>

              <div class="slide ">
                <img src="../assets/home/expositores/example.png" alt="">
                  <h3>Mg. William Arteaga Donayre</h3>
                <p>Exviceministro de Políticas Agrarias en Ministerio de Agricultura.</p>
              </div>
              <div class="slide ">
                <img src="../assets/home/expositores/example.png" alt="">
                  <h3>Mg. William Arteaga Donayre</h3>
                <p>Exviceministro de Políticas Agrarias en Ministerio de Agricultura.</p>
              </div>
              <div class="slide ">
                <img src="../assets/home/expositores/example.png" alt="">
                  <h3>Mg. William Arteaga Donayre</h3>
                <p>Exviceministro de Políticas Agrarias en Ministerio de Agricultura.</p>
              </div>
              <div class="slide ">
                <img src="../assets/home/expositores/example.png" alt="">
                  <h3>Mg. William Arteaga Donayre</h3>
                <p>Exviceministro de Políticas Agrarias en Ministerio de Agricultura.</p>
              </div>
              <div class="slide ">
                <img src="../assets/home/expositores/example.png" alt="">
                  <h3>Mg. William Arteaga Donayre</h3>
                <p>Exviceministro de Políticas Agrarias en Ministerio de Agricultura.</p>
              </div>
            </agile>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="certificate-section">
      <b-container>
        <b-row>
          <b-col class="col-semicirculo">
            <div class="semicirculo mb-5">a</div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="content-subtitle">
              <div class="subtitles">CERTIFICADOS A NOMBRE DE

                <div>
                  <img src="../assets/home/sections/certificate/logo.png" alt="">
                </div>
              </div>
              <div class="img-number text-right">
                2
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="three-section">
      <b-container>
        <b-row>
          <b-col class="col-semicirculo" >
            <div class="semicirculo mb-5">a</div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="content-subtitle">
               <div class="img-number ">
                3
              </div>
              <div class="subtitles">PROGRAMAS PARA SECTORES <br>
ESPECIALIZADOS</div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="four-section">
      <b-container>
        <b-row>
          <b-col class="col-semicirculo">
            <div class="semicirculo mb-5">a</div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="content-subtitle">
              <div class="subtitles">
                <b-container>
                  <b-row>
                    <b-col>
                      <h3>TEMAS ACTUALES DE <br>
APLICACIÓN INMEDIATA</h3>
                    </b-col>
                    <b-col>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nesciunt dignissimos recusandae accusantium
                        repellendus qui provident molestiae veritatis. Velit
                        fuga, quam provident sapiente assumenda veritatis nobis
                        aliquid beatae quae non mollitia?
                      </p>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
              <div class="img-number text-right ">
                4
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
     <section class="networking-section">
      <b-container>
        <b-row>
          <b-col class="col-semicirculo">
            <div class="semicirculo mb-5">a</div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="content-subtitle">
              <div class="subtitles">
                <b-container>
                  <b-row>
                    <b-col>
                      <div>NETWORKING</div>
                    </b-col>
                    
                  </b-row>
                </b-container>
              </div>
              <div class="img-number  ">
                5
              </div>
            </div>
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
import FooterPage from "../components/FooterPage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../main";
export default {
  name: "HomeView",
  props: {
    msg: String,
  },
  components: {
    FooterPage,
    HeadePage,
  },
  data() {
    return {
      countryName: false,
      usuario: {
        email: "",
        nombres: "",
        apellido: "",
        telefono: "",
        area: "",
        acepta_politica_de_privacidad: [],
      },
      show: true,
      myOptions: {
        navButtons: true,
        slidesToShow: 1,
        autoplay: true,
        

        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              dots: true,
            },
          },
          {
            breakpoint: 380,
            settings: {
              dots: false,
              slidesToShow: 2,
            },
          },
        ],
      },
    };
  },
  methods: {
    async sendInformationRequest() {
      const f = new Date();
      const fechaformat =
        f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
      const hora = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();
      const docRef = await addDoc(collection(db, "informacion"), {
        email: this.usuario.email,
        name: this.usuario.nombres,
        apellido: this.usuario.apellido,
        celular: this.usuario.telefono,
        fecha: fechaformat,
        hora: hora,
        area: this.usuario.area,
      });
      console.log("Document written with ID: ", docRef.id);
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    accept() {
      const data = ["0"];
      this.$refs["my-modal"].toggle("#toggle-btn");
      this.usuario.acepta_politica_de_privacidad =
        this.usuario.acepta_politica_de_privacidad.concat(data);
    },
    alimentaria() {
      // var bus = new Vue();
      this.usuario.area="Alimentaria"
    },
  },
};
const $ = require("jquery");
// Lo declaramos globalmente
</script>


<style lang="stylus" scoped>
@import '../styles/home.styl';
@import '../styles/main.styl';



p {
  margin-bottom: 1px;
}

.modal1 {
  h3 {
    font-size: 21px;
  }

  p {
    font-size: 14px;
  }

  btn-m {
    font-size: 1px;
  }
}

.modal2 {
  .btn {
    font-size: 16px;
    height: 50px;
  }
}

h1 {
  color: primary-pee;
  font-size: 39.82px;
  line-height: 37px;
  font-family: gt-pressura-bold;
}

.form-class {
  background-color: rgba(139, 143, 157, 0.4);
  width: 100%;
  max-width: 527px;
  .btn {
  background-color: primary-ide;
  width: 100%;
  height: 80px;
  margin-top: 10px;
  border-radius: 40px;
  color: bg-form;
  font-weight: bold;
  font-size: 30px;
  border 3.5px solid white;
  font-family: gt-pressura-bold;
  margin-bottom 100px
}
}

.custom-checkbox {
  display: inline-flex;
  margin-top: 10px;
}

.custom-control-inline {
  margin-right: 0px;
}

.all-btn {
  padding: 0px 40px;
}



.form-g {
  padding-top: 40px;
}

input, select {
  margin-bottom: 0px;
  background-color: #71747C;
  border-radius: 8px;
  font-family: raleway-regular;
  font-size: 14px;
  padding: 0.375rem 0.75rem;
}

input {
  border: none;
  border-bottom: 1.8px solid white;
  color: white;
}

select {
  border: 1.8px solid white;
  width: 100%;
  // padding 12px 5px
  color: white;
}

.col-semicirculo{
  height: 62px
  .semicirculo {
  height: 30px;
  width: 60px;
  border-radius: 50% / 0 0 100% 100%;
  margin: auto;
  text-align: center;
}
}

.subtitles {
  font-size: 75px;
  font-weight: bold;
  padding-bottom: 60px;
  position: absolute;
  text-transform: uppercase;
  display: inline-block;
  z-index: 2;
  top: 0px;
  text-align: center;
  width: 100%;
  font-family gt-pressura-bold
}

.img-number {
  position: relative;
  top: -0px;
  left: 0px;
  z-index: 1;
  font-size 629px;
  line-height 320px;
  font-weight bold
  color: rgba(255, 255, 255, 0.3);
  font-family gt-pressura-bold
}

.areas-section {
  padding: 120px 0px;
}
</style>