<template>
  <div>
    <div class="date-page" :style="cssVars">
      <b-container class="pasos-areas ">
          <b-row>
            <b-col md="3" cols="12"  align-self="center"  >
              <div class="text-date text-date-desktop">
              <span v-text="dateText" class="subtitle"></span>
              <br>
              <span v-text="dateTextSecond" class="subtitle"></span>
              </div> 
              <div class="text-date text-date-responsive">
              <span v-text="dateText" class="subtitle"></span>
              <span v-text="dateTextSecond" class="subtitle second-title"></span>
              </div>
            </b-col>
            <b-col md="4" cols="12" class="day-content" align-self="center" >
               <div class="section-content">
                  <div v-text="day" class="section-1">
                  </div>
                  <div  v-text="'de' + ' ' + month" class="section-2" >
                  </div>
                </div>
            </b-col>
            <b-col md="1" class="divider-content" >
              <div class="vl"></div>
            </b-col>
            <b-col  md="4" cols="12"  align-self="center">
               <div  class="button-content">
                 <b-button class="button-nav" v-text="buttonText" squared></b-button>
              </div>
            </b-col>
          </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "DatePage",
  props: {
    month: {
      type: String,
      require: true,
    },
    buttonText:{
      type: String,
      require: true,
    },
    dateText:{
      type: String,
      require: true,
    },
    day: {
      type: String,
      require: true,
    },
    bgColor: {
      type: String,
      default: "pink",
    },
    bgColorButton: {
      type: String,
      default: "pink",
    },
    bgColorDivider: {
      type: String,
      default: "pink",
    },
    dateTextSecond :{
      type: String,
      require: true,
    }
  },
  computed: {
    cssVars() {
      return {
        "--bg-color": this.bgColor,
        "--bg-color-button": this.bgColorButton,
        "--bg-color-divider":this.bgColorDivider
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';

.text-date-responsive
  display none
.button-content
  padding-top 10px
  text-align center
.border-text
  border-left: 5px solid blue
  padding-right 50px
.vl {
  border-left: 2px solid var(--bg-color-divider);
  height: 100px;
  margin-left -20px
}
.text-date
  text-align right 
  padding-right 20px
  justify-content: center;
  font-family: gt-pressura-bold

.section-content
  display: flex;
  flex-direction: row
  justify-content: center;
  font-family: gt-pressura-bold
.section-1
  position absolute
  z-index 2
  width 50px
  font-size 120px 
  margin-right 310px
  margin-top -67px
  font-weight: bold
  line-height 182px
.section-2
  background-color: var(--bg-color-button);
  font-size: 35.53px;
  position relative
  z-index 1
  text-align right
  width: 290px;
  padding-right 2px
  font-weight: bold;
  height: 63px;
  line-height 57px
.btn-secondary
  background-color: var(--bg-color-button);
  border-color  var(--bg-color-button);
  font-family: gt-pressura-bold
.date-page 
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--bg-color);

.pasos-areas 
  padding: 45px 0px;
  color white

.content-date 
  color: white;
  padding: 30px;
  text-align: center;
  
.month 
  font-size: 25px;

.number 
  font-size: 40px;

.button-nav
  width: 316px;
  height: 71px;
  font-size: 29.82px;
  font-weight: bold;
  line-height 37px
  
.subtitle 
  font-size: 39.82px;
  line-height: 47px;
  padding: 15px 0px 18px;
  font-weight: 500;
  margin-bottom 0px
.col-md-1
    width 4.33%!important  
+for_breakpoint(desktop-lap)
  .section-1
    width 50px
    font-size 80px
    margin-right 225px
    margin-top -67px
    font-weight: bold
    line-height 182px
  .section-2
    background-color: var(--bg-color-button);
    font-size: 28.53px;
    position relative
    z-index 1
    text-align right
    width: 250px;
    padding-right 10px
    font-weight: bold;
    height: 63px;
    line-height 57px
  .button-nav
    font-size 24.82px 
    max-width 273px
    width 100%
    height 65px 
  .subtitle
    font-size 30.82px
    line-height 27px  
+for_breakpoint(md) 
  .col-md-1
    width 2.33%!important  
@media  (max-width: 767px) 
  .text-date-responsive
    display block
  .text-date-desktop
    display none
  .text-date
    text-align center 
    padding-right 0px !important
    // justify-content: center;
  .day-content
    padding-top 20px
  .divider-content
    display none
  .second-title
    padding-left 5px
+for_breakpoint(xs)     
  .subtitle 
    font-size: 25.65px;
  

</style>