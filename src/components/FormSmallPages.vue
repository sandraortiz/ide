<template>
  <div class="form-class">
    <b-form
      v-on:submit.prevent="sendInformationRequest"
      v-if="show"
      class="form-g"
    >
      <b-form-group class="all-btn" id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="payload.nombres"
          placeholder="Nombres"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="all-btn" id="input-group-4" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="payload.apellido_paterno"
          placeholder="Apellidos"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="all-btn" id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="payload.numero_de_id"
          placeholder="DNI"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="all-btn" id="input-group-5" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="payload.correo_electrnico"
          type="email"
          placeholder="Correo electrónico"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="all-btn" id="input-group-6" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="payload.telefono"
          placeholder="Teléfono"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="all-btn">
        <select
          class="form-select"
          aria-label="ciudad_de_residencia"
          name="ciudad_de_residencia"
          id="input-3"
          v-model="payload.ciudad_de_residencia"
          required
        >
          <option value="">-Seleccione su departamento-</option>
          <option
            v-for="departamento in myJson.departamentos"
            :key="departamento.id"
          >
            {{ departamento.departamento }}
          </option>
        </select>
      </b-form-group>
      <b-form-group
        class="all-btn"
        id="input-group-12"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-checkbox-group
          v-model="payload.acepta_politica_de_privacidad"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
          required
        >
          <b-form-checkbox class="conditions" value="0"> </b-form-checkbox>
          <span class="text-condiciones">
            Acepto las
            <a @click="toggleModal">
              condiciones de tratamiento para mis datos.
            </a>
          </span>
        </b-form-checkbox-group>
      </b-form-group>
      <b-form-group
        class="all-btn"
        id="input-group-12"
       
      >
      <b-button class="btn" type="submit">Enviar</b-button>
       </b-form-group>
    </b-form>
    <b-modal
      ref="my-modal"
      hide-footer
      title="Política de Protección de Datos Personales"
    >
      <div class="d-block text-justify modal1">
        
        <p>
          De conformidad con la Ley N° 29733, Ley de Protección de Datos
          Personales, el usuario da su consentimiento para el tratamiento de los
          datos personales que son facilitados en el presente formulario o por
          cualquier medio desde el momento de su ingreso o utilización del
          portal. Asimismo, el usuario consiente que la Universidad ESAN pueda
          ceder estos datos a terceros para los fines expuestos a continuación.
        </p>
        <p>
          Estos serán incorporados en el banco de datos de usuarios de la
          Universidad ESAN, para utilizarlos en seguimiento de un eventual
          proceso de matrícula, envío de publicidad mediante cualquier medio y
          soporte, envío de invitaciones a actividades convocadas por ESAN o sus
          socios comerciales, para fines estadísticos, gestiones institucionales
          y administrativas; y se mantendrán mientras sean útiles para que la
          Universidad pueda prestar y ofrecer sus servicios y darles trámite.
        </p>
        <p class="pb-4">
          El usuario podrá ejercer los derechos de acceso, rectificación,
          oposición y cancelación de los datos personales escribiendo a
          datospersonales@esan.edu.pe o a la siguiente dirección: <br />
          Oficina de Protección de Datos Personales, Universidad ESAN. Alonso de
          Molina 1652, Monterrico, Surco, Lima - Perú
        </p>
      </div>
      <b-container fluid class="modal2">
        <b-row class="mb-1 text-center">
          <b-col cols="5">
            <b-button class="btn-m" block @click="hideModal">Cerrar</b-button>
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
</template>

<script>
// import json from "../data/depart.json";
import axios from "axios";
export default {
  name: "FormSmallPages",
  props:["especialidad"],
  data() {
    return {
      countryName: false,
      payload: {
        pais_nacionalidad_iso3: "",
        ciudad_de_residencia:"",
        correo_electrnico: "",
        nombres: "",
        apellido_paterno: "",
        numero_de_id: "",
        telefono: "",
        cargo: "",
        especialidad_o_concentracion: this.especialidad,
        acepta_politica_de_privacidad: [],
        ciudad: "LIMA", // debe inicializarse, aquí; en javascript después; o, en última instancia, presentar opciones en el HTML para que el usuario elija
        programa: "PEE", // igual que *ciudad*
        url_del_formulario: "", // se carga automáticamente
        procedencia: "", // se carga automáticamente
        user_agent_uuid: "", // se carga automáticamente
      },
      areasdeInteres: [
        { text: "¿Qué área te interesa?", value: "dasdasd" },
        {
          value: "Administración",
          text: "Administración y Dirección de personas",
        },
        { value: "B2B", text: "Business to Business" },
        "Energía",
        "Finanzas",
        "Marketing",
        "Minería",
        "Salud",
        "Operaciones y Logística",
        "Tecnologías de la Información",
      ],
      countries: [],
      show: true,
      sending: false,
      retry_sending_times: 3,
      attempted_sendings_count: 0,
      seconds_before_next_attempt: 2,
    };
  },
  computed: {
    document_cookies: function () {
      var key_values_list = document.cookie.split("; ");
      var cookies_list = [];
      for (let i = 0; i < key_values_list.length; i++) {
        var current_key_and_value = key_values_list[i].split("=");
        cookies_list.push({
          key: current_key_and_value[0],
          value: current_key_and_value[1],
        });
      }
      return cookies_list;
    },
    nueva_procedencia: function () {
      if (this.form.source != "") {
        // 				this.addTrafficSourceToForm();
        return this.form.source + "|>" + this.source_datetime + ")";
      }
      return "(cómo llegará a Formstack)";
    },
    procedencia: function () {
      return this.getCookieWithName("traffic_source");
    },
    user_agent_uuid: function () {
      // id = 'sdi_user_agent_uuid'
      return this.getCookieWithName("user_agent_uuid");
    },
    source_datetime: function () {
      var right_now = new Date();
      var date_of_click = new Date(right_now.getTime() - 10 * 60 * 1000);
      var currDate = date_of_click.getDate();
      var hours = date_of_click.getHours();
      var minutes = date_of_click.getMinutes();
      var month = date_of_click.getMonth() + 1;
      var year = date_of_click.getFullYear();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' makes '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime =
        currDate +
        "-" +
        month +
        "-" +
        year +
        " " +
        hours +
        ":" +
        minutes +
        " " +
        ampm;
      return strTime;
    },
  },
  methods: {
    getCookieWithName(cookie_name) {
      var matches = this.document_cookies.filter(function (el) {
        return el.key == cookie_name;
      });
      if (matches.length > 0) {
        return matches[0].value;
      }
      return "";
    },
    loadHiddenFields() {
      var elValorDeLaProcedencia = this.procedencia;
      if (this.input_source_manually && this.form.source != "") {
        elValorDeLaProcedencia = this.nueva_procedencia;
      }
      this.payload.procedencia = elValorDeLaProcedencia;
      this.payload.user_agent_uuid = this.user_agent_uuid;
      this.payload.url_del_formulario = window.location.href;
    },
    sendInformationRequest() {
      this.sending = true;
      var information_request = {
        timestamp: new Date().toJSON(),
        payload: this.payload,
      };
      console.log(information_request)
      var limit = this.retry_sending_times;
      var attempts_count = this.attempted_sendings_count;
      var miliseconds_delay = this.seconds_before_next_attempt * 1000;
      axios
        .post(
          "https://www.esanbackoffice.com/websites/products/information-request/",
          information_request
        )
        .then((response) => {
          console.log(information_request);
          if (response.data) {
            // window.location.href =
            //   "https://www.esan.edu.pe/pee/solicitud-de-informacion/gracias/";
            this.sending = false;
          } else {
            if (attempts_count < limit) {
              setTimeout(() => {
                this.attempted_sendings_count = attempts_count + 1;
                console.log(
                  this.attempted_sendings_count + " retry attempts.1"
                );
                this.sendInformationRequest();
              }, miliseconds_delay);
            } else {
              alert(
                "Hubo un error. Inténtalo de nuevo en unos minutos, por favor.1"
              ); // en lugar de una alerta, puede ser más claro para el usuario levantar un modal
              this.sending = false;
              this.attempted_sendings_count = 0;
            }
          }
        })
        .catch((error) => {
          alert(error);
          if (attempts_count < limit) {
            setTimeout(() => {
              this.attempted_sendings_count = attempts_count + 1;
              console.log(this.attempted_sendings_count + " retry attempts.2");
              this.sendInformationRequest();
            }, miliseconds_delay);
          } else {
            alert(
              "Hubo un error. Inténtalo de nuevo en unos minutos, por favor.2"
            ); // en lugar de una alerta, puede ser más claro para el usuario levantar un modal
            this.sending = false;
            this.attempted_sendings_count = 0;
          }
        });
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
      this.payload.acepta_politica_de_privacidad =
        this.payload.acepta_politica_de_privacidad.concat(data);
    },
  },
};
</script>
<style lang="stylus" scoped>
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

// .form-class {
//   background-color: bg-form;
//   width: 100%;
//   max-width: 386px;
// }
.form-control {
  height: 38px
}
.custom-checkbox {
  display: inline-flex;
  margin-top: 10px;
}

.custom-control-inline {
  margin-right: 0px;
}

.all-btn {
  padding: 0px 35px;
}

.btn {
  background-color: #C0B170;
  width: 100%;
  height: 45px;
  margin-top: 0px;
  border-radius: 0px;
  color: bg-form;
  font-weight: bold;
  font-size: 15px;
  padding 10px 
}

.form-g {
  padding: 25px 0px;
  background-color: #262b2d;
  max-width: 390px
}

// input, select {
//   margin-bottom: 0px;
//   background-color: bg-form;
//   border-radius: 0px;
//   font-family: raleway-regular;
//   font-size: 14px;
//   padding: 0.375rem 0.75rem;
// }

input {
  border: none;
  border-bottom: 1.8px solid white;
  color: #676868;
}

select {
  border: 1.8px solid white;
  width: 100%;
  // padding 12px 5px
  color:  #676868;
  height: 38px;
  border-radius: 4px
}
+for_breakpoint(xs) {
  .all-btn {
  padding: 0px 10px;
}
}
</style>