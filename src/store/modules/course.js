import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    courses: [],
    dataFields: ['courses']
  },
  getters: {
    getCourse(state) {
      console.log('get Course');
      return state.courses;
    },
  },
  mutations: {
    setState(state, { field, data }) {
      Vue.set(state, field, data)
    },
    addCourse(state, newCourse) {
      state.courses.push(newCourse)
    },
    deleteCourse(state, { courseIndex }) {
      state.courses.splice(courseIndex, 1)
    },
    SET_EDUCATIONS: (state, data) => {
      console.log("courses in MUT" + data)
      state.courses = data;
    },
  },
  actions: {
    addCourse({ commit }, course) {

      console.log("in add course");
      return new Promise((resolve, reject) => {
        console.log("in Promise");
        return axios.post(API_URL + 'gws/addCourse', course, { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addcourse', course).then(response => {
          console.log(response.data)
          commit('SET_MESSAGE', response.data.message, true);
          commit('addCourse', course)
         // dispatch('saveCourses')
          resolve(response);
        })
          .catch(error => {
            console.log(error.response.data.message);
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getCourse({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getCourses', '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addcourse', course).then(response => {
          console.log('get action Course');

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
    deleteCourse({ commit }, course) {

      return new Promise((resolve, reject) => {
        let id = course.id;
        return axios.delete(API_URL + 'gws/deleteCourse/' + id, '', { headers }).then(response => {
          //return axios.post(API_URL + 'gws/addcourse', course).then(response => {
          console.log('get action Course');

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
      //commit('deleteCourse', course)
    //  dispatch('saveToCourses')
    },
    async saveToCourses({ state }) {
      state.dataFields;

/*      try {
        await Promise.all(state.dataFields.map(field => idbs.saveToStorage(field, state[field])))
      } catch (e) {
        state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
      }*/
    }
  }
}