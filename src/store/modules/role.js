import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    roles: [],
    dataFields: ['roles']
  },
  getters: {
    getRole(state) {
      console.log('get Role');
      return state.roles;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addRole(state, newRole) {
      state.roles.push(newRole)
    },
    deleteRole(state, { roleIndex }) {
      state.roles.splice(roleIndex, 1)
    },
    SET_EDUCATIONS: (state, data) => {
      console.log("roles in MUT" + data)
      state.roles = data;
    },
  },
  actions: {
    addRole({ commit }, role) {

      console.log("in add role");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addRole', role, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addrole', role).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addRole', role)
         // dispatch('saveRoles')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getRole({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getRoles', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addrole', role).then(response => {
          console.log('get action Role');

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
    deleteRole({ commit }, role) {

      return new Promise((resolve, reject) => {
        let id = role.id;
        return axios.delete(API_URL + 'gws/deleteRole/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addrole', role).then(response => {
          console.log('get action Role');

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
      //commit('deleteRole', role)
    //  dispatch('saveToRoles')
    },
    async saveToRoles({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}