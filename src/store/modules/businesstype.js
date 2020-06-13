import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    businesstypes: [],
    dataFields: ['businesstypes']
  },
  getters: {
    getBusinesstype(state) {
      console.log('get Businesstype');
      return state.businesstypes;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addBusinesstype(state, newBusinesstype) {
      state.businesstypes.push(newBusinesstype)
    },
    deleteBusinesstype(state, { businesstypeIndex }) {
      state.businesstypes.splice(businesstypeIndex, 1)
    },
    SET_BUSINESSTYPES: (state, data) => {
      console.log("businesstypes in MUT" + data)
      state.businesstypes = data;
    },
  },
  actions: {
    addBusinesstype({ commit }, businesstype) {

      console.log("in add businesstype");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addBusiness', businesstype, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addbusinesstype', businesstype).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addBusinesstype', businesstype)
         // dispatch('saveBusinesstypes')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getBusinesstype({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getBusiness', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addbusinesstype', businesstype).then(response => {
          console.log('get action Businesstype');

          console.log(response.data)
          commit('SET_BUSINESSTYPES', response.data);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
            // commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    deleteBusinesstype({ commit }, businesstype) {

      return new Promise((resolve, reject) => {
        let id = businesstype.id;
        return axios.delete(API_URL + 'gws/deleteBusiness/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addbusinesstype', businesstype).then(response => {
          console.log('get action Businesstype');

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
      //commit('deleteBusinesstype', businesstype)
    //  dispatch('saveToBusinesstypes')
    },
    async saveToBusinesstypes({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}