<template>
  <v-container grid-list-md>
    <v-layout v-bind:class="{ hidden: !isLoading }">
      <search-view></search-view>
    </v-layout>

    <v-layout style="margin-top: 0" row wrap v-if="show !== null && show !== undefined" v-bind:class="{ hidden: isLoading }">
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex d-flex xs12>
            <v-card>
              <v-flex xs12 class="text-xs-center">
                <v-card-title primary-title xs12 class="primary white--text" dark>
                  <v-flex xs12>
                    <h3>{{ show.seriesName }}</h3>
                  </v-flex>
                </v-card-title>
                <v-card-media :src="show.image" contain height="140" >
                  <div class="no-image" v-if="show.image === ''">
                    <v-icon large>tv</v-icon>
                    <p>
                      No Image Found
                    </p>
                  </div>
                </v-card-media>
                <v-card-text>
                  <v-flex xs12>
                    {{ show.overview }}
                  </v-flex>
                </v-card-text>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex d-flex xs12 md3>
            <v-card dark class="text-xs-center title" color="Primary">
              <v-card-text>Air Information</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 md3>
            <v-card>
              <v-card-text>
                <p>
                  <strong class="primary--text">Network:</strong> {{ show.network }}
                </p>
                <p>
                  <strong class="primary--text">Time:</strong> {{ show.airsTime }}
                </p>
                <p>
                  <strong class="primary--text">Day:</strong> {{ show.airsDayOfWeek }}
                </p>
                <p>
                  <strong class="primary--text">Status:</strong> {{ show.status}}
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 md3>
            <v-card dark class="text-xs-center title" color="Primary">
              <v-card-text>Show</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 md3>
            <v-card>
              <v-card-text>
                <p>
                  <strong class="primary--text">Aliases:</strong> {{ aliases }}
                </p>
                <p>
                  <strong class="primary--text">Genre:</strong> {{ genres }}
                </p>
                <p>
                  <strong class="primary--text">Rating:</strong> {{ show.siteRating }}
                </p>
                <p>
                  <strong class="primary--text">Number of Reviews:</strong> {{ show.siteRatingCount }}
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Search from '../Shared/Search';

export default {
  props: ['id'],
  components: { 'search-view': Search },
  created() {
    if (this.show && this.show.id === this.id) {
      return;
    }
    this.$store.dispatch('loadShow', this.id);
  },
  computed: {
    aliases() {
      if (this.show && this.show.aliases) {
        return this.show.aliases.join(', ');
      }
      return 'None';
    },
    genres() {
      if (this.show && this.show.genre) {
        return this.show.genre.join(', ');
      }
      return 'None';
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    show() {
      return this.$store.getters.loadedShow;
    },
  },
};
</script>

<style scoped>
.no-image {
  margin: auto;
  text-align: center;
  font-size: 1.5em;

}
</style>
