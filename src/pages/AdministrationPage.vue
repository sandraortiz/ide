<template>
  <div>
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row align-v="center" class="justify-content-md-center">
        <b-col cols="12" md="auto">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form @submit.stop.prevent>
              <label for="text-password">Password</label>
              <b-form-input
                type="password"
                id="text-password"
                aria-describedby="password-help-block"
              ></b-form-input>
              <b-form-text id="password-help-block">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </b-form-text>
            </b-form>
            <b-button type="submit" variant="primary">Submit</b-button>
            <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import HeadePage from "../components/HeadePage";
// import FooterPage from "../components/FooterPage";

export default {
  name: "AdministrationPage",
  components: {
    // HeadePage,
    // FooterPage,
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';

hr {
  background-color: secondary-administracion;
  height: 5px;
  opacity: 1 !important;
}

.jumbotron {
  background-image: url('../assets/areas/administracion/banner/kv_007-1.jpg');
}

.fecha {
  font-size: 20px;
}

.encargado {
  margin-block-end: 4px;
}

hr.new4 {
  border: 1px solid var(--line-color);
  opacity: 1;
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
  margin: 0px;
  width: 31%;
  font-size: 24px;
  min-height: 70px;
}

a {
  color: white;
  width: 100%;
  height: 100%;
}

.navbar-nav {
  flex-direction: row;
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
  height: 180px;
  border: 1px solid var(--bg-color);
  padding: 10px;
}

li {
  background: #F6E4C2;
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
</style>