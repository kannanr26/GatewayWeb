import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import store from './store';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import Vuetify from 'vuetify'
import vuetify from '@/plugins/vuetify' // path to vuetify export


import VeeValidate from 'vee-validate';
import Vuex from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

//import VueWizard from '@/components/wizard';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Vuex);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
// Vue.use(vuetify);
//Vue.use(VueWizard);
new Vue({
  vuetify,
  router,
  store,
 // vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app');
