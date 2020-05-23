import axios from 'axios';
import { API_URL } from "@/common/config";

import {
  ADDKULAM,
} from "@/common/config.js";
/* eslint-disable */
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
  async  [ADDKULAM]({ commit }, kulam) {
    return ApiService.post('addKulam', kulam).then(response => {
      commit('SET_MESSAGE', response.data, true);
    }).catch(err => {
      commit('SET_MESSAGE', err, false);
    });
  },
  'LOGOUT'(context) {
    context.commit('PURGE_AUTH');
  },
}
export default actions;