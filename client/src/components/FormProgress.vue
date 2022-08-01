<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <router-link to="/">
      <font-awesome-icon icon="fa-solid fa-house" />
      <span>Home</span>
    </router-link>
    <router-link to="/buying">
      <font-awesome-icon icon="fa-solid fa-tag" />
      <span>Buying</span>
    </router-link>
    <router-link to="/selling">
      <font-awesome-icon icon="fa-solid fa-list-check" />
      <span>Selling</span>
    </router-link>
    <router-link to="/loan-details">
      <font-awesome-icon icon="fa-solid fa-money-bill-transfer" />
      <span>Loan details</span>
    </router-link>
    <router-link to="/applicant-details">
      <font-awesome-icon icon="fa-solid fa-user" />
      <span>Applicant details</span>
    </router-link>
    <router-link to="/income">
      <font-awesome-icon icon="fa-solid fa-sack-dollar" />
      <span>Income</span>
    </router-link>
    <router-link to="/expenses">
      <font-awesome-icon icon="fa-solid fa-sack-dollar" />
      <span>Expenses</span>
    </router-link>
    <router-link to="/assets-and-liabilities">
      <font-awesome-icon icon="fa-solid fa-sack-dollar" />
      <span>Assets &amp; liabilities</span>
    </router-link>
    <router-link to="/verify-identity">
      <font-awesome-icon icon="fa-solid fa-id-card" />
      <span>Verify identity</span>
    </router-link>
    <router-link to="/declaration">
      <font-awesome-icon icon="fa-solid fa-signature" />
      <span>Declaration</span>
    </router-link>
  </nav>
</template>

<style>
nav {
  display: flex;
}

nav a {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  color: #CCC;
  margin: 0 0.5rem
}
nav a:first-of-type { margin-left: 0 }
nav a:last-of-type { margin-right: 0 }
nav a span { display: none }
nav a svg { width: 2rem; margin: 0 auto }
</style>
