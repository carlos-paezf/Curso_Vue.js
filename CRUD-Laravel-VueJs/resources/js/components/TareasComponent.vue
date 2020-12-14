<template>
    <div>
        <div class="card-body">
            <form @submit.prevent="agregar" v-if="!editarActivo">
                <h3 class="mb-3">Agregar notas:</h3>
                <input type="text" placeholder="Nombre:" class="form-control mb-2" v-model="nota.nombre">
                <input type="text" placeholder="Decripción:" class="form-control mb-2" v-model="nota.descripcion">
                <button class="btn btn-primary mt-2" type="submit">Crear nota</button>
            </form>

            <form @submit.prevent="editarNota(nota)" v-else>
                <h3 class="mb-3">Editar notas:</h3>
                <input type="text" placeholder="Nombre:" class="form-control mb-2" v-model="nota.nombre">
                <input type="text" placeholder="Decripción:" class="form-control mb-2" v-model="nota.descripcion">
                <button class="btn btn-outline-secondary mt-2" type="submit">Editar nota</button>
                <button class="btn btn-outline-danger mt-2" type="submit" @click="cancelarEdicion">Cancelar</button>
            </form>
        </div>

        <hr class="my-3">

        <div class="card-body">
            <h3 class="mb-3">Listado de Notas:</h3>
            <ul class="list-group">
                <li class="list-group-item" v-for="(item, index) in notas" :key="index">  
                    <span class="badge float-right">Editado: {{ item.updated_at }}</span>
                    <p><b><i>{{ item.nombre }}:</i></b></p> 
                    <p>{{ item.descripcion }}</p>
                    <button class="btn btn-outline-info" @click="editarFormulario(item)">Editar</button>
                    <button class="btn btn-outline-danger" @click="eliminarNota(item, index)">Eliminar</button>
                </li>
            </ul>
        </div>
    </div>
</template>


<script> 
export default {
    data() {
        return {
            notas: [],
            nota: {nombre: '', descripcion: ''},
            editarActivo: false,
        }
    },
    created() {
        axios.get('/notas').then(res => {
            this.notas = res.data;
        })
    },
    methods: {
        agregar() {
            if(this.nota.nombre.trim() === '' || this.nota.descripcion.trim() === ''){
                alert('Completa los campos vacios antes de guardar');
                return;
            }
            const parametros = {nombre: this.nota.nombre, descripcion: this.nota.descripcion};
            this.nota.nombre = '';
            this.nota.descripcion = '';
            axios.post('/notas', parametros).then(res => {
                this.notas.push(res.data)
            })
        },

        eliminarNota(item, index) {
            const confirmacion = confirm(`¿Deseas eliminar la nota: ${item.nombre}?`);
            if (confirmacion) {
                axios.delete(`/notas/${item.id}`).then(res =>{
                    this.notas.splice(index, 1);
                })
            }
        }, 
        
        editarFormulario(item) {
            this.editarActivo = true;
            this.nota.nombre = item.nombre;
            this.nota.descripcion = item.descripcion;
            this.nota.id = item.id;
        }, 

        editarNota(item) {
            const confirmacion = confirm(`¿Deseas guardar los cambios?`);
            if(confirmacion){
                const parametros = {nombre: item.nombre, descripcion: item.descripcion};
                axios.put(`/notas/${item.id}`, parametros).then(res =>{
                    const index = this.notas.findIndex(item => item.id === res.data.id);
                    this.notas[index].nombre = res.data.nombre;
                    this.notas[index].descripcion = res.data.descripcion;
                });
                this.editarActivo = false;
            }
        },
        
        cancelarEdicion() {
            this.editarActivo = false;
            this.nota = {nombre: '', descripcion: ''};
        }
    }
}
</script>