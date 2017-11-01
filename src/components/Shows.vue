<template>
  <v-container d-block>

    <!-- search text -->
    <search-view></search-view>

    <!-- shows found -->
    <v-layout row wrap v-if="loadedShows.length > 0 && isLoading === false">
      <v-flex xs12>
        <shows-list></shows-list>
      </v-flex>
    </v-layout>
  </v-container>  
</template>

<script>
import ShowsList from './Shows/List';
import Search from './Shared/Search';

export default {
  components: {
    'shows-list': ShowsList,
    'search-view': Search,
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    loadedShows() {
      return this.$store.getters.loadedShows;
    },
    errorMessage() {
      return this.$store.getters.errorMessage;
    },
    searchValue() {
      return this.$store.getters.searchValue;
    },
  },
};
</script>