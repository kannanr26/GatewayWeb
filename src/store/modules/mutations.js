import JwtService from "@/common/jwt.service";
//import { Operator } from "@/models/operator";
const mutations = {
  SET_ERROR: (state, error) => {
    state.message = error;
    state.isAuthenticated = false;
  },
  SET_AUTH: (state, data) => {
    state.isAuthenticated = true;
    state.currentUserName = data.userName;
    state.operator = data;
    state.errors = {};

    JwtService.saveToken(state.operator.accessToken);
  },
  SET_MESSAGE: (state, msg) => {
    state.message = msg;
  },
  SET_SUCCESS: (state, success) => {
    state.success = success;
  },
  set_saveCountry: (state, selectedCountry) => {
    state.selectedCountry = selectedCountry;
  },
  set_saveState: (state, selectedState) => {
    state.selectedState = selectedState;
  },
  set_saveDistrit: (state, selectedDistrict) => {
    state.selectedDistrict = selectedDistrict;
  }, set_savePincode: (state, selectedPincode) => {
    state.selectedPincode = selectedPincode;
  }, set_saveCity: (state, selectedCity) => {
    state.selectedCity = selectedCity;
  },

  PURGE_AUTH: (state) => {
    state.isAuthenticated = false;
    state.operator = null;
    state.errors = {};
    JwtService.destroyToken();
  },

}
export default mutations;