<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="form">
    <router-view/>
  </div>
  <div id="navigation">
    <h2>Application progress</h2>
    <span class="progress-bar">
      <span class="bar"></span>
    </span>
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
  </div>
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

.progress-bar { display: block; background-color: #000; border-radius: 1rem; height: 0.5rem; width: 100%; margin: 1rem 0 2rem 0 }
.progress-bar span { display: block; background-color: rgba(255, 255, 255, 0.5); height: 100%; width: 27%; border-radius: 1rem }

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
