<template>
  <v-app>
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'App',

  data: () => {
    return {
      }
  }
};
</script>
