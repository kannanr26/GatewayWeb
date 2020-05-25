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
    
    /*operator =new Operator('','','');
    operator.operatorName=data.operatorName;
    operator.roles=data.roles;*/
    state.operator =data;
    state.errors = {};
    console.log('Operator'+state.operator)
    JwtService.saveToken(state.operator.accessToken);
  },
  SET_MESSAGE: (state, msg,success) => {
    state.success = success;
    console.log(msg)
    state.message = msg;
  },
  SET_ERROR: (state, msg, success) => {
    state.success = false;
    console.log(msg)
    state.message = msg;
  },
  PURGE_AUTH: (state) => {
    state.isAuthenticated = false;
    state.operator = {};
    state.errors = {};
    JwtService.destroyToken();
  }
  
}
export default mutations;