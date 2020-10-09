//import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export default {
  state: {
    dataUpdatorType: []
  },
  getters: {
    getDataUpdatorType(state) {
      return state.dataUpdatorType;
    },
  },
  mutations: {
    addDataUpdatorTypeList(state, newDataUpdatorType) {
      state.dataUpdatorType.push(newDataUpdatorType)
    },
    deleteDataUpdatorTypeList(state, deleteDataUpdatorType) {
      state.dataUpdatorType = state.dataUpdatorType.filter
        (dataUpdatorType => ((dataUpdatorType.operatorTypeName !== deleteDataUpdatorType.operatorTypeName) &&
          (dataUpdatorType.id !== deleteDataUpdatorType.id)));
    },
    SET_DataUpdatorTypeList: (state, data) => {
      state.dataUpdatorType = data;
    },
  },
  actions: {
    addDataUpdatorType({ commit }, dataUpdatorType) {
      let id = dataUpdatorType.id;
      return new Promise((resolve, reject) => {
      //  console.log()
        return axios.post(API_URL + 'gws/addOperatorType', dataUpdatorType,
          { headers }).then(response => {
            commit('SET_MESSAGE', response.data.message);
            commit('SET_SUCCESS', response.data.success);
            if (id == 0 || id === undefined) {
              commit('addDataUpdatorTypeList', response.data.obj);
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
    async getDataUpdatorTypes({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getOperatorTypes', '', { headers }).then(response => {
          commit('SET_DataUpdatorTypeList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteDataUpdatorType({ commit }, dataUpdatorType) {
      return new Promise((resolve, reject) => {
        let id = dataUpdatorType.id;
        return axios.delete(API_URL + 'gws/deleteOperatorType/' + id,
          '', { headers }).then(response => {
            commit('SET_MESSAGE', response.data.message);
            commit('SET_SUCCESS', response.data.success);
            commit('deleteDataUpdatorTypeList', dataUpdatorType);
            resolve(response);
          })
          .catch(error => {
            commit('SET_MESSAGE', error.response.data.message);
            commit('SET_SUCCESS', error.response.data.success);
            reject(error);
          });
      });
      //  dispatch('saveToKulams')
    }
  }
}