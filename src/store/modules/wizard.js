import { API_URL } from "@/common/config";
import axios from 'axios';
const headers = {
  'Content-Type': 'application/json',
};

export default {
  state: {
    family:'',
  },
  getters: {
    getFamilyDetails(state) {
      console.log('get family');
      return state.family;
    },
  },
  mutations: {
    SET_FAMILY(state, family) {
      state.family=family;
    },
    deletePersonList(state, deletePerson) {
      state.family.persons = state.family.persons.filter
        (person => ( (person.id !== deletePerson.id)));
    }/*,
    SET_WIZARD(state, wizardObj) {
      state.wizardObj=wizardObj;
    }*/
  },
  actions: {
    addFamily({ commit }, family) {
      //let id = family.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addFamily',family,
         { headers }).then(response => {
          console.log(response.data.success);
          commit('addFamily',response.data);
          commit('SET_MESSAGE', response.data.message);
          commit('SET_SUCCESS', response.data.success);
          resolve(response);
        })
          .catch(error => {
            commit('SET_MESSAGE', error.response.data.message);
            commit('SET_SUCCESS', error.response.data.success);
            reject(error);
          });
      });
    },addPerson({ commit },groupId, person) {
      //let id = family.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addGroupPerson'+groupId,person,
         { headers }).then(response => {
          console.log(response.data.success);
          commit('SET_MESSAGE', response.data.message);
          commit('SET_SUCCESS', response.data.success);
          resolve(response);
        })
          .catch(error => {
            commit('SET_MESSAGE', error.response.data.message);
            commit('SET_SUCCESS', error.response.data.success);
            reject(error);
          });
      });
    },
    
    async getinitializeWizard({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getWizard', '', { headers }).then(response => {
          console.log( response.data);
          commit('SET_FAMILY', response.data);
          resolve(response.data);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    async getFamilyWithRegistrationNumber({ commit },registrationNumber) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getFamilyWithRegistrationNumber/'+registrationNumber, '', { headers }).then(response => {
          commit('SET_FAMILY', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deletePerson({ commit },groupId, person) {
      return new Promise((resolve, reject) => {
        let personId = person.id;
        return axios.delete(API_URL + 'gws/deletePerson/' + groupId+'/'+personId, 
        '', { headers }).then(response => {
          commit('SET_MESSAGE', response.data.message);
          commit('SET_SUCCESS', response.data.success);
          commit('deletePersonList', personId);
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