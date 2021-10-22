<template>
  <div >

    <section  style="border-bottom: none !important">
      <b-container fluid class="bv-example-row hello pl-0 pr-0 ">
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
            lg="8"
            class="d-flex  justify-content-end flex-column pl-5 pr-5 mx-auto"
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
                <h1>Gracias <br> &nbsp; </h1>
               
              </div>
              <hr class="line" />
              <h4>Gracias, nos pondremos en contacto con usted para brindarle mayor información.</h4>
              
            </div>
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
import HeadePage from "../../components/HeadePage";
import FooterPage from "../../components/FooterPage";

export default {
  name: "AdmisionPage",
  components: {
    HeadePage,
    FooterPage,
  },
};
</script>

<style lang="stylus" scoped>
/* eslint-disable */
@import '../../styles/main.styl';



h3 {
  margin: 40px 0 0;
}


a {
  width: 100%;
  height: 100%;
  text-decoration none
}

h1 {
  font-size: 70px;
  text-transform: uppercase;
  width: 100%;
  line-height 99px;

  font-weight: bold;
  color: primary-pee;
  font-family: gt-pressura-bold
  margin-bottom 0
  text-align center
}

h2 {
  font-size: 39.82px;
  text-transform: uppercase;
  width: 100%;
  font-weight: bold;
  color: primary-pee;
  font-family: gt-pressura-bold;
  line-height 47.78px
  margin-bottom 5px
  letter-spacing 0.026em
}
h4{
  font-size: 28px;
  line-height 36px
  font-weight 100
  font-family Raleway-Regular
  text-align center

}

.line {
  border-top: 4px solid primary-pee;
  width: auto;
  opacity: 1 !important;
  margin-block-start: 0px;
  right: 0;
  max-width 60rem
  margin-bottom 50px
}



.hello {
  background-image: url('../../assets/home/banner/kv-001-1.jpg');
  background-position top;
  color: white;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between
  .container-home{
    padding-bottom 232px
    .col-form{
      display flex
      justify-content flex-end
      padding 0px 
    }
  }
}



@media (max-width: 767px) {
    h1 {
        font-size 50px
        padding-top 60px
    }
    h4 {
        font-size 23px
        
    }
    .line {
        margin-bottom 20px
    }
    .hello {
 
    .container-home{
        padding-bottom 202px
        .col-form{
        display flex
        justify-content flex-end
        padding 0px 
        }
    }
}
}



     

</style>