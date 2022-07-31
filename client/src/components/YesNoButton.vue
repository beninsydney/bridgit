<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  question: string
  group: string
}>()
</script>

<template>
  <div class="yes-no">
    <label class="question">{{ question }}</label>
    <div class="options">
      <label class="option">
        <input type="radio" :name="group" value="yes" @change="$emit('value_radio', 'yes')" />
        Yes
      </label>
      <label class="option">
        <input type="radio" :name="group" value="no" @change="$emit('value_radio', 'no')" />
        No
      </label>
    </div>
  </div>
</template>

<style scoped>
.yes-no { text-align: left }
.question { font-weight: bold; pointer-events: none }
.options { display: grid; grid-template-columns: 1fr 1fr }
</style>
