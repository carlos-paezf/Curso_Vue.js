<template>
    <div>
        <h1>Esta es la pagina de Query Params</h1>
        <router-link :to="{query :{seccion: 1}}">1</router-link> |
        <router-link :to="{query :{seccion: 2}}">2</router-link> |
        <router-link :to="{query :{seccion: 3}}">3</router-link> |
        <router-link :to="{query :{seccion: 4}}">4</router-link> |
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    watch:{
        "$route.query.seccion": {
            immediate: true,
            handler(seccion){
                console.log(`Seccion a cambiado a: ${seccion}`);
            }
        }
    }
}
</script>