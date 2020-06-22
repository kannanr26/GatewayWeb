import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    kulams: []
  },
  getters: {
    getKulams(state) {
      console.log('get Kulam');
      return state.kulams;
    },
  },
  mutations: {
    addKulamList(state, newKulam) {
      state.kulams.push(newKulam)
    },
    deleteKulamList(state, { kulamIndex }) {
      console.log('splice kulamindex'+kulamIndex)
      state.kulams.splice(kulamIndex, 1)
    },
    SET_KulamList: (state, data) => {
      console.log("kulams in MUT" + data)
      state.kulams = data;
    },
  },
  actions: {
    addKulam({ commit }, kulam) {
      let id= kulam.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addKulam', kulam,
         { headers }).then(response => {
          commit('SET_MESSAGE', response.data.message, true);
          if(id==0 || id===undefined){
             commit('addKulamList', response.data.obj);
          }
          resolve(response);
        })
          .catch(error => {
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getKulam({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getKulams', '', { headers }).then(response => {
          commit('SET_KulamList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteKulam({ commit }, kulam) {

      return new Promise((resolve, reject) => {
        let id = kulam.id;
        return axios.delete(API_URL + 'gws/deleteKulam/' + id, 
        '', { headers }).then(response => {
        commit('SET_MESSAGE', response.data.message, response.data.success);    
        commit('deleteKulamList', id);
       
        resolve(response);
        })
          .catch(error => {
             console.log(error.response.data.message);
             commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    
    //  dispatch('saveToKulams')
    },
    async saveToKulams({ state }) {
      state;
      console.log('saveToKulams')
    }
  }
}