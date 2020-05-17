import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import {
  LOGIN,
  LOGOUT
} from "./common/actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "./common/mutations.type";

const operator = JSON.parse(localStorage.getItem('user'));
const initialState = operator
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };
  
  const state = {
    errors: null,
    //auth: {},
    initialState,
    operator: {},
    isAuthenticated: !!JwtService.getToken()
  };
  
  const getters = {
    currentUser(state) {
      return state.operator;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    }
  };
  
  const actions = {
    [LOGIN](context, credentials) {
      return new Promise(resolve => {
        ApiService.post("gw/authenticate",  credentials )
          .then(({ data }) => {
            context.commit(SET_AUTH, data.user);
            resolve(data);
          })
          .catch(({ response }) => {
            context.commit(SET_ERROR, response.data.errors);
          });
      });
    },
    [LOGOUT](context) {
      context.commit(PURGE_AUTH);
    },
    
  };
  
  const mutations = {
    [SET_ERROR](state, error) {
      state.errors = error;
    },
    [SET_AUTH](state, user) {
      state.isAuthenticated = true;
      state.operator = user;
      state.errors = {};
      JwtService.saveToken(state.user.accessToken);
    },
    [PURGE_AUTH](state) {
      state.isAuthenticated = false;
      state.user = {};
      state.errors = {};
      JwtService.destroyToken();
    }
  };

  export default {
    getters,
    state,
    actions,
    mutations
  }
