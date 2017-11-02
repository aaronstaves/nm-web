import axios from 'axios';

const apiUrl = 'http://nm-api.aarons.io';

/* eslint-disable no-param-reassign */
/* eslint-disable max-len */


const shows = {
  state: {
    isLoadingShow: false,
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
    setLoadingShow(state, payload) {
      state.isLoadingShow = payload;
    },
  },
  actions: {
    loadShows({ commit, getters }) {
      if (getters.searchValue === '') {
        return;
      }

      commit('setLoading', true);
      const url = `${apiUrl}/search/${encodeURIComponent(getters.searchValue)}`;
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
      commit('setLoadingShow', true);

      // otherwise grab the show
      const url = `${apiUrl}/series/${showId}`;
      axios.get(url)
        .then((response) => {
          commit('setLoadedShow', response.data);
          commit('setLoading', false);
          commit('setLoadingShow', false);
        })
        .catch((error) => {
          commit('setLoading', false);
          commit('setLoadingShow', false);
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
    isLoadingShow(state) {
      return state.isLoadingShow;
    },
  },
};

export default shows;
