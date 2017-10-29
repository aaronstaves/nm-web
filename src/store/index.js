import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */

const store = new Vuex.Store({
  state: {
    searchValue: '',
    isLoading: false,
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setSearchValue(state, payload) {
      state.searchValue = payload;
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    searchValue(state) {
      return state.searchValue;
    },
  },
});

export default store;
