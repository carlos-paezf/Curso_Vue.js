<template>
    <div>
        <h3>Este es un componente</h3>
        <ul>
            <li v-for="(item, index) in lista" :key="index"> {{ item.nombre }}: {{ item.descripcion }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            lista: [
                { nombre: 'html', descripcion: 'pagina en html' },
                { nombre: 'html', descripcion: 'pagina en html' },
                { nombre: 'html', descripcion: 'pagina en html' },
            ]
        }
    }
}
</script>