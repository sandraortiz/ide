<template>
  <div class="nav mx-auto my-auto m-auto d-flex">
    <b-container class="menu pl-0 pr-0">
      <b-navbar  toggleable="md" type="dark" class="nav-w">
        <b-navbar-brand to="/">
          <!-- <img src="../assets/components/header/logo/logo.png" alt="" class="img-logo">  -->
          <!-- <div class="img-logo"></div> -->
          <!-- <router-link class="nav-link" to="/">lOGO  </router-link> -->
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown text="Áreas" class="nav-link item-nav" right>
              <b-dropdown-item to="/administracion" href="#"
                >Administración y Dirección de personas</b-dropdown-item
              >
              <b-dropdown-item to="/b2b" href="#"
                >Business to Business</b-dropdown-item
              >
              <b-dropdown-item to="/energia" href="#">Energía</b-dropdown-item>
              <b-dropdown-item to="/finanzas" href="#"
                >Finanzas</b-dropdown-item
              >

              <b-dropdown-item to="/marketing" href="#"
                >Marketing</b-dropdown-item
              >
              <b-dropdown-item to="/mineria" href="#">Minería</b-dropdown-item>
              <b-dropdown-item to="/salud" href="#">Salud</b-dropdown-item>
              <b-dropdown-item to="/logistica" href="#"
                >Operaciones y Logística</b-dropdown-item
              >
              <b-dropdown-item to="/ti" href="#"
                >Tecnologías de la Información</b-dropdown-item
              >
            </b-nav-item-dropdown>

            <p class="line"></p>
            <b-nav-item href="#" to="/admision" class="nav-link item-nav"
              >Admisión
              <!-- <router-link  > Admisión </router-link>  -->
            </b-nav-item>
            <p class="line"></p>
            <b-nav-item href="#" to="/financiamiento" class="nav-link item-nav">
              Financiamento
              <!-- <router-link class="nav-link item-nav" to="">  </router-link>   --></b-nav-item
            >
            <b-nav-item to="/solicita_informacion" class="button-content">
              <b-button class="button-nav" squared
                >Solicita información</b-button
              ></b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HeadePage",
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';

.navbar-expand-md .navbar-collapse {
  justify-content: flex-end;
  padding-right: 140px;
}

.nav-w {
  display: flex;
  justify-content: space-between;
  // position: fixed;

}
// .menu {
//   position fixed
// }
.navbar-brand {
  content: url('../assets/components/header/logo/logo.png');
  max-width: 254px;
  width: 100%;
  // background-image url("../assets/components/header/logo/logo.png")
}

.navbar.navbar-dark.bg-dark {
  background-color: bg-header;
}

.line {
  border-right: 1px solid white;
  margin: auto;
  height: 15px;
}

.item-nav {
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 10px;
  font-family: Raleway-Regular;
}

.button-nav {
  padding: 10px 25px 10px 25px;
  background-color: primary-pee;
  color: black;
  font-family: gt-pressura-bold;
  font-size: 18px;
}

.nav {
  background-color: bg-black !important;
  padding: 30px 0px;
}

.router-link-active {
  color: #9F8F6C !important;
}

// .nav-item.nav-item.nav-item a {
// color: red !important;
// }
@media only screen and (max-width: 1700px) {
  .navbar-expand-md .navbar-collapse {
    padding-right: 0px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .navbar-brand {
    max-width: 216px;
    width: 100%;
  }

  .navbar-expand-md .navbar-collapse {
    padding-right: 0px;
  }

  .button-nav {
    padding: 10px 7px;
    font-size: 15px;
    line-height: 16px;
    letter-spacing: -0.04em;
  }
}

@media (max-width: 767px) {
  .line {
    display: none;
  }

  .button-content {
    text-align: center;
  }

  .navbar-brand {
    max-width: 200px;
    width: 100%;
  }

  .nav {
    padding: 10px 5px;
  }
}
</style>