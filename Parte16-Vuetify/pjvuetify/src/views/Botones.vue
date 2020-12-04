<template>
  <v-container>
    <v-layout>
      <v-flex>
        <!-- Personalizar el color del boton -->
        <v-btn dark color="orange acent-4">Boton en color personalizado</v-btn>
        <!-- Boton de solo texto -->
        <v-btn class="mx-2" color="secondary" text>Boton sin fondo</v-btn>
        <!-- Solo la linea externa del boton -->
        <v-btn class="ma-2" outlined color="indigo">Boton outlined</v-btn>
        <!-- Boton redondo de solo icono -->
        <v-btn class="mx-2" fab dark color="purple">
          <v-icon dark>mdi-pencil</v-icon>
        </v-btn>
        <!-- Boton de solo icono -->
        <v-btn class="ma-2" icon color="deep-orange" >
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
        <!-- Boton con carga -->
        <v-btn class="ma-2" :loading="loading4" :disabled="loading4" color="info" @click="loader = 'loading4'">
          Icon Loader
          <template v-slot:loader>
            <span class="custom-loader">
              <v-icon light>cached</v-icon>
            </span>
          </template>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Botones',
  data () {
    return {
      loader: null,
      loading4: false,
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false), 3000)
      this.loader = null
    },
  },
}
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>