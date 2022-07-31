<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  title: string
  blurb: string
  link: string
}>()
</script>

<template>
  <a :href="`${link}`" class="button">
    <span class="text">
      <span class="title">{{ title }}</span>
      {{ blurb }}
    </span>
    <span class="arrow">&RightArrow;</span>
  </a>
</template>

<style scoped>
a.button { box-sizing: border-box; cursor: pointer; display: flex; width: 100%; text-align: left; border-radius: 0.5rem; margin: 0 0 1rem 0; border: none; padding: 1rem 2rem; background-color: #FFF; box-shadow: 0 0.5rem 1rem #EEE; text-decoration: none }
a.button:hover { background-color: #F5F5F5 }
a.button span { font-size: 1rem; display: block; pointer-events: none }
a.button span.text { width: 100%; color: #666 }
a.button span.title { font-size: 2rem; color: #061238; width: 100%; margin-bottom: 0.5rem }
a.button span.arrow { color: #061238; font-size: 3rem }
</style>



