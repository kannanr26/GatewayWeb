import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    countrys: [],
    dataFields: ['countrys']
  },
  getters: {
    getCountry(state) {
      console.log('get Country');
      return state.countrys;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addCountry(state, newCountry) {
      state.countrys.push(newCountry)
    },
    deleteCountry(state, { countryIndex }) {
      state.countrys.splice(countryIndex, 1)
    },
    SET_EDUCATIONS: (state, data) => {
      console.log("countrys in MUT" + data)
      state.countrys = data;
    },
  },
  actions: {
    addCountry({ commit }, country) {

      console.log("in add country");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addCountry', country, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addcountry', country).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addCountry', country)
         // dispatch('saveCountrys')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getCountry({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getCountries', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addcountry', country).then(response => {
          console.log('get action Country');

          console.log(response.data)
          commit('SET_EDUCATIONS', response.data);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
            // commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    deleteCountry({ commit }, country) {

      return new Promise((resolve, reject) => {
        let id = country.id;
        return axios.delete(API_URL + 'gws/deleteCountry/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addcountry', country).then(response => {
          console.log('get action Country');

          console.log(response.data)
          commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
             commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
      //commit('deleteCountry', country)
    //  dispatch('saveToCountrys')
    },
    async saveToCountrys({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}