import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* side buttons for application progress */
import { 
  faHouse, 
  faTag, 
  faListCheck, 
  faUser, 
  faMoneyBillTransfer, 
  faSackDollar, 
  faIdCard, 
  faSignature
} from '@fortawesome/free-solid-svg-icons'

/* property type buttons */
import {
  faTree,
  faHouseChimney,
  faHouseFloodWater,
  faShop,
  faChalkboard
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faHouse, faTag, faListCheck, faUser, faMoneyBillTransfer, faSackDollar, faIdCard, faSignature,
  faTree, faHouseChimney, faHouseFloodWater, faShop, faChalkboard
)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
