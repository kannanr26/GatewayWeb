import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export default {
  state: {
    jobtypes: []
  },
  getters: {
    getJobtype(state) {
      return state.jobtypes;
    },
  },
  mutations: {
    addJobtypeList(state, newJobtype) {
      state.jobtypes.push(newJobtype)
    },
    deleteJobtypeList(state, deleteJobtype) {
      state.jobtypes = state.jobtypes.filter
        (jobtype => ((jobtype.jobName !== deleteJobtype.jobName) &&
        (jobtype.id !== deleteJobtype.id)));
    },
    SET_JobtypeList: (state, data) => {
      state.jobtypes = data;
    },
  },
  actions: {
    addJobtype({ commit }, jobtype) {
      let id = jobtype.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addJob', jobtype,
         { headers }).then(response => {
          console.log(response.data.success);
          commit('SET_MESSAGE', response.data.message);
          commit('SET_SUCCESS', response.data.success);
          if (id == 0 || id === undefined) {
            commit('addJobtypeList', response.data.obj);
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
    async getJobtypes({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getJobs', '', { headers }).then(response => {
          commit('SET_JobtypeList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteJobtype({ commit }, jobtype) {
      return new Promise((resolve, reject) => {
        let id = jobtype.id;
        return axios.delete(API_URL + 'gws/deleteJob/' + id, 
        '', { headers }).then(response => {
          commit('SET_MESSAGE', response.data.message);
          commit('SET_SUCCESS', response.data.success);
          commit('deleteJobtypeList', jobtype);
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