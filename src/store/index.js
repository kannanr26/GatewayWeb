import Vuex from 'vuex';
import Vue from 'vue';

import auth from './modules/auth';
import title from './modules/title';

import kulam from './modules/kulam';
import education from './modules/education';

import gothiram from './modules/gothiram';
import jobtype from './modules/jobtype';
import bloodgroup from './modules/bloodgroup';
import associationcommittee from './modules/associationcommittee';
import caste from './modules/caste';
import dataupdator from './modules/dataupdator';
import role from './modules/role';
import maritalstatus from './modules/maritalstatus';
import course from './modules/course';
import country from './modules/country';
import relationship from './modules/relationship';
import permission from './modules/permission';
import occupation from './modules/occupation';
import businesstype from './modules/businesstype';
import deity from './modules/deity';
import states from './modules/states';

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
    jobtype,
    bloodgroup,
    associationcommittee,
    caste,
    dataupdator,
    role,
    maritalstatus,
    course,
    country,
    states,
    relationship,
    permission,
    occupation,
    businesstype,
    //jobTitletype,
    deity


  }
});

