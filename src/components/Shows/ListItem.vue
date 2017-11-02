<template>
  <v-card class="show-card" dark :to="`show/${show.id}`">

    <!-- xs card -->
    <v-card-media :src="image" height="100" contain class="hidden-sm-and-up">
      <div class="no-image" v-if="image === ''">
        <v-icon dark large>tv</v-icon>
        <p>
          No Image Found
        </p>
      </div>
    </v-card-media>

    <!-- small card -->
    <v-card-media :src="image" height="100" class="hidden-xs-only hidden-md-and-up">
      <div class="no-image" v-if="image === ''">
        <v-icon dark large>tv</v-icon>
        <p>
          No Image Found
        </p>
      </div>
    </v-card-media>

    <!-- big card -->
    <v-card-media :src="image" height="175" class="hidden-sm-and-down">
      <div class="no-image" v-if="image === ''">
        <v-icon dark large>tv</v-icon>
        <p>
          No Image Found
        </p>
      </div>
    </v-card-media>

    <v-card-title class="show-card-title text-xs-center primary">
      <v-flex>
        {{ show.seriesName }}
      </v-flex>
    </v-card-title>
  </v-card>
</template>

<<script>
export default {
  props: ['show'],
  computed: {
    image() {
      if (this.show.image === null || this.show.image === undefined) {
        return '';
      }
      return this.show.image;
    },
  },
};
</script>


<style scoped>
.show-card {
  cursor: pointer;
}
.no-image {
  margin: auto;
  text-align: center;
  font-size: 1.5em;

}
.show-card-title {
  height: 75px;
}
</style>
