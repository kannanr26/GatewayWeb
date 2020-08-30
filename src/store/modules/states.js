
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export default {
  state: {
    country: '',
    states:[],
  },
  getters: {
   /* getState(state) {
      return state.states;
    },*/
  },
  mutations: {
    addStateList(state, newCountry) {
      state.countrys.push(newCountry)
    },
    deleteStateList(state, deleteCountry) {
      state.countrys = state.countrys.filter
        (country => ((country.countryName !== deleteCountry.countryName) &&
        (country.id !== deleteCountry.id)));
    },
    SET_StateList: (state, data) => {
      state.countrys = data;
    },
  },
  actions: {
    addState({ commit },state) {
      let id = state.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addState', state,
          { headers }).then(response => {
            console.log(response.data.success);
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
    async getStates({ commit },country) {
      let countryId=country.countryId;
      console.log(countryId);
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getStates/'+countryId, '', { headers }).then(response => {
          commit('SET_StateList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteState({ commit }, state) {
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