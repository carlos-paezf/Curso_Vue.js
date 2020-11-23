const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Mensaje para invertir',
        contador: 0
    },
    computed: {
        invertido() {
            return this.mensaje.split('').reverse().join('');
        },
        color() {
            return {
                'bg-dark': this.contador <= 15,
                'bg-info': this.contador > 15 && this.contador <= 30,
                'bg-success': this.contador > 30 && this.contador <= 50,
                'bg-warning': this.contador > 50 && this.contador <= 75,
                'bg-danger': this.contador > 75
            }
        }
    }
});