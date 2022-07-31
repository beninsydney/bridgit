import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHouse, faTag, faListCheck, faUser, faMoneyBillTransfer, faSackDollar, faIdCard, faSignature} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHouse, faTag, faListCheck, faUser, faMoneyBillTransfer, faSackDollar, faIdCard, faSignature)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
