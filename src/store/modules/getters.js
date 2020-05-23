const getters = {
  currentUser(state) {
    return state.operator;
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
  }
}
export default getters;