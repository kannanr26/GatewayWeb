import Vue from 'vue'
import { API_URL } from "@/common/config";
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',

};

export default {
  state: {
    courses: []
  },
  getters: {
    getCourse(state) {
      return state.courses;
    },
  },
  mutations: {
    addCourseList(state, newCourse) {
      state.courses.push(newCourse)
    },
    deleteCourseList(state, deleteCourse) {
      state.courses = state.courses.filter
      (course => ( (course.courseName !== deleteCourse.courseName) &&
      (course.id !== deleteCourse.id)) );
    },
    SET_CourseList: (state, data) => {
      state.courses = data;
    },
  },
  actions: {
    addCourse({ commit }, course) {
      let id= course.id;
      return new Promise((resolve, reject) => {
        return axios.post(API_URL + 'gws/addCourse', course,
         { headers }).then(response => {
          commit('SET_MESSAGE', response.data.message, true);
          if(id==0 || id===undefined){
             commit('addCourseList', response.data.obj);
          }
          resolve(response);
        })
          .catch(error => {
            commit('SET_MESSAGE', error.response.data.message, error.response.data.success);
            reject(error);
          });
      });
    },
    async  getCourses({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(API_URL + 'gws/getCourses', '', { headers }).then(response => {
          commit('SET_CourseList', response.data);
          resolve(response);
        })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteCourse({ commit }, course) {

      return new Promise((resolve, reject) => {
        let id = course.id;
        return axios.delete(API_URL + 'gws/deleteCourse/' + id, 
        '', { headers }).then(response => {
        commit('SET_MESSAGE', response.data.message, response.data.success);    
        commit('deleteCourseList', course);
       
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