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
    state.operator = data;
    state.errors = {};
    console.log('Operator' + state.operator)
    JwtService.saveToken(state.operator.accessToken);
  },
 /* SET_KULAMS: (state, data) => {
    console.log("kulams in MUT" + data)
    state.kulams = data;
  },*/
  SET_EDUCATIONS: (state, data) => {
    console.log("education in MUT" + data)
    state.kulams = data;
  },
  SET_MESSAGE: (state, msg, success) => {
    state.success = success;
    console.log(msg)
    state.message = msg;
  },
  PURGE_AUTH: (state) => {
    state.isAuthenticated = false;
    state.operator = null;
    state.errors = {};
    JwtService.destroyToken();
  }

}
export default mutations;