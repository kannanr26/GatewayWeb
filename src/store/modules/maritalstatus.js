import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    maritalstatuss: [],
    dataFields: ['maritalstatuss']
  },
  getters: {
    getMaritalstatus(state) {
      console.log('get Maritalstatus');
      return state.maritalstatuss;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addMaritalstatus(state, newMaritalstatus) {
      state.maritalstatuss.push(newMaritalstatus)
    },
    deleteMaritalstatus(state, { maritalstatusIndex }) {
      state.maritalstatuss.splice(maritalstatusIndex, 1)
    },
    SET_EDUCATIONS: (state, data) => {
      console.log("maritalstatuss in MUT" + data)
      state.maritalstatuss = data;
    },
  },
  actions: {
    addMaritalstatus({ commit }, maritalstatus) {

      console.log("in add maritalstatus");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addMaritalStatus', maritalstatus, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addmaritalstatus', maritalstatus).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addMaritalstatus', maritalstatus)
         // dispatch('saveMaritalstatuss')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getMaritalstatus({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getMaritalStatuses', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addmaritalstatus', maritalstatus).then(response => {
          console.log('get action Maritalstatus');

          console.log(response.data)
          commit('SET_EDUCATIONS', response.data);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
            // commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    deleteMaritalstatus({ commit }, maritalstatus) {

      return new Promise((resolve, reject) => {
        let id = maritalstatus.id;
        return axios.delete(API_URL + 'gws/deleteMaritalStatus/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addmaritalstatus', maritalstatus).then(response => {
          console.log('get action Maritalstatus');

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
      //commit('deleteMaritalstatus', maritalstatus)
    //  dispatch('saveToMaritalstatuss')
    },
    async saveToMaritalstatuss({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}