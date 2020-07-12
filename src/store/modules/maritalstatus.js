import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    maritalStatuss: []
  },
  getters: {
    getMaritalStatus(state) {
      return state.maritalStatuss;
    },
  },
  mutations: {
    addMaritalStatusList(state, newMaritalStatus) {
      state.maritalStatuss.push(newMaritalStatus)
    },
    deleteMaritalStatusList(state, deleteMaritalStatus) {
      state.maritalStatuss = state.maritalStatuss.filter
      (maritalStatus => ( (maritalStatus.maritalStatusName !== deleteMaritalStatus.maritalStatusName) &&
      (maritalStatus.id !== deleteMaritalStatus.id)) );
    },
    SET_MaritalStatusList: (state, data) => {
      state.maritalStatuss = data;
    },
  },
  actions: {
    addMaritalStatus({ commit }, maritalStatus) {
      let id= maritalStatus.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addMaritalStatus', maritalStatus,
         { headers }).then(response => {
          commit('SET_MESSAGE', response.data.message, true);
          if(id==0 || id===undefined){
             commit('addMaritalStatusList', response.data.obj);
          }
          resolve(response);
        })
          .catch(error => {
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getMaritalStatuss({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getMaritalStatuses', '', { headers }).then(response => {
          commit('SET_MaritalStatusList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteMaritalStatus({ commit }, maritalStatus) {

      return new Promise((resolve, reject) => {
        let id = maritalStatus.id;
        return axios.delete(API_URL + 'gws/deleteMaritalStatus/' + id, 
        '', { headers }).then(response => {
        commit('SET_MESSAGE', response.data.message, response.data.success);    
        commit('deleteMaritalStatusList', maritalStatus);
       
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