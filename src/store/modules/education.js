import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    educations: [],
    dataFields: ['educations']
  },
  getters: {
    getEducation(state) {
      console.log('get Education');
      return state.educations;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addEducation(state, newEducation) {
      state.educations.push(newEducation)
    },
    deleteEducation(state, { educationIndex }) {
      state.educations.splice(educationIndex, 1)
    },
    SET_EDUCATIONS: (state, data) => {
      console.log("educations in MUT" + data)
      state.educations = data;
    },
  },
  actions: {
    addEducation({ commit }, education) {

      console.log("in add education");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addEducation', education, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addeducation', education).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addEducation', education)
         // dispatch('saveEducations')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getEducation({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getEducations', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addeducation', education).then(response => {
          console.log('get action Education');

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
    deleteEducation({ commit }, education) {

      return new Promise((resolve, reject) => {
        let id = education.id;
        return axios.delete(API_URL + 'gws/deleteEducation/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addeducation', education).then(response => {
          console.log('get action Education');

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
      //commit('deleteEducation', education)
    //  dispatch('saveToEducations')
    },
    async saveToEducations({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}