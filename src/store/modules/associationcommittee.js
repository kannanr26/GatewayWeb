import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    associationcommittees: [],
    dataFields: ['associationcommittees']
  },
  getters: {
    getAssociationcommittee(state) {
      console.log('get Associationcommittee');
      return state.associationcommittees;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addAssociationcommittee(state, newAssociationcommittee) {
      state.associationcommittees.push(newAssociationcommittee)
    },
    deleteAssociationcommittee(state, { associationcommitteeIndex }) {
      state.associationcommittees.splice(associationcommitteeIndex, 1)
    },
    SET_ASSOCIATIONCOMMITTEES: (state, data) => {
      console.log("associationcommittees in MUT" + data)
      state.associationcommittees = data;
    },
  },
  actions: {
    addAssociationcommittee({ commit }, associationcommittee) {

      console.log("in add associationcommittee");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addAssociationCommittee', associationcommittee, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addassociationcommittee', associationcommittee).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addAssociationcommittee', associationcommittee)
         // dispatch('saveAssociationcommittees')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getAssociationcommittee({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getAssociationCommittees', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addassociationcommittee', associationcommittee).then(response => {
          console.log('get action Associationcommittee');

          console.log(response.data)
          commit('SET_ASSOCIATIONCOMMITTEES', response.data);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
            // commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    deleteAssociationcommittee({ commit }, associationcommittee) {

      return new Promise((resolve, reject) => {
        let id = associationcommittee.id;
        return axios.delete(API_URL + 'gws/deleteAssociationCommittee/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addassociationcommittee', associationcommittee).then(response => {
          console.log('get action Associationcommittee');

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
      //commit('deleteAssociationcommittee', associationcommittee)
    //  dispatch('saveToAssociationcommittees')
    },
    async saveToAssociationcommittees({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}