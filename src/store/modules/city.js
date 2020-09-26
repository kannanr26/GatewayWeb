
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export default {
  state: {
  
   city:[],

  },
  getters: {
    getCities(state) {
      return state.city;
    },
  },
  mutations: {
    addCityList(state, newCity) {
      state.city.push(newCity)
    },
    deleteCityList(state, deleteCity) {
      state.city = state.city.filter
        (city => ((city.cityName !== deleteCity.cityName) &&
        (city.id !== deleteCity.id)));
    },
  
    SET_CITYLIST: (state, data) => {
      state.city = data;
    } 

  },
  actions: {
   
    addCity({ commit },city) {
      let id = city.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addCity', city,
          { headers }).then(response => {
            console.log(response.data.success);
            commit('SET_MESSAGE', response.data.message);
            commit('SET_SUCCESS', response.data.success);
            if (id == 0 || id === undefined) {
              commit('addCityList', response.data.obj);
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
    async getCities({commit},districtSelected) {
     
      var districtId=districtSelected;
      console.log("in getDistrict:"+districtId);
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getCitys/'+districtId, '', { headers }).then(response => {
          commit('SET_CITYLIST', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteCity({ commit }, city) {
      return new Promise((resolve, reject) => {
        let id = city.id;
        return axios.delete(API_URL + 'gws/deleteCity/' + id,
          '', { headers }).then(response => {
            commit('deleteCityList', city);
  
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
    },
  }
}