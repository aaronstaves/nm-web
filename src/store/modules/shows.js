import axios from 'axios';

const apiUrl = 'http://localhost:3000/search/';

/* eslint-disable no-param-reassign */
/* eslint-disable max-len */


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
            foundShows.push(result);
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
      return state.loadedShows.sort((a, b) => {
        console.log(`${a.seriesName.toLowerCase()} < ${b.seriesName.toLowerCase()}`);
        if (a.seriesName.toUpperCase() < b.seriesName.toUpperCase()) {
          console.log(-1);
          return -1;
        } else if (a.seriesName.toUpperCase() > b.seriesName.toUpperCase()) {
          console.log(1);
          return 1;
        }
        console.log(0);
        return 0;
        // a.seriesName.toLowerCase() < b.seriesName.toLowerCase()
      });
    },
  },
};

export default shows;
