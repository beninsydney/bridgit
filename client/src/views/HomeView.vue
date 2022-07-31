<template>
  <main>
    <h1>What is your loan purpose?</h1>
    <ul>
      <li>
        <EntryButton title="Buy now, sell later" blurb="I've found the perfect property" link="/buying" />
      </li>
      <li>
        <EntryButton title="Renovate before I sell" blurb="I require additional funds to renovate my property before sale" link="/buying" />
      </li>
      <li>
        <EntryButton title="Cash advance on the sale of my property" blurb="I need access to funds fast before I sell my property" link="/buying" />
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import EntryButton from '@/components/EntryButton.vue'; // @ is an alias to /src
</script>
<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {};
  },
  async mounted() {
    const data = await axios.get("/api/users")
    console.log('got user data', data)
  }
};
</script>

<style>
h1 { font-weight: 500; font-size: 2.6rem; color: #061238; font-weight: normal; margin: 0 0 2rem 0 }
ul, li { margin: 0; padding: 0 }
li { list-style-type: none; max-width: 100rem }
</style>