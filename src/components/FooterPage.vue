<template>
  <div>
    <div class="footer">
      <b-container class="bv-footer-row">
        <b-row>
          <b-col md="4" cols="12">
            <div class="logo">
              <img src="../assets/components/footer/logo/logo.png" alt="" />
            </div>
          </b-col>
          <b-col md="4" cols="12">
            <div class="column-three">
              <div class="social-media">
                <span class="icon">
                  <a
                    target="_blank"
                    href="https://es-la.facebook.com/esaneducacionejecutiva/"
                    ><img
                      src="../assets/components/footer/rs/facebook.png"
                      alt=""
                  /></a>
                </span>
                <span class="icon">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/user/esanperu"
                    ><img
                      src="../assets/components/footer/rs/youtube.png"
                      alt=""
                  /></a>
                </span>
                <span class="icon"
                  ><a
                    target="_blank"
                    href="https://www.linkedin.com/company/esan"
                    ><img
                      src="../assets/components/footer/rs/linkedin.png"
                      alt=""
                  /></a>
                </span>
                <span class="icon"
                  ><a target="_blank" href="https://twitter.com/esanperu"
                    ><img
                      src="../assets/components/footer/rs/twitter.png"
                      alt=""
                  /></a>
                </span>
              </div>
              <p class="web">www.esan.edu.pe</p>
              <p class="text-uni">&copy; Universidad de ESAN 2021</p>
            </div>
          </b-col>
          <b-col md="4" cols="12">
            <div class="data">
              <p class="correo">informes@esan.edu.pe</p>
              <p class="direccion">Alonso de Molina 1652, Monterrico</p>
              <p class="distrito">Surco, Lima - Perú</p>
              <p class="distrito">
                <router-link
                  class="nav-link"
                  :to="{
                    name: 'login_page',
                  }"
                >
                  Login
                </router-link>
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';

.icon {
  margin: 0 15px;
}

.bv-footer-row {
  padding-right: 130px;
  padding-left: 130px;
  padding-bottom: 40px;
  padding-top: 40px;
}

.social-media {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
}

.distrito, .direccion, .text-uni {
  font-family: Roboto-Regular;
}

.correo, .web {
  font-family: Roboto-Bold;
}

.correo {
  font-size: 19px;
}

.web, .text-uni, .direccion, .distrito {
  font-size: 12px;
}

.web, .text-uni, .correo, .direccion, .distrito {
  margin-block-end: 0px;
}

.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: primary-ide;
  color: white;
  
}

.data {
  text-align: right;
}

.column-three {
  text-align: center;
}

@media (min-width: 768px) and (max-width: 991px) {
  .bv-footer-row {
    padding-right: 25px;
    padding-left: 25px;
    margin: 0px auto;
  }
}

@media (max-width: 767px) {
  .bv-footer-row {
    padding-right: 20px;
    padding-left: 20px;
    margin: 0px auto;
  }

  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .data {
    text-align: center;
    padding-top: 10px;
  }
}
</style>