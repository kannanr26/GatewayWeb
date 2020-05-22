import ApiService from  '@/services/API.service'
import {
  ADDKULAM,
} from "@/common/config.js";

const actions = {
    async login({ commit }, operator) {
       return ApiService.login(operator).then( response => {
          commit('SET_AUTH', response.data); 
       }).catch(err => {
        commit('SET_ERROR', err); 
      });
    },
    async  [ADDKULAM] ({ commit }, kulam) {
      return ApiService.post('addKulam',kulam).then( response => {
         commit('SET_MESSAGE', response.data); 
      }).catch(err => {
       commit('SET_ERROR', err); 
     });
   },
  }
  export default actions;