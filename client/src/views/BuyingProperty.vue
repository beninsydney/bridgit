<template>
  <main>
    <h1>Property 1 - Type</h1>
    <ul>
      <li>
        <PropertyTypeButton icon="fa-house-chimney" title="Residential" />
      </li>
      <li>
        <PropertyTypeButton icon="fa-tree" title="Rural Residential" />
      </li>
      <li>
        <PropertyTypeButton icon="fa-house-flood-water" title="Of the plan residential" />
      </li>
      <li>
        <PropertyTypeButton icon="fa-shop" title="Commercial" />
      </li>
      <li>
        <PropertyTypeButton icon="fa-chalkboard" title="Vacant land" />
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
let userid: string, applicationid: string
import PropertyTypeButton from '@/components/PropertyTypeButton.vue';
import axios from 'axios'
export default {
  components: { PropertyTypeButton },
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
    selectPropertyType: async function (event: Event) {
      event.preventDefault()
      const target = event.target as HTMLInputElement
      const buttonValue: string = target.value
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
ul { display: grid; grid-template-columns: 33% 33% 33%; grid-template-rows: 8rem 8rem; grid-gap: 1rem }
li { display: block; list-style-type: none; height: 100% }
</style>