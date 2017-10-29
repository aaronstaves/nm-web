<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text--blue text-xs-center" v-bind:class="{ hidden: isLoading}">
        <v-icon large style="font-size: 2.5em" class="hidden-sm-and-up" color="ghosted">search</v-icon>
        <v-icon large style="font-size: 5em" class="hidden-xs-only" color="ghosted">search</v-icon>
      </v-flex>
      <v-flex xs12 class="text--blue text-xs-center" v-bind:class="{ hidden: !isLoading}">
        <v-progress-circular indeterminate color="amber" size="50"></v-progress-circular>
      </v-flex>

      </v-flex>
      <v-flex xs12 class="ghosted--text text-xs-center">
        <h3>{{ searchDescription }}</h3>
      </v-flex>

    </v-layout>
  </v-container>  
</template>

<<script>
export default {
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    errorMessage() {
      return this.$store.getters.errorMessage;
    },
    searchDescription() {
      if (this.$store.getters.isLoading) {
        return `Searching for ${this.searchValue}`;
      } else if (this.errorMessage !== null && this.errorMessage !== undefined) {
        return 'Search Failed';
      }
      return 'No Shows Found';
    },
    searchValue() {
      return this.$store.getters.searchValue;
    },
  },
};
</script>


<style scoped>
.hidden {
  display: none;
}
</style>