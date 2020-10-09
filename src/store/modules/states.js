
import { API_URL } from "@/common/config";
import axios from 'axios';
//import state from "./state";

const headers = {
  'Content-Type': 'application/json',
};

export default {
  state: {

    states: [],

  },
  getters: {
    getStates(state) {
      return state.states;
    },
  },
  mutations: {
    addStateList(state, newStates) {
      state.states.push(newStates)
    },
    deleteStateList(state, deleteStates) {
      state.states = state.states.filter
        (states => ((states.StateName !== deleteStates.stateName) &&
          (states.id !== deleteStates.id)));
    },

    SET_STATELIST: (state, data) => {
      state.states = data;
    }

  },
  actions: {

    addStates({ commit }, state) {
      let id = state.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addState', state,
          { headers }).then(response => {
            commit('SET_MESSAGE', response.data.message);
            commit('SET_SUCCESS', response.data.success);
            if (id == 0 || id === undefined) {
              commit('addStateList', response.data.obj);
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
    async getStates({ commit }, countrySelected) {
      var countryId = countrySelected;
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getStates/' + countryId, '', { headers }).then(response => {
          commit('SET_STATELIST', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteStates({ commit }, state) {
      return new Promise((resolve, reject) => {
        let id = state.id;
        return axios.delete(API_URL + 'gws/deleteState/' + id,
          '', { headers }).then(response => {
            commit('deleteStateList', state);

            commit('SET_MESSAGE', response.data.message);
            commit('SET_SUCCESS', response.data.success);
            resolve(response);
          })
          .catch(error => {
            commit('SET_MESSAGE', error.response.data.message);
            commit('SET_SUCCESS', error.response.data.success);
            reject(error);
          });
      });
      //  dispatch('saveToKulams')
    },
  }
}