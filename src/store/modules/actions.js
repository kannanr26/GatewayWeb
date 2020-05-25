import axios from 'axios';
import { API_URL, ADDKULAM ,ID_TOKEN_KEY} from "@/common/config";
//import { JwtService } from "@/common/jwt.service";
/* eslint-disable */


const headers = {
  'Content-Type': 'application/json;charset=utf-8',
  'Authorization': 'Bearer ' + window.localStorage.getItem(ID_TOKEN_KEY)
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
  async  [ADDKULAM]({ commit }, kulam) {
    return new Promise((resolve, reject) => {
      return axios.post(API_URL + 'gws/addkulam', kulam,
        { headers }).then(response => {
          console.log(response)
          commit('SET_MESSAGE', response, true);
          resolve(response);
        })
        .catch(error => {
          console.log(error);
          commit('SET_MESSAGE', error, false);
          reject(error);
        });
    });
  },
  LOGOUT(context) {
    console.log('logout action')
    context.commit('PURGE_AUTH');
  },
}
export default actions;