import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export default {
  state: {
    businesstypes: []
  },
  getters: {
    getBusinesstype(state) {
      return state.businesstypes;
    },
  },
  mutations: {
    addBusinesstypeList(state, newBusinesstype) {
      state.businesstypes.push(newBusinesstype)
    },
    deleteBusinesstypeList(state, deleteBusinesstype) {
      state.businesstypes = state.businesstypes.filter
        (businesstype => ((businesstype.businessName !== deleteBusinesstype.businessName) &&
        (businesstype.id !== deleteBusinesstype.id)));
    },
    SET_BusinesstypeList: (state, data) => {
      state.businesstypes = data;
    },
  },
  actions: {
    addBusinesstype({ commit }, businesstype) {
      let id = businesstype.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addBusiness', businesstype,
         { headers }).then(response => {
            console.log(response.data.success);
            commit('SET_MESSAGE', response.data.message);
            commit('SET_SUCCESS', response.data.success);
            if (id == 0 || id === undefined) {
              commit('addBusinesstypeList', response.data.obj);
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
    async getBusinesstypes({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getBusiness', '', { headers }).then(response => {
          commit('SET_BusinesstypeList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteBusinesstype({ commit }, businesstype) {
      return new Promise((resolve, reject) => {
        let id = businesstype.id;
        return axios.delete(API_URL + 'gws/deleteBusiness/' + id, 
        '', { headers }).then(response => {
          commit('SET_MESSAGE', response.data.message);
          commit('SET_SUCCESS', response.data.success);
          commit('deleteBusinesstypeList', businesstype);
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