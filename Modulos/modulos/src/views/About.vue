<template>
  <div class="about">
    <h1>Prueba de Modulos</h1>
    <h2 v-for="(item, index) in tareasState" :key="index">{{ item }}</h2>
    <h1>Titulo {{ titulo }}</h1>
    <h3>Contador: {{ contadorState }}</h3>
    <button @click="aumentarContador(5)">Aumentar Contador</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState('tareas', ['tareasState']),
    ...mapState(['titulo']),
    ...mapState('contador', ['contadorState']),
  },
  methods: {
    ...mapMutations('contador', ['aumentarContador'])
  }
}
</script>