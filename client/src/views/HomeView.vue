<template>
  <main>
    <h1>What is your loan purpose?</h1>
    <ul>
      <li>
        <EntryButton @click="selectPurpose" id="BuyNowSellLater" title="Buy now, sell later" blurb="I've found the perfect property" link="/step1" />
      </li>
      <li>
        <EntryButton @click="selectPurpose" id="Renovate" title="Renovate before I sell" blurb="I require additional funds to renovate my property before sale" link="/buying" />
      </li>
      <li>
        <EntryButton @click="selectPurpose" id="CashAdvance" title="Cash advance on the sale of my property" blurb="I need access to funds fast before I sell my property" link="/buying" />
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import EntryButton from '@/components/EntryButton.vue';
</script>
<script lang="ts">
import axios from 'axios'
let userid: string, applicationid: string

export default {
  async mounted () {
    userid = localStorage.getItem('userid') as string
    applicationid = localStorage.getItem('applicationid') as string
    if (userid && applicationid) {
      return
    }
    const user = await axios.get('/api/users')
    userid = user.data.id
    const application = await axios.get('/api/applications', {
      headers: {
        userid
      }
    })
    applicationid = application.data.id
    localStorage.setItem('userid', userid)
    localStorage.setItem('applicationid', applicationid)
  },
  methods: {
    selectPurpose: async function (event:Event) {
      event.preventDefault()
      const target = event.target as HTMLInputElement
      const buttonid: string = target.id
      let loanPurpose = 0
      let destination = '/buying-plans'
      if (buttonid === 'BuyNowSellLater') {
        loanPurpose = 1
        destination = '/property-type'
      } else if(buttonid === 'Renovate') {
        loanPurpose = 2
      } else if (buttonid === 'CashAdvance') {
        loanPurpose = 3
      }
      const res = await axios.patch(`/api/applications/${applicationid}`, {
          loanPurpose 
        }, {
          headers: {
            'content-type': 'application/json',
            userid,
            applicationid
          }
      })
      // if (!res.loanPurpose) {
      //   TODO: something went wrong
      // }
      window.location.href = destination
    }
  }
};
</script>

<style>
h1 { font-weight: 500; font-size: 2.6rem; color: #061238; font-weight: normal; margin: 0 0 2rem 0 }
ul, li { margin: 0; padding: 0 }
li { list-style-type: none; max-width: 100rem }
</style>