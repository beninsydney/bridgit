<template>
  <main>
    <h1>Buying plans</h1>
    <ul>
      <li>
        <YesNoButton question="Are you buying a property?" group="buying" @input="selectBuyingPlan" />
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
let userid: string, applicationid: string
import YesNoButton from '@/components/YesNoButton.vue';
import axios from 'axios'
export default {
  components: { YesNoButton },
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
    window.location.href = '/'
  },
  methods: {
    selectBuyingPlan: async function (event: Event) {
      event.preventDefault()
      const target = event.target as HTMLInputElement
      const buttonValue: string = target.value
      console.log('made selection', target, buttonValue)
      let buyingPlans: boolean = buttonValue === 'yes'
      const res = await axios.patch(`/api/applications/${applicationid}`, {
          buyingPlans 
        }, {
          headers: {
            'content-type': 'application/json',
            userid,
            applicationid
          }
      })
      // if (!res.buyingPlans) {
      //   TODO: something went wrong
      // }
      window.location.href = `/buying-property`
    }
  }
}
</script>

<style>
h1 { text-align: left; font-weight: 500; font-size: 2.6rem; color: #061238; font-weight: normal; margin: 0 0 2rem 0 }
ul, li { margin: 0; padding: 0 }
li { list-style-type: none; max-width: 100rem }
</style>