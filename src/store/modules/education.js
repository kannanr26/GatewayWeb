import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export default {
  state: {
    educations: []
  },
  getters: {
    getEducation(state) {
      return state.educations;
    },
  },
  mutations: {
    addEducationList(state, newEducation) {
      state.educations.push(newEducation)
    },
    deleteEducationList(state, deleteEducation) {
      state.educations = state.educations.filter
        (education => ((education.educationName !== deleteEducation.educationName) &&
          (education.id !== deleteEducation.id)));
    },
    SET_EducationList: (state, data) => {
      state.educations = data;
    },
  },
  actions: {
    addEducation({ commit }, education) {
      let id = education.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addEducation', education,
          { headers }).then(response => {
            commit('SET_MESSAGE', response.data.message);
            commit('SET_SUCCESS', response.data.success);
            if (id == 0 || id === undefined) {
              commit('addEducationList', response.data.obj);
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
    async getEducations({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getEducations', '', { headers }).then(response => {
          commit('SET_EducationList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteEducation({ commit }, education) {
      return new Promise((resolve, reject) => {
        let id = education.id;
        return axios.delete(API_URL + 'gws/deleteEducation/' + id,
          '', { headers }).then(response => {
            commit('SET_MESSAGE', response.data.message);
            commit('SET_SUCCESS', response.data.success);
            commit('deleteEducationList', education);
            resolve(response);
          })
          .catch(error => {
            commit('SET_MESSAGE', error.response.data.message);
            commit('SET_SUCCESS', error.response.data.success);
            reject(error);
          });
      });
      //  dispatch('saveToKulams')
    }
  }
}