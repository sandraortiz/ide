<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <button @click="signOut" type="submit" class="btn btn-primary">
              Cerrar Sesion
            </button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container>
      <b-row>
        <b-col>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Correo</th>
                <th scope="col">Celular</th>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in usuarios" :key="index">
                <!-- <th scope="row">{{ index }}</th> -->
                <td>{{ item.name }}</td>
                <td>{{ item.apellido }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.celular }}</td>
                <td>{{ item.fecha }}</td>
                <td>{{ item.hora }}</td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../main";
export default {
  name: "UserData",
  data() {
    return {
      usuarios: [],
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },

  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(this.$router.push({ path: "/" }))
        .catch((err) => {
          this.error = err.message;
        });
    },

    async obtenerDatos() {
      const q = query(collection(db, "informacion"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let usuario = doc.data();
        usuario.id = doc.id;
        this.usuarios.push(usuario);
        // doc.data() is never undefined for query doc snapshots
        console.log(this.usuarios);
      });
    },
  },
  mounted() {
    this.obtenerDatos();
  },
};
</script>

<style>
</style>