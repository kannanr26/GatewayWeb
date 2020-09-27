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
       console.log(response.data.userName);
        commit('SET_AUTH', response.data);
        resolve(response);
      })
        .catch(error => {
          console.log(error);
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

  

  
  LOGOUT(context) {
    console.log('logout action')
    context.commit('PURGE_AUTH');
  },
}
export default actions;