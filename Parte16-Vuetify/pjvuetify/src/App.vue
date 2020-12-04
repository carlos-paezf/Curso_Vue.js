<template>
  <v-app>
    <v-main>
      <toolbar></toolbar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Toolbar from './components/Toolbar.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Toolbar,
  },

  data: () => ({
    //
  }),
};
</script>
