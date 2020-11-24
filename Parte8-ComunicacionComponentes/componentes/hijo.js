Vue.component('hijo', {
    template: /*html*/ ` 
    <div class="py-3 bg-danger">
        <h3 class="mx-3">Componente Hijo</h3>
        <h5 class="mx-5">Número pasado por "Padre": {{ numero }}</h5>
        <h5 class="mx-5">Dato para "Padre": {{ dato }}</h5>
    </div>
    `,
    props: ['numero'],
    data() {
        return {
            dato: "Nombres"
        }
    },
    mounted() {
        this.$emit('datoHijo', this.dato);
    }
})