import OperatorService from '../services/operator.service';


export const operatorMod = {
  namespaced: true,
  actions: {
    getCity({ commit }) {
      return OperatorService.getCity().then(
        cities => {
          commit('Got City', cities);
          return Promise.resolve(cities);
        }
      ).catch(err => {
        commit('Cities Failure');
        return Promise.reject(err);
      });
    },getOperatorType({ commit }) {
      return OperatorService.getOperatorType.then(
        operatorType => {
          commit('Got Operator Type', operatorType);
          return Promise.resolve(operatorType);
        }
      ).catch(err => {
        commit('Operator Type Failure');
        return Promise.reject(err);
      });
    },getRoles({ commit }) {
      return OperatorService.getCity().then(
        cities => {
          commit('Got City', cities);
          return Promise.resolve(cities);
        }
      ).catch(err => {
        commit('Cities Failure');
        return Promise.reject(err);
      });
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    }
  }
};
