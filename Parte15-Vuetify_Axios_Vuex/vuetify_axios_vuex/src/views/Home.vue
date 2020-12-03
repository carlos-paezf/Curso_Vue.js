<template>
  <div class="home">

    <!-- En esta fila aplico una prueba de fila y columna -->
    <v-layout :wrap="false"> <!-- Se asemeja a la etiqueta <row> -->
      <v-flex xs12> <!-- Se asemeja a la etiqueta <col> -->
        <h1>El tamaño xs se hereda para los demas</h1>
      </v-flex>
    </v-layout>

    <v-layout :wrap="true">
      <!-- En esta columna ubico la tarjeta de prueba con Vuetify -->
      <v-flex xs6>
        <!-- Caracteristicas Generales de la tarjeta -->
        <v-card elevation = "24" :loading="loading" class="mx-auto my-5" max-width="500">
          <template slot="progress">
            <v-progress-linear color="red" height="10" indeterminate></v-progress-linear>
          </template>
          <!-- Imagen en cabecera -->
          <v-img height="225" src="https://i.morioh.com/2019/11/01/47e709b4198f.jpg">
            <!-- Seccion para una app bar dentro de la imagen-->
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
              <v-toolbar-title class="title white--text pl-0">
                App Bar
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
              color="white"
              icon
            >
              <v-icon>add</v-icon>
            </v-btn>
            </v-app-bar>
            <!-- Seccion para un avatar -->
            <v-card-title class="white--text mt-15">
              <v-avatar size="56">
                <img alt="user" src="https://avatars1.githubusercontent.com/u/55883267?s=460&u=050d13a89d2eb274fa862918ce1d2d036d4e037c&v=4">
              </v-avatar>
              <p class="ml-3">
                carlos-paezf
              </p>
            </v-card-title>
          </v-img>
          <!-- Titulo de la tarjeta -->
          <v-card-title>Tarjeta con Vuetify</v-card-title>
          <!-- Definicion del texto -->
          <v-card-text>
            <!-- Definir un componente de Rating  -->
            <v-row align="center" class="mx-2">
              <v-rating :value="4" color="deep-purple accent-1" dense half-increments readonly size="14"></v-rating>
              <div class="grey--text ml-4"> 4 (Valor estatico)</div>
            </v-row>
            <!-- Definir un subtitulo -->
            <div class="my-4 subtitle-1">
              Curso de Vue.js • Vuetify, axios y vuex
            </div>
            <div>Pequeña practica para uso de Vuetify obtenuendo datos de una API</div>
          </v-card-text>
          <!-- Agregar un espacio divisorio -->
          <v-divider class="mx-4"></v-divider>
          <!-- Titulo de la nueva seccion -->
          <v-card-title>Chips o "Etiquetas" de prueba</v-card-title>
          <!-- Seccion para texto -->
          <v-card-text>
            <!-- Grupo de Chips o Etiquetas -->
            <v-chip-group v-model="selection" active-class="red white--text" column>
              <v-btn v-if="!chip1 && !chip2 && !chip3 && !chip4" close color="primary" dark @click="chip1 = true, chip2 = true, chip3 = true, chip4= true">
                Reset Chips
              </v-btn>
              <v-chip v-if="chip1" class="ma-2" close @click:close="chip1 = false">
                Closable
              </v-chip>
              <v-chip v-if="chip2" class="ma-2" close color="red" text-color="white" @click:close="chip2 = false">
                Remove
              </v-chip>
              <v-chip v-if="chip3" class="ma-2" close color="green" outlined @click:close="chip3 = false">
                Success
              </v-chip>
              <v-chip v-if="chip4" class="ma-2" close color="orange" label outlined @click:close="chip4 = false">
                Complete
              </v-chip>
            </v-chip-group>
          </v-card-text>
          <!-- Boton clasico -->
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Hacer que aparezca el loading
            </v-btn>
          </v-card-actions>
          <!-- Agregar un espacio divisorio -->
          <v-divider class="mx-4"></v-divider>
          <!-- Componente de Timeline -->
          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">Timeline con mensajes de prueba</div>
            <v-timeline align-top dense>
              <!-- Los items se obtienen por medio de un bucle que afecta los mensajes -->
              <v-timeline-item v-for="message in messages" :key="message.time" :color="message.color" small>
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-flex>

      <!-- En esta columna ubico la practica para el llamado a la API -->
      <v-flex xs6>
        <!-- En esta tarjeta esta ubicado el calendario -->
        <v-card elevation = "15" class="mx-auto mt-5" max-width="400">
          <v-date-picker color="error" v-model="date" width="400" locale="es-CO" :min="dateMin" :max="dateMax" @change="getDolar(date)"></v-date-picker>
        </v-card>
        <!-- En esta tarjeta estara el valor del dato -->
        <v-card class="mx-auto" color="error" dark max-width="400">
          <v-card-text class="display-1 text-center">Día seleccionado: {{ date }}, Valor del dolar en pesos chilenos ${{ valor }}</v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </div>
</template>

<script>

import axios from 'axios';
import { mapMutations } from 'vuex';

export default {
  name: 'Home',
  data: () => ({
      loading: false,
      selection: 1,
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
      messages: [
        {
          from: 'You esperanzado',
          message: 'Escribir "Hola Mundo"',
          time: 'Paso 1',
          color: 'green',
        },
        {
          from: 'You feliz',
          message: 'Pensar que ya eres programador',
          time: 'Paso 2',
          color: 'blue',
        },
        {
          from: 'You triste',
          message: 'Ver que aun te falta mucho por aprender',
          time: 'Paso 3',
          color: 'red',
        },
        {
          from: 'You con ganas',
          message: 'Tomar fuerzas y seguir aprendiendo',
          time: 'Paso 4',
          color: 'deep-purple',
        }
      ],
      date: new Date().toISOString().substr(0, 10),
      dateMin: '1984',
      dateMax: new Date().toISOString().substr(0, 10),
      valor: null,
    }),

    methods: {
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 5000)
      },
      async getDolar (fecha) {
        let ddmmyyyy = fecha.split(['-']).reverse().join('-');
        try {
          let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyyyy}`)
          if (datos.data.serie.length > 0) {
            this.valor = await datos.data.serie[0].valor
          } else {
            this.valor = 'Sin resultados'
          }
        } catch (error) {
          console.log(error)
        }
      }
    },
}
</script>
