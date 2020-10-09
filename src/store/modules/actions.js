import axios from 'axios';

//import { JwtService } from "@/common/jwt.service";
/* eslint-disable */

import { API_URL, ADDKULAM, GETKULAM, ADDEDUCATION } from "@/common/config";
const headers = {
  'Content-Type': 'application/json',

};
const actions = {
  async login({ commit }, operator) {
    return new Promise((resolve, reject) => {
      return axios.post(API_URL + 'gw/authenticate', operator).then(response => {

        commit('SET_AUTH', response.data);
        resolve(response);
      })
        .catch(error => {
          reject(error);
        });
    });
  },


  async saveCountry({ commit }, saveCountry) {
    commit('set_saveCountry', saveCountry);
  },

  async saveStates({ commit }, saveState) {
    commit('set_saveState', saveState);
  },

  async saveDistrict({ commit }, saveDistrict) {
    commit('set_saveDistrit', saveDistrict);
  },
  async savePincode({ commit }, savePincode) {
    commit('set_savePincode', savePincode);
  },
  async saveCity({ commit }, saveCity) {
    commit('set_saveCity', saveCity);
  },


  LOGOUT(context) {
    context.commit('PURGE_AUTH');
  },
}
export default actions;