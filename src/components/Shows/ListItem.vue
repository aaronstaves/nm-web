<template>
  <v-card dark>
    <v-card-media :src="image" height="450" >
      <div class="no-image" v-if="image === ''">
        <v-icon dark large>tv</v-icon>
        <p>
          No Image Found
        </p>
      </div>
    </v-card-media>

    <v-card-title class="show-card-title text-xs-center primary">
      <v-flex>
        {{ show.name }}
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
      return this.show.image.medium;
    },
  },
};
</script>


<<style scoped>
.no-image {
  margin: auto;
  text-align: center;
  font-size: 1.5em;

}
.show-card-title {
  height: 75px;
}
</style>
