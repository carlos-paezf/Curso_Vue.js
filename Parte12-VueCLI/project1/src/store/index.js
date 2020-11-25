import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        frutas: [
            { id: 0, nombre: 'Manzana', cantidad: 0 },
            { id: 1, nombre: 'Durazno', cantidad: 0 },
            { id: 2, nombre: 'Naranja', cantidad: 0 }
        ]
    },
    mutations: {
        aumentar(state, index) {
            state.frutas[index].cantidad++
        },
        reiniciarXMap(state) {
            state.frutas.map(fruta => (fruta.cantidad = 0))
        },
        reiniciarXForEach(state) {
            state.frutas.forEach(item => {
                item.cantidad = 0
            })
        }
    },
    actions: {},
    modules: {}
})