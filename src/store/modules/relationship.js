import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    relationships: []
  },
  getters: {
    getRelationship(state) {
      return state.relationships;
    },
  },
  mutations: {
    addRelationshipList(state, newRelationship) {
      state.relationships.push(newRelationship)
    },
    deleteRelationshipList(state, deleteRelationship) {
      state.relationships = state.relationships.filter
      (relationship => ( (relationship.relationshipName !== deleteRelationship.relationshipName) &&
      (relationship.id !== deleteRelationship.id)) );
    },
    SET_RelationshipList: (state, data) => {
      state.relationships = data;
    },
  },
  actions: {
    addRelationship({ commit }, relationship) {
      let id= relationship.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addRelationShipName', relationship,
         { headers }).then(response => {
          commit('SET_MESSAGE', response.data.message, true);
          if(id==0 || id===undefined){
             commit('addRelationshipList', response.data.obj);
          }
          resolve(response);
        })
          .catch(error => {
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getRelationships({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getRelationShipNames', '', { headers }).then(response => {
          commit('SET_RelationshipList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteRelationship({ commit }, relationship) {

      return new Promise((resolve, reject) => {
        let id = relationship.id;
        return axios.delete(API_URL + 'gws/deleteRelationShipName/' + id, 
        '', { headers }).then(response => {
        commit('SET_MESSAGE', response.data.message, response.data.success);    
        commit('deleteRelationshipList', relationship);
       
        resolve(response);
        })
          .catch(error => {
             console.log(error.response.data.message);
             commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    
    //  dispatch('saveToKulams')
    }
  }
}