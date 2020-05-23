import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import Title from '@/views/Title.vue';
import Kulam from '@/views/UKulam.vue';
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
      path: '/Kulam',
      component: Kulam,
      name: "Kulam"
    }
  ]
});
