<template>
    <div>
        <h1>Galeria de Fotos</h1>
        <router-link :to="{ name: 'fotos', params: {id: item} }" v-for="(item, index) of fotos" :key="index">
            <button>Foto {{ item }}</button>
        </router-link>
        <Foto />
        <button @click="home">Home</button>
        <button @click="anterior">Anterior</button>
        <button @click="siguiente"> Siguiente</button>
    </div>
</template>

<script>
import Foto from '@/components/Fotografia.vue'
export default {
    components:{
        Foto
    },
    data(){
        return {
            fotos: [1,2,3,4,5]
        }
    },
    methods: {
        home() {
            this.$router.push('/')
        },
        anterior() {
            this.$router.go(-1)
        }, 
        siguiente (){
            this.$router.go(1)
        }
    },
}
</script>