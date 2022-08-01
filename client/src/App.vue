<script setup lang="ts">
import ApplicationForm from './views/ApplicationForm.vue';
</script>

<template>
  <ApplicationForm />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  max-width: 80rem;
  margin: 0 auto;
  display: grid; 
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
  background-image: linear-gradient(#f1f6fb, #fff);
}

#form { padding: 2rem }
#navigation { 
  height: 100%;
  padding: 2rem 1rem;
  background-color: #061238;
  box-sizing: border-box;
}

#navigation h2 { font-weight: normal; font-size: 1rem; text-align: left; color: rgba(255, 255, 255, 0.5) }
</style>
