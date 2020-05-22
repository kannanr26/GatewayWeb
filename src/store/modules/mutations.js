import JwtService from "@/common/jwt.service";
const mutations = {
    SET_ERROR:(state, error) => {
      state.errors = error;
    },
    SET_AUTH: (state, user) =>{
      state.isAuthenticated = true;
      state.operator = user;
      state.errors = {};
      JwtService.saveToken(state.operator.accessToken);
    },
    SET_MESSAGE:(state,msg) =>{
      state.success=true;
      state.message=msg;
    }
  }
  export default mutations;