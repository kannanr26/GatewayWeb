//import state from "./state";

const getters = {
  currentUser(state) {
    if (state.isAuthenticated == true) {
      return state.operator;
    } else {
      return null;
    }

  },
  currentUserName(state) {
    return state.currentUserName;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  getMessage(state) {
    return state.message;
  },
  isSuccess(state) {
    return state.success;
  },
  getCountrySelected(state) {
    return state.selectedCountry;
  },
  getStateSelected(state) {
    return state.selectedState;
  },
  getDistrictSelected(state) {
    return state.selectedDistrict;
  },
  getPincodeSelected(state) {
    return state.selectedPincode;
  },
  getCitySelected(state) {
    return state.selectedCity;
  },
  showSuperAdminBoard() {
    if (this.currentUser && this.currentUser.roles) {
      return this.currentUser.roles.includes('ROLE_SUPERADMIN');
    }

    return false;
  },
  showAdminBoard() {
    if (this.currentUser && this.currentUser.roles) {
      return this.currentUser.roles.includes('ROLE_ADMIN');
    }

    return false;
  },
  showModeratorBoard() {
    if (this.currentUser && this.currentUser.roles) {
      return this.currentUser.roles.includes('ROLE_MODERATOR');
    }

    return false;
  },
}
export default getters;