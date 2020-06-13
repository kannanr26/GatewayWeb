import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    dataupdators: [],
    dataFields: ['dataupdators']
  },
  getters: {
    getDataupdator(state) {
      console.log('get Dataupdator');
      return state.dataupdators;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addDataupdator(state, newDataupdator) {
      state.dataupdators.push(newDataupdator)
    },
    deleteDataupdator(state, { dataupdatorIndex }) {
      state.dataupdators.splice(dataupdatorIndex, 1)
    },
    SET_DATAUPDATORS: (state, data) => {
      console.log("dataupdators in MUT" + data)
      state.dataupdators = data;
    },
  },
  actions: {
    addDataupdator({ commit }, dataupdator) {

      console.log("in add dataupdator");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addOperatorType', dataupdator, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/adddataupdator', dataupdator).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addDataupdator', dataupdator)
         // dispatch('saveDataupdators')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getDataupdator({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getOperatorTypes', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/adddataupdator', dataupdator).then(response => {
          console.log('get action Dataupdator');

          console.log(response.data)
          commit('SET_DATAUPDATORS', response.data);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
            // commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    deleteDataupdator({ commit }, dataupdator) {

      return new Promise((resolve, reject) => {
        let id = dataupdator.id;
        return axios.delete(API_URL + 'gws/deleteOperatorType/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/adddataupdator', dataupdator).then(response => {
          console.log('get action Dataupdator');

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
      //commit('deleteDataupdator', dataupdator)
    //  dispatch('saveToDataupdators')
    },
    async saveToDataupdators({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}