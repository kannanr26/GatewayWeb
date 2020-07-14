import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export default {
  state: {
    roles: []
  },
  getters: {
    getRole(state) {
      return state.roles;
    },
  },
  mutations: {
    addRoleList(state, newRole) {
      state.roles.push(newRole)
    },
    deleteRoleList(state, deleteRole) {
      state.roles = state.roles.filter
        (role => ((role.roleName !== deleteRole.roleName) &&
        (role.id !== deleteRole.id)));
    },
    SET_RoleList: (state, data) => {
      state.roles = data;
    },
  },
  actions: {
    addRole({ commit }, role) {
      let id = role.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addRole', role,
         { headers }).then(response => {
          console.log(response.data.success);
          commit('SET_MESSAGE', response.data.message);
          commit('SET_SUCCESS', response.data.success);
          if (id == 0 || id === undefined) {
            commit('addRoleList', response.data.obj);
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
    async getRoles({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getRoles', '', { headers }).then(response => {
          commit('SET_RoleList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteRole({ commit }, role) {
      return new Promise((resolve, reject) => {
        let id = role.id;
        return axios.delete(API_URL + 'gws/deleteRole/' + id, 
        '', { headers }).then(response => {
          commit('SET_MESSAGE', response.data.message);
          commit('SET_SUCCESS', response.data.success);
          commit('deleteRoleList', role);
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