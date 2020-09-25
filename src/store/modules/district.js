
import { API_URL } from "@/common/config";
import axios from 'axios';
//import state from "./state";

const headers = {
  'Content-Type': 'application/json',
};

export default {
  state: {
  
    district:[],

  },
  getters: {
    getDistrict(state) {
      return state.district;
    },
  },
  mutations: {
    addDistrictList(state, newDistrict) {
      state.district.push(newDistrict)
    },
    deleteDistrictList(state, deleteDistrict) {
      state.district = state.district.filter
        (district => ((district.districtName !== deleteDistrict.districtName) &&
        (district.id !== deleteDistrict.id)));
    },
  
    SET_DISTRICTLIST: (state, data) => {
      state.district = data;
    } 

  },
  actions: {
   
    addDistrict({ commit },district) {
      let id = district.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addDistrict', district,
          { headers }).then(response => {
            console.log(response.data.success);
            commit('SET_MESSAGE', response.data.message);
            commit('SET_SUCCESS', response.data.success);
            if (id == 0 || id === undefined) {
              commit('addDistrictList', response.data.obj);
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
    async getDistricts({commit},stateSelected) {
     
      var stateId=stateSelected;
      console.log("in getDistrict:"+stateId);
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getDistricts/'+stateId, '', { headers }).then(response => {
          commit('SET_DISTRICTLIST', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteDistrict({ commit }, district) {
      return new Promise((resolve, reject) => {
        let id = district.id;
        return axios.delete(API_URL + 'gws/deleteDistrict/' + id,
          '', { headers }).then(response => {
            commit('deleteDistrictList', district);
  
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