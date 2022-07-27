<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/list">List</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <main class="container px-4 mx-auto">
    <router-view />
  </main>
</template>

