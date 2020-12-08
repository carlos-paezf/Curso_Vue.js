export default {
    namespaced: true,
    state: {
        contadorState: 1001
    },
    mutations: {
        aumentarContador(state, payload) {
            state.contadorState = state.contadorState + payload
        }
    }
}