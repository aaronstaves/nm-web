import axios from 'axios';

const apiUrl = ' https://api.tvmaze.com/search/shows?q=';

/* eslint-disable no-param-reassign */

const shows = {
  state: {
    loadedShows: [],
  },
  mutations: {
    setLoadedShows(state, payload) {
      state.loadedShows = payload;
    },
  },
  actions: {
    loadShows({ commit, getters }) {
      if (getters.searchValue === '') {
        return;
      }
      commit('setLoading', true);
      const url = `${apiUrl}${getters.searchValue}`;
      axios.get(url)
        .then((response) => {
          const foundShows = [];
          response.data.forEach((result) => {
            foundShows.push(result.show);
          });

          commit('setLoadedShows', foundShows);
          commit('setLoading', false);
        })
        .catch((error) => {
          commit('setError', error.message);
          commit('setLoading', false);
        });
    },
  },
  getters: {
    loadedShows(state) {
      return state.loadedShows;
    },
  },
};

export default shows;
