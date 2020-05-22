import state from "./state";

const getters = {
    currentUser(state) {
      return state.operator;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    getMessage:state=>state.message,
    isSucess:state=>state.sucess,
  }
  export default getters;