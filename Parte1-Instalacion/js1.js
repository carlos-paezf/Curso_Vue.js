//! Instanciar Vue
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue.js',
        posiciones: ['Posicion0', 'Posicion1', 'Posicion2', 'Posicion3'],
        objetos: [
            { nombre: 'Objeto 0', estado: false, entero: 0 },
            { nombre: 'Objeto 1', estado: true, entero: 1 },
            { nombre: 'Objeto 2', estado: false, entero: 2 },
            { nombre: 'Objeto 3', estado: true, entero: 3 }
        ],
        nuevoDato: "",
        total: 0,
    },
    methods: {
        metodo1() { console.log('Ejecutas la primera forma de llamar el método') },
        metodo2() { console.log('Segunda manera de llamar el método') },
        agregarDato() {
            this.objetos.push({ nombre: this.nuevoDato, estado: false, entero: 4 });
            this.nuevoDato = "";
        }
    },
    computed: {
        sumarEnteros() {
            this.total = 0;
            for (objeto of this.objetos) {
                this.total += objeto.entero;
            }
            return this.total;
        }
    }
})