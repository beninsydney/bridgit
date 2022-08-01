<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  title: string
  icon: string
  link: string
}>()
</script>

<template>
  <a :href="`${link}`" class="button">
    <font-awesome-icon :icon="`fa-solid ${icon}`" />
    <span class="title">{{ title }}</span>
  </a>
</template>

<style scoped>
a.button { display: grid; grid-template-rows: 60% 40%; font-size: 2rem; color: #061238; width: 100%; height: 100%; box-sizing: border-box; cursor: pointer; border: none; padding: 1rem 2rem; background-color: #FFF; box-shadow: 0 0.5rem 1rem #EEE; text-decoration: none }
a.button:hover { background-color: #F5F5F5 }
a.button svg { margin: 0 auto; width: 2rem }
a.button span.title { font-size: 1rem; color: #061238; width: 100%; text-align: center }
</style>



