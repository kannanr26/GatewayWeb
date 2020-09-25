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
  set_saveState: (state, selectedState) => {
    state.selectedState = selectedState;
    console.log("set_saveState :: "+state.selectedState.id  )
},
  PURGE_AUTH: (state) => {
    state.isAuthenticated = false;
    state.operator = null;
    state.errors = {};
    JwtService.destroyToken();
  },

  }
export default mutations;