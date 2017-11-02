<template>
  <v-app>
    <!-- large toolbar -->
    <v-toolbar dark color="primary" class="hidden-xs-only">
      <router-link to="/">
        <v-toolbar-title :to="'/'" class="white--text">Demo: TV Shows</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-text-field 
        prepend-icon="search"
        v-model="searchText"
        placeholder="Search"
        solo hide-details single-line>
      </v-text-field>
    </v-toolbar>

    <!-- small toolbar -->
    <v-toolbar dark color="primary" class="hidden-sm-and-up" extended>
      <v-layout row wrap class="mt-5">
        <v-flex xs12 class="text-xs-center">
          <router-link to="/">
            <v-toolbar-title :to="'/'" class="white--text">Demo: TV Shows</v-toolbar-title>
          </router-link>
        </v-flex>
        <!-- hide search field in xs -->
        <v-flex xs12 class="pt-2">
        <v-text-field 
          prepend-icon="search"
          v-model="searchText"
          placeholder="Search"
          solo hide-details single-line>
        </v-text-field>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <app-alert></app-alert>
    <main></main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        searchText: '',
        $_searchTextTimeout: null,
      };
    },
    watch: {
      searchText(val) {
        this.$store.commit('setLoading', val !== '');
        this.$store.commit('setSearchValue', val);
        this.$store.commit('setLoadedShows', []);
        this.$store.dispatch('clearError');

        // if already searching, remove old timeout
        if (this.$_searchTextTimeout !== null && this.$_searchTextTimeout !== undefined) {
          clearTimeout(this.$_searchTextTimeout);
        }

        // start new timeout
        this.$_searchTextTimeout = setTimeout(() => {
          this.$store.dispatch('loadShows');
          this.$router.push('/');
        }, 1000);
      },
    },
  };

</script>

<style>
.hidden {
  display: none;
}
</style>