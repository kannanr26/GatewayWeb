//import state from "./state";

const getters = {
  currentUser(state) {
    if(state.isAuthenticated==true){
      return state.operator;
    }  else{
      console.log('state.isAuthenticated is false');
      return null;
    }
     
  },
  currentUserName(state){
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
  getCountrySelected(state){
    console.log('CountrySelected'+state.selectedCountry.id);
    
    return state.selectedCountry;
  },
  getStateSelected(state){
    console.log('StateSelected'+state.selectedState.id);
    
    return state.selectedState;
  },
  getDistrictSelected(state){
    console.log('StateSelected'+state.selectedDistrict.id);
    
    return state.selectedDistrict;
  },
  /*getKulams(state) {
    console.log('get Kulam');
    return state.kulams;
  },*/
  /*
   getEducations(state) {
     console.log('get Education'+state.educations);
     return state.educations;
   },
   */
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