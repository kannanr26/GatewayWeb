import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    occupations: []
  },
  getters: {
    getOccupation(state) {
      return state.occupations;
    },
  },
  mutations: {
    addOccupationList(state, newOccupation) {
      state.occupations.push(newOccupation)
    },
    deleteOccupationList(state, deleteOccupation) {
      state.occupations = state.occupations.filter
      (occupation => ( (occupation.occupationName !== deleteOccupation.occupationName) &&
      (occupation.id !== deleteOccupation.id)) );
    },
    SET_OccupationList: (state, data) => {
      state.occupations = data;
    },
  },
  actions: {
    addOccupation({ commit }, occupation) {
      let id= occupation.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addOccupation', occupation,
         { headers }).then(response => {
          commit('SET_MESSAGE', response.data.message, true);
          if(id==0 || id===undefined){
             commit('addOccupationList', response.data.obj);
          }
          resolve(response);
        })
          .catch(error => {
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getOccupations({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getOccupations', '', { headers }).then(response => {
          commit('SET_OccupationList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteOccupation({ commit }, occupation) {

      return new Promise((resolve, reject) => {
        let id = occupation.id;
        return axios.delete(API_URL + 'gws/deleteOccupation/' + id, 
        '', { headers }).then(response => {
        commit('SET_MESSAGE', response.data.message, response.data.success);    
        commit('deleteOccupationList', occupation);
       
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