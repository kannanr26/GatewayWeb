import Vuex from 'vuex';
import Vue from 'vue';

import auth from './modules/auth';
import title from './modules/title';

import kulam from './modules/kulam';
import education from './modules/education';

import gothiram from './modules/gothiram';



// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    auth,
    title,
    kulam,
    education,
    gothiram,

  }
});

/*

// Create store
export default new Vuex.Store({
  modules: {
    auth,
    title,
    kulam,
    education,
    deity,
    currentlocation,
    permission,
    occupation,
    jobtype,
    businesstype,
    relationship,
    associationcommittee,
    dataupdator,
    gothiram,
    caste,
    bloodgroup
  }

*/