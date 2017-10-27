<template>
  <v-app>

    <v-navigation-drawer
      light
      temporary
      v-model="drawer"
      light
      overflow
      absolute
    >
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-text-field 
              v-model="searchText"
              placeholder="Search"
              solo hide-details single-line>
            </v-text-field>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.link" @click="drawer = false">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- toolbar -->
    <v-toolbar dark color="primary">
      
      <!-- show hamburger for xs -->
      <v-toolbar-side-icon 
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      >
      </v-toolbar-side-icon>
      <v-toolbar-title class="white--text">NM Demo: TV Shows</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- hide search field in xs -->
      <v-text-field class="hidden-xs-only"
        prepend-icon="search"
        v-model="searchText"
        placeholder="Search"
        solo hide-details single-line>
      </v-text-field>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'home', link: '/' },
        ],
        searchText: '',
      };
    },
  };

</script>
