import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    deitys: [],
    dataFields: ['deitys']
  },
  getters: {
    getDeity(state) {
      console.log('get Deity');
      return state.deitys;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addDeity(state, newDeity) {
      state.deitys.push(newDeity)
    },
    deleteDeity(state, { deityIndex }) {
      state.deitys.splice(deityIndex, 1)
    },
    SET_DEITYS: (state, data) => {
      console.log("deitys in MUT" + data)
      state.deitys = data;
    },
  },
  actions: {
    addDeity({ commit }, deity) {

      console.log("in add deity");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addDeity', deity, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/adddeity', deity).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addDeity', deity)
         // dispatch('saveDeitys')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getDeity({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getDeitys', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/adddeity', deity).then(response => {
          console.log('get action Deity');

          console.log(response.data)
          commit('SET_DEITYS', response.data);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
            // commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    deleteDeity({ commit }, deity) {

      return new Promise((resolve, reject) => {
        let id = deity.id;
        return axios.delete(API_URL + 'gws/deleteDeity/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/adddeity', deity).then(response => {
          console.log('get action Deity');

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
      //commit('deleteDeity', deity)
    //  dispatch('saveToDeitys')
    },
    async saveToDeitys({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}