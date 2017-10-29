import axios from 'axios';

const apiUrl = ' http://api.xtvmaze.com/search/shows?q=';

/* eslint-disable no-param-reassign */

const shows = {
  state: {
    loadedShows: [],
  },
  mutators: {
    loadedShows(state, payload) {
      state.loadesShows = payload;
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
          console.dir(response);
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
