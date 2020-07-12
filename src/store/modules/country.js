import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    countrys: []
  },
  getters: {
    getCountry(state) {
      return state.countrys;
    },
  },
  mutations: {
    addCountryList(state, newCountry) {
      state.countrys.push(newCountry)
    },
    deleteCountryList(state, deleteCountry) {
      state.countrys = state.countrys.filter
      (country => ( (country.countryName !== deleteCountry.countryName) &&
      (country.id !== deleteCountry.id)) );
    },
    SET_CountryList: (state, data) => {
      state.countrys = data;
    },
  },
  actions: {
    addCountry({ commit }, country) {
      let id= country.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addCountry', country,
         { headers }).then(response => {
          commit('SET_MESSAGE', response.data.message, true);
          if(id==0 || id===undefined){
             commit('addCountryList', response.data.obj);
          }
          resolve(response);
        })
          .catch(error => {
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getCountry({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getCountries', '', { headers }).then(response => {
          commit('SET_CountryList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteCountry({ commit }, country) {

      return new Promise((resolve, reject) => {
        let id = country.id;
        return axios.delete(API_URL + 'gws/deleteCountry/' + id, 
        '', { headers }).then(response => {
        commit('SET_MESSAGE', response.data.message, response.data.success);    
        commit('deleteCountryList', country);
       
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