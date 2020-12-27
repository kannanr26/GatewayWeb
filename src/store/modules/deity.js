//  import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export default {
  state: {
    deitys: []
  },
  getters: {
    getDeity(state) {
      return state.deitys;
    },
  },
  mutations: {
    addDeityList(state, newDeity) {
      state.deitys.push(newDeity)
    },
    deleteDeityList(state, deleteDeity) {
      state.deitys = state.deitys.filter
        (deity => ((deity.deityName !== deleteDeity.deityName) &&
          (deity.id !== deleteDeity.id)));
    },
    SET_DeityList: (state, data) => {
      state.deitys = data;
    },
  },
  actions: {
    addDeity({ commit }, deity) {
      let id = deity.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addDeity', deity,
          { headers }).then(response => {
            commit('SET_MESSAGE', response.data.message);
            commit('SET_SUCCESS', response.data.success);
            if (id == 0 || id === undefined) {
              commit('addDeityList', response.data.obj);
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
    async getDeityByCity({ commit }, id) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getDeitysByCity/' + id, '', { headers }).then(response => {
        //  console.log(response.data);
          commit('SET_DeityList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteDeity({ commit }, deity) {
      return new Promise((resolve, reject) => {
        let id = deity.id;
        return axios.delete(API_URL + 'gws/deleteDeity/' + id,
          '', { headers }).then(response => {
            commit('SET_MESSAGE', response.data.message);
            commit('SET_SUCCESS', response.data.success);
            commit('deleteDeityList', deity);
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