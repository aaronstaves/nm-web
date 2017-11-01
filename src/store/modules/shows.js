import axios from 'axios';

const apiUrl = 'http://localhost:3000';

/* eslint-disable no-param-reassign */
/* eslint-disable max-len */


const shows = {
  state: {
    loadedShows: [],
    loadedShow: null,
  },
  mutations: {
    setLoadedShows(state, payload) {
      state.loadedShows = payload;
    },
    setLoadedShow(state, payload) {
      state.loadedShow = payload;
    },
  },
  actions: {
    loadShows({ commit, getters }) {
      if (getters.searchValue === '') {
        return;
      }

      commit('setLoading', true);
      const url = `${apiUrl}/search/${getters.searchValue}`;
      axios.get(url)
        .then((response) => {
          const foundShows = [];
          response.data.forEach((result) => {
            foundShows.push(result);
          });

          commit('setLoadedShows', foundShows);
          commit('setLoadedShow', null);
          commit('setLoading', false);
        })
        .catch((error) => {
          commit('setLoading', false);
          if (error.response.status === 404) {
            commit('setError', 'No shows found');
          } else {
            commit('setError', error.message);
          }
        });
    },
    loadShow({ commit, getters }, showId) {
      commit('setLoading', true);

      // otherwise grab the show
      const url = `${apiUrl}/series/${showId}`;
      axios.get(url)
        .then((response) => {
          commit('setLoadedShow', response.data);
          commit('setLoading', false);
        })
        .catch((error) => {
          commit('setLoading', false);
          if (error.response.status === 404) {
            commit('setError', 'No shows found');
          } else {
            commit('setError', error.message);
          }
        });
    },
  },
  getters: {
    loadedShows(state) {
      return state.loadedShows.sort((a, b) => {
        if (a.seriesName.toUpperCase() < b.seriesName.toUpperCase()) {
          return -1;
        } else if (a.seriesName.toUpperCase() > b.seriesName.toUpperCase()) {
          return 1;
        }
        return 0;
      });
    },
    loadedShow(state) {
      return state.loadedShow;
    },
  },
};

export default shows;
