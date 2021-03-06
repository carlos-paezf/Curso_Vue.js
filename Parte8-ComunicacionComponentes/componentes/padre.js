Vue.component('padre', {
    template: /*html*/ `
    <div class="p-5 bg-dark text-white">
        <h2>Componente Padre: {{ numeroPadre }}</h2>
        <h4 class="mx-3">Contador: 
            <button class="btn btn-info btn-sm" @click="numeroPadre++">
                <span class="material-icons my-1">add</span>
            </button>
            <button class="btn btn-warning btn-sm" @click="numeroPadre--">
                <span class="material-icons my-1">clear</span>
            </button>
        </h4>
        <hijo :numero="numeroPadre" @datoHijo="datoPadre = $event"></hijo>
        <h4 class="mx-3 my-1">Dato pasado por "Hijo": {{ datoPadre }}</h4>
    </div>
    `,
    data() {
        return {
            numeroPadre: 10,
            datoPadre: ''
        }
    }
})