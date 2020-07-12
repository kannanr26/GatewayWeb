import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    gothirams: []
  },
  getters: {
    getGothiram(state) {
      return state.gothirams;
    },
  },
  mutations: {
    addGothiramList(state, newGothiram) {
      state.gothirams.push(newGothiram)
    },
    deleteGothiramList(state, deleteGothiram) {
      state.gothirams = state.gothirams.filter
      (gothiram => ( (gothiram.gothiramName !== deleteGothiram.gothiramName) &&
      (gothiram.id !== deleteGothiram.id)) );
    },
    SET_GothiramList: (state, data) => {
      state.gothirams = data;
    },
  },
  actions: {
    addGothiram({ commit }, gothiram) {
      let id= gothiram.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addGothiram', gothiram,
         { headers }).then(response => {
          commit('SET_MESSAGE', response.data.message, true);
          if(id==0 || id===undefined){
             commit('addGothiramList', response.data.obj);
          }
          resolve(response);
        })
          .catch(error => {
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getGothirams({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getGothirams', '', { headers }).then(response => {
          commit('SET_GothiramList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteGothiram({ commit }, gothiram) {

      return new Promise((resolve, reject) => {
        let id = gothiram.id;
        return axios.delete(API_URL + 'gws/deleteGothiram/' + id, 
        '', { headers }).then(response => {
        commit('SET_MESSAGE', response.data.message, response.data.success);    
        commit('deleteGothiramList', gothiram);
       
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