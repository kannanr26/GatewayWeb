import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    permissions: [],
    dataFields: ['permissions']
  },
  getters: {
    getPermission(state) {
      console.log('get Permission');
      return state.permissions;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addPermission(state, newPermission) {
      state.permissions.push(newPermission)
    },
    deletePermission(state, { permissionIndex }) {
      state.permissions.splice(permissionIndex, 1)
    },
    SET_PERMISSIONS: (state, data) => {
      console.log("permissions in MUT" + data)
      state.permissions = data;
    },
  },
  actions: {
    addPermission({ commit }, permission) {

      console.log("in add permission");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addPermission', permission, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addpermission', permission).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addPermission', permission)
         // dispatch('savePermissions')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getPermission({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getPermissions', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addpermission', permission).then(response => {
          console.log('get action Permission');

          console.log(response.data)
          commit('SET_PERMISSIONS', response.data);
          resolve(response);
        })
          .catch(error => {
            // console.log(error.response.data.message);
            // commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    deletePermission({ commit }, permission) {

      return new Promise((resolve, reject) => {
        let id = permission.id;
        return axios.delete(API_URL + 'gws/deletePermission/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addpermission', permission).then(response => {
          console.log('get action Permission');

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
      //commit('deletePermission', permission)
    //  dispatch('saveToPermissions')
    },
    async saveToPermissions({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}