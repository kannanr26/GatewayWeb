import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export default {
  state: {
    bloodgroups: []
  },
  getters: {
    getBloodgroup(state) {
      return state.bloodgroups;
    },
  },
  mutations: {
    addBloodgroupList(state, newBloodgroup) {
      state.bloodgroups.push(newBloodgroup)
    },
    deleteBloodgroupList(state, deleteBloodgroup) {
      state.bloodgroups = state.bloodgroups.filter
        (bloodgroup => ((bloodgroup.bloodGroupName !== deleteBloodgroup.bloodGroupName) &&
        (bloodgroup.id !== deleteBloodgroup.id)));
    },
    SET_BloodgroupList: (state, data) => {
      state.bloodgroups = data;
    },
  },
  actions: {
    addBloodgroup({ commit }, bloodgroup) {
      let id = bloodgroup.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addBloodgroup', bloodgroup,
         { headers }).then(response => {
            console.log(response.data.success);
            commit('SET_MESSAGE', response.data.message);
            commit('SET_SUCCESS', response.data.success);
            if (id == 0 || id === undefined) {
              commit('addBloodgroupList', response.data.obj);
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
    async getBloodgroups({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getBloodgroups', '', { headers }).then(response => {
          commit('SET_BloodgroupList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteBloodgroup({ commit }, bloodgroup) {
      return new Promise((resolve, reject) => {
        let id = bloodgroup.id;
        return axios.delete(API_URL + 'gws/deleteBloodgroup/' + id, 
        '', { headers }).then(response => {
          commit('SET_MESSAGE', response.data.message);
          commit('SET_SUCCESS', response.data.success);
          commit('deleteBloodgroupList', bloodgroup);
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