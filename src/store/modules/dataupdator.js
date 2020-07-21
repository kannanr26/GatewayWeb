import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export default {
  state: {
    dataUpdators: []
  },
  getters: {
    getDataUpdator(state) {
      return state.dataUpdators;
    },
  },
  mutations: {
    addDataUpdatorList(state, newDataUpdator) {
      state.dataUpdators.push(newDataUpdator)
    },
    deleteDataUpdatorList(state, deleteDataUpdator) {
      state.dataUpdators = state.dataUpdators.filter
        (dataUpdator => ((dataUpdator.operatorTypeName !== deleteDataUpdator.operatorTypeName) &&
        (dataUpdator.id !== deleteDataUpdator.id)));
    },
    SET_DataUpdatorList: (state, data) => {
      state.dataUpdators = data;
    },
  },
  actions: {
    addDataUpdator({ commit }, dataUpdator) {
      let id = dataUpdator.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addOperatorType', dataUpdator,
         { headers }).then(response => {
            console.log(response.data.success);
            commit('SET_MESSAGE', response.data.message);
            commit('SET_SUCCESS', response.data.success);
            if (id == 0 || id === undefined) {
              commit('addDataUpdatorList', response.data.obj);
          }
          resolve(response);
        })
          .catch(error => {
            commit('SET_MESSAGE', error.response.data.message);
            commit('SET_SUCCESS', error.response.data.success);
            reject(error);
          });
      });
    },
    async getDataUpdators({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getOperatorTypes', '', { headers }).then(response => {
          commit('SET_DataUpdatorList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteDataUpdator({ commit }, dataUpdator) {
      return new Promise((resolve, reject) => {
        let id = dataUpdator.id;
        return axios.delete(API_URL + 'gws/deleteOperatorType/' + id, 
        '', { headers }).then(response => {
          commit('SET_MESSAGE', response.data.message);
          commit('SET_SUCCESS', response.data.success);
          commit('deleteDataUpdatorList', dataUpdator);
          resolve(response);
        })
        .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message);
            commit('SET_SUCCESS', error.response.data.success);
            reject(error);
        });
      });
  //  dispatch('saveToKulams')
    }
  }
}