import Vue from 'vue';
import Vuex from 'vuex';

import shows from './modules/shows';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */

const store = new Vuex.Store({
  state: {
    searchValue: '',
    isLoading: false,
    errorMessage: null,
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setError(state, payload) {
      state.errorMessage = payload;
    },
    setSearchValue(state, payload) {
      state.searchValue = payload;
    },
  },
  actions: {
    clearError({ commit }) {
      commit('setError', null);
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    errorMessage(state) {
      return state.errorMessage;
    },
    searchValue(state) {
      return state.searchValue;
    },
  },
  modules: {
    shows,
  },
});

export default store;
