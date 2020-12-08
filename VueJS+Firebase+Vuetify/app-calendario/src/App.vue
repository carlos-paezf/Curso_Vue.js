<template>
  <v-app>
    <v-main>
      <calendario />
    </v-main>
  </v-app>
</template>

<script>
import Calendario from './components/Calendario';

export default {
  name: 'App',

  components: {
    Calendario,
  },

  data: () => ({
    //
  }),
};
</script>
