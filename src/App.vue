<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Books from '../src/components/Books.vue'
import Navbar from './components/layouts/Navbar.vue'
</script>

<template>
  <Navbar/>
  <div class="h-90 bg-gray-100">
    <router-view />
  </div>
</template>

<style>
.h-90{
  height: 90vh;
}

</style>
