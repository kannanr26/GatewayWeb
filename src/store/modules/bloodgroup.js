import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    bloodgroups: [],
    dataFields: ['bloodgroups']
  },
  getters: {
    getBloodgroup(state) {
      console.log('get Bloodgroup');
      return state.bloodgroups;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addBloodgroup(state, newBloodgroup) {
      state.bloodgroups.push(newBloodgroup)
    },
    deleteBloodgroup(state, { bloodgroupIndex }) {
      state.bloodgroups.splice(bloodgroupIndex, 1)
    },
    SET_BLOODGROUPS: (state, data) => {
      console.log("bloodgroups in MUT" + data)
      state.bloodgroups = data;
    },
  },
  actions: {
    addBloodgroup({ commit }, bloodgroup) {

      console.log("in add bloodgroup");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addBloodgroup', bloodgroup, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addbloodgroup', bloodgroup).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addBloodgroup', bloodgroup)
         // dispatch('saveBloodgroups')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getBloodgroup({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getBloodgroups', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addbloodgroup', bloodgroup).then(response => {
          console.log('get action Bloodgroup');

          console.log(response.data)
          commit('SET_BLOODGROUPS', response.data);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
            // commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    deleteBloodgroup({ commit }, bloodgroup) {

      return new Promise((resolve, reject) => {
        let id = bloodgroup.id;
        return axios.delete(API_URL + 'gws/deleteBloodgroup/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addbloodgroup', bloodgroup).then(response => {
          console.log('get action Bloodgroup');

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
      //commit('deleteBloodgroup', bloodgroup)
    //  dispatch('saveToBloodgroups')
    },
    async saveToBloodgroups({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}