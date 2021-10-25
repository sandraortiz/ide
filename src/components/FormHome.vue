<template>
  <div class="form-class">
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
        <p>
          Los cursos del PEE te permitirán desarrollarte en el ámbito
          profesional.
        </p>
      </b-form-group>

      <b-form-group class="all-btn" id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="usuario.nombres"
          placeholder="Nombres"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="all-btn" id="input-group-4" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="usuario.apellido"
          placeholder="Apellidos"
          required
        ></b-form-input>
      </b-form-group>
      <!-- <b-form-group class="all-btn" id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="payload.numero_de_id"
          placeholder="DNI"
          required
        ></b-form-input>
      </b-form-group> -->
      <b-form-group class="all-btn" id="input-group-5" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="usuario.email"
          type="email"
          placeholder="Correo electrónico"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="all-btn" id="input-group-6" label-for="input-6">
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
      <b-button class="btn" type="submit">Enviar</b-button>
    </b-form>
    <b-modal
      ref="my-modal"
      hide-footer
      title="Política de Protección de Datos Personales"
    >
      <div class="d-block text-justify modal1">
        <h3 class="text-center">Política de Protección de Datos Personales</h3>
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
        <p>
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
import { collection, addDoc } from "firebase/firestore";

import { db } from "../main";
export default {
  data() {
    return {
      countryName: false,
      usuario: {
        email: "",
        nombres: "",
        apellido: "",
        telefono: "",
        acepta_politica_de_privacidad: [],
      },
      show: true,
    };
  },
  methods: {
    async sendInformationRequest() {
      const f = new Date();
      const fechaformat =  f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
      const hora =   f.getHours() + ':' + f.getMinutes() + ':' + f.getSeconds();
      const docRef = await addDoc(collection(db, "informacion"), {

        email: this.usuario.email,
        name: this.usuario.nombres,
        apellido: this.usuario.apellido,
        celular: this.usuario.telefono,
        fecha: fechaformat,
        hora: hora

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

.form-class {
  background-color: bg-form;
  width: 100%;
  max-width: 386px;
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

.btn {
  background-color: #C0B170;
  width: 100%;
  height: 80px;
  margin-top: 10px;
  border-radius: 0px;
  color: bg-form;
  font-weight: bold;
  font-size: 30px;
}

.form-g {
  padding-top: 40px;
}

input, select {
  margin-bottom: 0px;
  background-color: bg-form;
  border-radius: 0px;
  font-family: raleway-regular;
  font-size: 14px;
  padding: 0.375rem 0.75rem;
}

input {
  border: none;
  border-bottom: 1.8px solid white;
  color: #676868;
}

select {
  border: 1.8px solid white;
  width: 100%;
  // padding 12px 5px
  color: white;
}
</style>