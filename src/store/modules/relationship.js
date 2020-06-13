import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    relationships: [],
    dataFields: ['relationships']
  },
  getters: {
    getRelationship(state) {
      console.log('get Relationship');
      return state.relationships;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addRelationship(state, newRelationship) {
      state.relationships.push(newRelationship)
    },
    deleteRelationship(state, { relationshipIndex }) {
      state.relationships.splice(relationshipIndex, 1)
    },
    SET_RELATIONSHIPS: (state, data) => {
      console.log("relationships in MUT" + data)
      state.relationships = data;
    },
  },
  actions: {
    addRelationship({ commit }, relationship) {

      console.log("in add relationship");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addRelationship', relationship, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addrelationship', relationship).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addRelationship', relationship)
         // dispatch('saveRelationships')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getRelationship({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getRelationships', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addrelationship', relationship).then(response => {
          console.log('get action Relationship');

          console.log(response.data)
          commit('SET_RELATIONSHIPS', response.data);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
            // commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    deleteRelationship({ commit }, relationship) {

      return new Promise((resolve, reject) => {
        let id = relationship.id;
        return axios.delete(API_URL + 'gws/deleteRelationship/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addrelationship', relationship).then(response => {
          console.log('get action Relationship');

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
      //commit('deleteRelationship', relationship)
    //  dispatch('saveToRelationships')
    },
    async saveToRelationships({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}