<template>
    <transition>
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </transition>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
export default {
  name: 'app',
  components: {
  }
}
</script>
<style>
  @import "./assets/css/animate.css";

</style>
