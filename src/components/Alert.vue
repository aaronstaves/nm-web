<template>
  <div>
    <v-alert
      class="alert-bar"
      @click="closeAlert"
      color="error"
      icon="error_outline"
      :value="message !== null && message !== undefined"
      dismissible
      transition="scale-transition"
    >
    {{ message }}
    </v-alert>
  </div>
</template>

<<script>
export default {
  methods: {
    closeAlert() {
      this.$store.dispatch('clearError');
    },
  },
  computed: {
    message() {
      return this.$store.getters.errorMessage;
    },
  },
};
</script>

<<style scoped>
.alert-bar {
  cursor: pointer;
}
</style>

