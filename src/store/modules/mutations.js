import JwtService from "@/common/jwt.service";
//import { Operator } from "@/models/operator";
const mutations = {
  SET_ERROR: (state, error) => {
    state.message = error;
    state.isAuthenticated = false;
  },
  SET_AUTH: (state, data) => {
    console.log(data)
    state.isAuthenticated = true;
    state.currentUserName=data.userName;
    state.operator = data;
    state.errors = {};
    console.log('Operator' + state.currentUserName);
    console.log(' isAuthenticated' + state.isAuthenticated);
    
    JwtService.saveToken(state.operator.accessToken);
  },
   SET_MESSAGE: (state, msg) => {
    state.message = msg;
  },
  SET_SUCCESS: (state, success) => {
    state.success = success;
    console.log("SET_SUCESS :: "+success)
  },
  set_saveCountry: (state, selectedCountry) => {
      state.selectedCountry = selectedCountry;
      console.log("set_saveCountry :: "+state.selectedCountry.id  )
  },
  PURGE_AUTH: (state) => {
    state.isAuthenticated = false;
    state.operator = null;
    state.errors = {};
    JwtService.destroyToken();
  },

  addStateList(state, newStates) {
    state.states.push(newStates)
  },
  deleteStateList(state, deleteStates) {
    state.states = state.states.filter
      (states => ((states.StateName !== deleteStates.stateName) &&
      (states.id !== deleteStates.id)));
  },

  SET_STATELIST: (state, data) => {
    state.states = data;
  },
  }
export default mutations;