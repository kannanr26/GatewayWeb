import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    occupations: [],
    dataFields: ['occupations']
  },
  getters: {
    getOccupation(state) {
      console.log('get Occupation');
      return state.occupations;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addOccupation(state, newOccupation) {
      state.occupations.push(newOccupation)
    },
    deleteOccupation(state, { occupationIndex }) {
      state.occupations.splice(occupationIndex, 1)
    },
    SET_OCCUPATIONS: (state, data) => {
      console.log("occupations in MUT" + data)
      state.occupations = data;
    },
  },
  actions: {
    addOccupation({ commit }, occupation) {

      console.log("in add occupation");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addOccupation', occupation, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addoccupation', occupation).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addOccupation', occupation)
         // dispatch('saveOccupations')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getOccupation({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getOccupations', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addoccupation', occupation).then(response => {
          console.log('get action Occupation');

          console.log(response.data)
          commit('SET_OCCUPATIONS', response.data);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
            // commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    deleteOccupation({ commit }, occupation) {

      return new Promise((resolve, reject) => {
        let id = occupation.id;
        return axios.delete(API_URL + 'gws/deleteOccupation/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addoccupation', occupation).then(response => {
          console.log('get action Occupation');

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
      //commit('deleteOccupation', occupation)
    //  dispatch('saveToOccupations')
    },
    async saveToOccupations({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}