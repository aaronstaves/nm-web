<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 xl6 v-for="item in shows" :key="item.id">
        <list-item :show="item"></list-item>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ShowListItem from './ListItem';

export default {
  components: {
    'list-item': ShowListItem,
  },
  computed: {
    shows() {
      console.dir(this.$store.getters.loadedShows);
      return this.$store.getters.loadedShows;
    },
  },
};
</script>