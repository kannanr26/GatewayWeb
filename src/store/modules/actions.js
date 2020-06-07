import axios from 'axios';

//import { JwtService } from "@/common/jwt.service";
/* eslint-disable */

import { API_URL, ADDKULAM ,GETKULAM,ADDEDUCATION} from "@/common/config";
/*
import { API_URL, ADDKULAM ,ID_TOKEN_KEY} from "@/common/config";
const headers = {
  'Content-Type': 'application/json;charset=utf-8',
  'Authorization': 'Bearer ' + window.localStorage.getItem(ID_TOKEN_KEY)
};*/
const headers = {
  'Content-Type': 'application/json',

};
const actions = {
  async login({ commit }, operator) {
    return new Promise((resolve, reject) => {
      return axios.post(API_URL + 'gw/authenticate', operator).then(response => {
        console.log(response)
        commit('SET_AUTH', response.data);
        resolve(response);
      })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  },
  /*async  [ADDKULAM]({ commit }, kulam) {
    console.log("in add kulam");
    return new Promise((resolve, reject) => {
      console.log("in Promise");
      return axios.post(API_URL + 'gws/addkulam', kulam,{ headers }).then(response => {
      //return axios.post(API_URL + 'gws/addkulam', kulam).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          resolve(response);
        })
        .catch(error => {
          console.log(error.response.data.message);
          commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
          reject(error);
        });
    });
  },
  async  [GETKULAM]({ commit }) {
    return new Promise((resolve, reject) => {
      return axios.get(API_URL + 'gws/getkulams','',{ headers }).then(response => {
      //return axios.post(API_URL + 'gws/addkulam', kulam).then(response => {
          console.log('get action Kulam');

          console.log(response.data)
          commit('SET_KULAMS', response.data);
          resolve(response);
        })
        .catch(error => {
         // console.log(error.response.data.message);
         // commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
          reject(error);
        });
    });
  },
*/
/*
  async  [ADDEDUCATION]({ commit }, education) {
    return new Promise((resolve, reject) => {
      return axios.post(API_URL + 'gws/addeducation', education,{ headers }).then(response => {
        console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          resolve(response);
        })
        .catch(error => {
          console.log(error.response.data.message);
          commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
          reject(error);
        });
    });
  },

  
  async  'getEducation_action'({ commit }) {
    return new Promise((resolve, reject) => {
      return axios.get(API_URL + 'gws/geteducation','',{ headers }).then(response => {
      //return axios.post(API_URL + 'gws/addkulam', kulam).then(response => {
          console.log('get action education');

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
  */
  LOGOUT(context) {
    console.log('logout action')
    context.commit('PURGE_AUTH');
  },
}
export default actions;