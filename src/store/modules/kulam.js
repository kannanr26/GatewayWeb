import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    kulams: [],
    dataFields: ['kulams']
  },
  getters: {
    getKulams(state) {
      console.log('get Kulam');
      return state.kulams;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addKulam(state, newKulam) {
      state.kulams.push(newKulam)
    },
    deleteKulam(state, { kulamIndex }) {
      state.kulams.splice(kulamIndex, 1)
    },
    SET_KULAMS: (state, data) => {
      console.log("kulams in MUT" + data)
      state.kulams = data;
    },
  },
  actions: {
    addKulam({ commit }, kulam) {

      console.log("in add kulam");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addKulam', kulam, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addkulam', kulam).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addKulam', kulam)
         // dispatch('saveKulams')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getKulam({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getKulams', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addkulam', kulam).then(response => {
          console.log('get action Kulam');

          console.log(response.data)
          commit('SET_KULAMS', response.data);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
            // commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    deleteKulam({ commit }, kulam) {

      return new Promise((resolve, reject) => {
        let id = kulam.id;
        return axios.delete(API_URL + 'gws/deleteKulam/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addkulam', kulam).then(response => {
          console.log('get action Kulam');

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
      //commit('deleteKulam', kulam)
    //  dispatch('saveToKulams')
    },
    async saveToKulams({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}