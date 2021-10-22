<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="width"  viewBox="0 0 143.28 135.97">
 
  <g id="Capa_2" data-name="Capa 2">
    <g id="Capa_1-2" data-name="Capa 1">
      <path class="cls-1"
        :class="color"
        d="M27.27,12.48c0-3.46-.45-6.06.16-8.45.39-1.5,2.38-2.7,3.66-4,1.44,1.21,3.7,2.23,4.16,3.67.82,2.56.55,5.37.76,8.44h18c0-2.63-.42-5.34.16-7.89C54.55,2.69,56.44,1.4,57.64,0c1.58,1.33,4,2.46,4.54,4.05.78,2.32.2,5,.2,8H80.86c0-2.54-.45-5.45.18-8.18C81.38,2.39,83.6,1.27,85,0c1.4,1.25,3.64,2.34,4,3.79.66,2.56.19,5.33.19,8.34h18.43c0-2.57-.48-5.12.17-7.43.48-1.71,2.44-3.13,3.74-4.67,1.5,1.6,3.67,3,4.33,4.84.75,2.09.17,4.53.17,7.6,6.65,0,12.8.26,18.9-.07s8.39,1.44,8.36,6.76q-.27,55.19,0,110.36c0,4.47-1.64,6.45-7.27,6.43q-64.3-.18-128.61,0C1.81,136,0,134.23,0,129.68q.18-55.49,0-111c0-4.54,1.62-6.55,7.26-6.28C13.63,12.72,20,12.48,27.27,12.48ZM8.67,41.26v68.39h98.94c0-7.08.15-14,0-20.83-.13-4.32,1.88-6.08,7-5.89,6.57.25,13.16.06,19.5.06V41.26Zm-.25,87.55H134v-32c-5.28,5.32-10,9.64-14.13,14.35-3.86,4.42-8.33,6.15-15,6.08-29.44-.34-58.89-.15-88.33-.15h-8Zm125.87-109H8.77V33.62H134.29Zm-5.64,71.46-.78-1.87c-3.92.5-10.21,0-11.24,1.71-1.85,3.11-.52,7.57-.52,12.89Z" />
      <path class="cls-2" :class="color" d="M43.21,50.58h10.3v9H43.21Z" />
      <path class="cls-3" :class="color" d="M66.3,59.37V50.63H77v8.74Z" />
      <path class="cls-3" :class="color" d="M43,78.49V69.37H53.36v9.12Z" />
      <path class="cls-4" :class="color" d="M76.93,78.54H66.35v-9.1H76.93Z" />
      <path class="cls-5" :class="color" d="M89.92,69.34h9.92v9H89.92Z" />
      <path class="cls-5" :class="color" d="M66.25,97V88.44H76.81V97Z" />
      <path class="cls-6" :class="color" d="M99.93,50.78v8.65H90V50.78Z" />
      <path class="cls-6" :class="color" d="M53.6,88.36v8.57H43V88.36Z" />
      <path class="cls-7" :class="color" d="M99.76,96.87H90V88.45h9.72Z" />
    </g>
  </g>
</svg>
</template>

<script>
export default {
  name: "Calendario",
  props: {
    color: {
      type: String,
      default: "white", // green, green--outline, white
      required: false,
    },
    strokeWidth: {
      type: Number,
      default: 5,
      required: false,
    },
    width: {
      type: Number,
      default: 50,
      required: false,
    },
  },
};
</script>

<style lang="stylus" scoped>
.green {
  fill: #61ffab;
  stroke: none;
}
.green-mineria
  fill #44AA6F;
  stroke: none;
.green--outline {
  fill: #354258;
  stroke: #61ffab;
}
.pink {
  fill: red;
}

.white {
  fill: mintcream;
  stroke: none;
}

.white 
  fill: #FFFFFF;
  stroke: none;
.administracion
  fill: #CF9111;
  stroke: none;
.b2b
  fill: #284568;
  stroke: none;
.energy
  fill: #FFD172;
  stroke: none;
.finance
  fill: #051D43;
  stroke: none;
.logistic
  fill: #004863;
  stroke: none;
.marketing
  fill: #35B2CC;
  stroke: none;
.mining
  fill: #FFFFFF;
  stroke: none;
.salud
  fill: #3E4472;
  stroke: none;
.ti
  fill: #58A9D1;
  stroke: none;
</style>