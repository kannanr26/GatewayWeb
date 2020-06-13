import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    jobtypes: [],
    dataFields: ['jobtypes']
  },
  getters: {
    getJobtype(state) {
      console.log('get Jobtype');
      return state.jobtypes;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addJobtype(state, newJobtype) {
      state.jobtypes.push(newJobtype)
    },
    deleteJobtype(state, { jobtypeIndex }) {
      state.jobtypes.splice(jobtypeIndex, 1)
    },
    SET_JOBTYPES: (state, data) => {
      console.log("jobtypes in MUT" + data)
      state.jobtypes = data;
    },
  },
  actions: {
    addJobtype({ commit }, jobtype) {

      console.log("in add jobtype");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addJob', jobtype, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addJob', jobtype).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addJobtype', jobtype)
         // dispatch('saveJobtypes')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getJobtype({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getJobs', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addjobtype', jobtype).then(response => {
          console.log('get action Jobtype');

          console.log(response.data)
          commit('SET_JOBTYPES', response.data);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
            // commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    deleteJobtype({ commit }, jobtype) {

      return new Promise((resolve, reject) => {
        let id = jobtype.id;
        return axios.delete(API_URL + 'gws/deleteJob/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addjobtype', jobtype).then(response => {
          console.log('get action Jobtype');

          console.log(response.data)
          commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
             commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
      //commit('deleteJobtype', jobtype)
    //  dispatch('saveToJobtypes')
    },
    async saveToJobtypes({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}