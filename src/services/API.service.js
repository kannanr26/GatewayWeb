import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import API_URL from '@/common/config.js';
const APIService = {
 
    init() {
      Vue.use(VueAxios, axios);
      Vue.axios.defaults.baseURL = API_URL;
    },

  login(operator) {
    return new Promise((resolve, reject) => {
      return axios
      .post(API_URL + 'gw/authenticate',operator)
      .then(response => {  resolve(response.data);
      }).catch(error =>{
       // console.log(error);
        reject(error)
      }
      );
    });
  
  },


  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
}
export default APIService;

