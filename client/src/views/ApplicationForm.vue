<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import ProgressBar from '../components/ProgressBar.vue'
  import FormProgress from '../components/FormProgress.vue';
  import SectionProgress from '../components/SectionProgress.vue';
</script>

<template>
  <div id="form">
    <RouterView v-if="data.userid" :userid="data.userid" :applicationid="data.applicationid" @on-next-step="nextFormStep" />
  </div>
  <div id="navigation">
    <h2>Application progress</h2>
    <ProgressBar :progress="percentProgress" />
    <FormProgress v-bind:is="formProgress" />
    <SectionProgress v-bind:is="sectionProgress" />
  </div>
</template>

<script lang="ts">
import axios from 'axios'

const data = {
  userid: localStorage.getItem('userid') as string,
  applicationid: localStorage.getItem('applicationid') as string,
  formSteps: [],
  formStepIndex: 0,
  sectionSteps: [],
  sectionStepIndex: 0
}
export default {
  async created () {
    console.log('application form setup...')
    if (data.userid && data.applicationid) {
      return 
    }
    const user = await axios.get('/api/users')
    data.userid = user.data.id
    const application = await axios.get('/api/applications', {
      headers: {
        userid: data.userid
      }
    })
    data.applicationid = application.data.id
    localStorage.setItem('userid', data.userid)
    localStorage.setItem('applicationid', data.applicationid)
  },
  data () {
    return data
  },
  method: {
    onNextStep () {
      console.log('form next step...')
    },
    setProgressBar (percent: number) {
      console.log('setProgressBar...', percent)
    },
    setFormProgress (index: number) {
      console.log('setFormProgress...', index)
    },
    setSectionContents (items: string[]) {
      console.log('setSectionContents...', items)

    },
    setSectionProgress (index: number) {
      console.log('setSectionProgress...', index)
    }
  }
}
</script>


<style scoped>
#form {
  padding: 2rem 
}

#navigation { 
  height: 100%;
  padding: 2rem 1rem;
  background-color: #061238;
  box-sizing: border-box;
}

#navigation h2 { 
  font-weight: normal; 
  font-size: 1rem; 
  text-align: left; 
  color: rgba(255, 255, 255, 0.5) 
}
</style>
