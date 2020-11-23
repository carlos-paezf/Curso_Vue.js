const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Diagrama de Ciclo de Vida'
    },
    beforeCreated() {
        console.log('beforeCreated');
    },
    created() {
        // Ocurre al crear los métodos, observadores y eventos, pero aun no accede al DOM
        // Aún no se pued acceder al 'el'
        console.log('created');
    },
    beforeMount() {
        // Se ejecuta antes de insertar el DOM
        console.log('beforeMount');
    },
    mounted() {
        // Se ejecuta al insertar el DOM
        console.log('mounted')
    },
    beforeUpdate() {
        // Al detectar un cambio
        console.log('bedoreUpdated');
    },
    updated() {
        // Al realizar los cambios
        console.log('updated');
    },
    beforeDestroy() {
        // Antes de destruir la instancia
        console.log('beforeDestroy');
    },
    destroyed() {
        // Se destruye la instancia
        console.log('destroyed');
    },
    methods: {
        destruir() {
            this.$destroy()
        }
    }
});