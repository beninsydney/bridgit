<template>
  <span class="progress-bar">
    <span class="bar"></span>
  </span>
</template>

<style>
.progress-bar { display: block; background-color: #000; border-radius: 1rem; height: 0.5rem; width: 100%; margin: 1rem 0 2rem 0 }
.progress-bar span { display: block; background-color: rgba(255, 255, 255, 0.5); height: 100%; width: 27%; border-radius: 1rem }
</style>

<script lang="ts">
export default {
  data() {
    return {
      progress: 0
    }
  }
}
</script>