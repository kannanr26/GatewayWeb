import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export default {
  state: {
    associationCommittees: []
  },
  getters: {
    getAssociationCommittee(state) {
      return state.associationCommittees;
    },
  },
  mutations: {
    addAssociationCommitteeList(state, newAssociationCommittee) {
      state.associationCommittees.push(newAssociationCommittee)
    },
    deleteAssociationCommitteeList(state, deleteAssociationCommittee) {
      state.associationCommittees = state.associationCommittees.filter
        (associationCommittee => ((associationCommittee.associationCommitteeName !== deleteAssociationCommittee.associationCommitteeName) &&
          (associationCommittee.id !== deleteAssociationCommittee.id)));
    },
    SET_AssociationCommitteeList: (state, data) => {
      state.associationCommittees = data;
    },
  },
  actions: {
    addAssociationCommittee({ commit }, associationCommittee) {
      let id = associationCommittee.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addAssociationCommittee', associationCommittee,
          { headers }).then(response => {
            commit('SET_MESSAGE', response.data.message);
            commit('SET_SUCCESS', response.data.success);
            if (id == 0 || id === undefined) {
              commit('addAssociationCommitteeList', response.data.obj);
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
    async getAssociationCommittees({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getAssociationCommittees', '', { headers }).then(response => {
          commit('SET_AssociationCommitteeList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteAssociationCommittee({ commit }, associationCommittee) {
      return new Promise((resolve, reject) => {
        let id = associationCommittee.id;
        return axios.delete(API_URL + 'gws/deleteAssociationCommittee/' + id,
          '', { headers }).then(response => {
            commit('SET_MESSAGE', response.data.message);
            commit('SET_SUCCESS', response.data.success);
            commit('deleteAssociationCommitteeList', associationCommittee);
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