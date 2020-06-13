import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    castes: [],
    dataFields: ['castes']
  },
  getters: {
    getCaste(state) {
      console.log('get Caste');
      return state.castes;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addCaste(state, newCaste) {
      state.castes.push(newCaste)
    },
    deleteCaste(state, { casteIndex }) {
      state.castes.splice(casteIndex, 1)
    },
    SET_CASTES: (state, data) => {
      console.log("castes in MUT" + data)
      state.castes = data;
    },
  },
  actions: {
    addCaste({ commit }, caste) {

      console.log("in add caste");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addCaste', caste, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addcaste', caste).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addCaste', caste)
         // dispatch('saveCastes')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getCaste({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getCastes', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addcaste', caste).then(response => {
          console.log('get action Caste');

          console.log(response.data)
          commit('SET_CASTES', response.data);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
            // commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    deleteCaste({ commit }, caste) {

      return new Promise((resolve, reject) => {
        let id = caste.id;
        return axios.delete(API_URL + 'gws/deleteCaste/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addcaste', caste).then(response => {
          console.log('get action Caste');

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
      //commit('deleteCaste', caste)
    //  dispatch('saveToCastes')
    },
    async saveToCastes({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}