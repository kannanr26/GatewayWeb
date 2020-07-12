import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    castes: []
  },
  getters: {
    getCaste(state) {
      return state.castes;
    },
  },
  mutations: {
    addCasteList(state, newCaste) {
      state.castes.push(newCaste)
    },
    deleteCasteList(state, deleteCaste) {
      state.castes = state.castes.filter
      (caste => ( (caste.casteName !== deleteCaste.casteName) &&
      (caste.id !== deleteCaste.id)) );
    },
    SET_CasteList: (state, data) => {
      state.castes = data;
    },
  },
  actions: {
    addCaste({ commit }, caste) {
      let id= caste.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addCaste', caste,
         { headers }).then(response => {
          commit('SET_MESSAGE', response.data.message, true);
          if(id==0 || id===undefined){
             commit('addCasteList', response.data.obj);
          }
          resolve(response);
        })
          .catch(error => {
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getCastes({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getCastes', '', { headers }).then(response => {
          commit('SET_CasteList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteCaste({ commit }, caste) {

      return new Promise((resolve, reject) => {
        let id = caste.id;
        return axios.delete(API_URL + 'gws/deleteCaste/' + id, 
        '', { headers }).then(response => {
        commit('SET_MESSAGE', response.data.message, response.data.success);    
        commit('deleteCasteList', caste);
       
        resolve(response);
        })
          .catch(error => {
             console.log(error.response.data.message);
             commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    
    //  dispatch('saveToKulams')
    }
  }
}