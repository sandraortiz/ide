<template>
  <transition name="slide-fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="stylus"></style>