import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import Title from '@/views/Title.vue';
import Utility from '@/views/Utility';
import Family from '@/views/family/Family';

import PersonalRegistration from '@/components/family/PersonalRegistration';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/title',
      component: Title
    },
    {
      path: '/utility',
      component: Utility,
      name: "Utility"
    },
    {
      path: '/family',
      component: Family,
      name: "Family"
    },
    {
      path: '/family1',
      component: PersonalRegistration,
      
    }
  ]
});
