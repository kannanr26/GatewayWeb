import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    gothirams: [],
    dataFields: ['gothirams']
  },
  getters: {
    getGothirams(state) {
      console.log('get Gothiram');
      return state.gothirams;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addGothiram(state, newGothiram) {
      state.gothirams.push(newGothiram)
    },
    deleteGothiram(state, { gothiramIndex }) {
      state.gothirams.splice(gothiramIndex, 1)
    },
    SET_GOTHIRAMS: (state, data) => {
      console.log("gothirams in MUT" + data)
      state.gothirams = data;
    },
  },
  actions: {
    addGothiram({ commit }, gothiram) {

      console.log("in add gothiram");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addGothiram', gothiram, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addgothiram', gothiram).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addGothiram', gothiram)
         // dispatch('saveGothirams')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getGothirams({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getGothirams', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addgothiram', gothiram).then(response => {
          console.log('get action Gothiram');

          console.log(response.data)
          commit('SET_GOTHIRAMS', response.data);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
            // commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    deleteGothiram({ commit }, gothiram) {

      return new Promise((resolve, reject) => {
        let id = gothiram.id;
        return axios.delete(API_URL + 'gws/deleteGothiram/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addgothiram', gothiram).then(response => {
          console.log('get action Gothiram');

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
      //commit('deleteGothiram', gothiram)
    //  dispatch('saveToGothirams')
    },
    async saveToGothirams({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}