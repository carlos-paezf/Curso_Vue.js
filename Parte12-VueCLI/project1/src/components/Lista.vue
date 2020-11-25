<template>
    <div class="mx-5 px-5">
        <ul class="list-group">
            <li v-for="(item, index) of arraySort" :key="item.id"  @click="aumentar(index)" class="list-group-item d-flex justify-content-between align-items-center">
                {{ index }} - {{ item.nombre }}
                <span class="badge badge-primary badge-pill">{{ item.cantidad }}</span>
            </li>
        </ul>
        <button class="btn btn-danger my-3 btn-block" @click="reiniciarXMap">Reiniciar Contadores con Map</button>
        <button class="btn btn-success my-3 btn-block" @click="reiniciarXForEach">Reiniciar Contadores con forEach</button>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
    name: 'Lista',
    computed: {
        ...mapState(['frutas']),
        arraySort(state){
            return state.frutas.sort((a, b) => b.cantidad - a.cantidad)
        }
    },
    methods: {
        ...mapMutations(['aumentar', 'reiniciarXMap', 'reiniciarXForEach'])
    }
}
</script>