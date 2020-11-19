//! Instanciar Vue
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue.js',
        posiciones: ['Posicion0', 'Posicion1', 'Posicion2', 'Posicion3'],
        objetos: [
            { nombre: 'Objeto 0', estado: false },
            { nombre: 'Objeto 1', estado: true },
            { nombre: 'Objeto 2', estado: false },
            { nombre: 'Objeto 3', estado: true }
        ]
    }
})