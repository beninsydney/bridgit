<script setup lang="ts">
import { defineProps } from 'vue';
</script>

<template>
  <h2>{{ title }}</h2>
  <!-- <ol>
    <li v-for="(label, index) in object.data['labels']" :key="index">
      {{ label }}
    </li>
  </ol> -->
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: '',
      labels: []
    }
  }
}
</script>