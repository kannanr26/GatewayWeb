import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    permissions: []
  },
  getters: {
    getPermission(state) {
      return state.permissions;
    },
  },
  mutations: {
    addPermissionList(state, newPermission) {
      state.permissions.push(newPermission)
    },
    deletePermissionList(state, deletePermission) {
      state.permissions = state.permissions.filter
      (permission => ( (permission.permissionName !== deletePermission.permissionName) &&
      (permission.id !== deletePermission.id)) );
    },
    SET_PermissionList: (state, data) => {
      state.permissions = data;
    },
  },
  actions: {
    addPermission({ commit }, permission) {
      let id= permission.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addPermission', permission,
         { headers }).then(response => {
          commit('SET_MESSAGE', response.data.message, true);
          if(id==0 || id===undefined){
             commit('addPermissionList', response.data.obj);
          }
          resolve(response);
        })
          .catch(error => {
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getPermissions({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getPermissions', '', { headers }).then(response => {
          commit('SET_PermissionList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deletePermission({ commit }, permission) {

      return new Promise((resolve, reject) => {
        let id = permission.id;
        return axios.delete(API_URL + 'gws/deletePermission/' + id, 
        '', { headers }).then(response => {
        commit('SET_MESSAGE', response.data.message, response.data.success);    
        commit('deletePermissionList', permission);
       
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