<template>
    <v-container grid-list-xl>
        <v-layout row wrap>
            
            <v-flex md6>
                <v-card class="mx-auto my-10" v-if="formAgregar">
                    <v-card-title>Añadir una nueva tarea</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="agregarTarea">
                            <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>
                            <v-textarea label="Descripción de la tarea" v-model="descripcion"></v-textarea>
                            <v-divider></v-divider>
                            <v-btn color="success" outlined block type="submit">Agregar tarea</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>

                <v-card class="mx-auto my-10" v-if="!formAgregar">
                    <v-card-title>Editar tarea</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="tareaEditada">
                            <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>
                            <v-textarea label="Descripción de la tarea" v-model="descripcion"></v-textarea>
                            <v-divider></v-divider>
                            <v-btn color="info" outlined block type="submit">Editar tarea</v-btn>
                            <v-divider></v-divider>
                            <v-btn color="error" outlined block @click="cancelarEdicion">Cancelar</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex md6>
                <v-card class="mx-auto mt-10 mb-3" v-for="(item, index) in listaTareas" :key="index">
                    <v-card-title>
                        <v-chip class="ma-0" color="deep-purple accent-4" outlined>
                            <v-icon left>mdi-wrench</v-icon>
                            {{ item.titulo }}
                        </v-chip>
                    </v-card-title>
                    <v-card-text>
                        {{ item.descripcion }}
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions class="mx-2">
                        <v-btn color="info" outlined @click="editarTarea(index)">Editar</v-btn>
                        <v-btn color="error" @click="eliminarTarea(item.id)">Eliminar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-layout>

        <v-snackbar v-model="snackbar" dark :timeout="timeout">
            {{ mensaje }}
            <template v-slot:action="{ attrs }">
                <v-btn color="info" text v-bind="attrs" @click="snackbar = !snackbar">
                    Cerrar
                </v-btn>
            </template>
        </v-snackbar>

    </v-container>
</template>


<script>
export default {
    name: 'Tareas',
    data() {
        return {
            listaTareas : [
                {
                    id: 1,
                    titulo: 'Tarea #01',
                    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et nulla molestias provident, ut quaerat quae. Quidem eveniet tempore repellendus omnis corrupti laudantium culpa? Minima nobis recusandae neque autem mollitia!'
                },
                {
                    id: 2,
                    titulo: 'Tarea #02',
                    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et nulla molestias provident, ut quaerat quae. Quidem eveniet tempore repellendus omnis corrupti laudantium culpa? Minima nobis recusandae neque autem mollitia!'
                },
            ],
            titulo: '',
            descripcion: '',
            snackbar: false,
            mensaje: '',
            timeout: 5000,
            formAgregar: true,
            indexTarea: '',
        }
    },
    methods: {
        agregarTarea() {
            if (this.titulo === '' || this.descripcion === '') {
                this.snackbar = true
                this.mensaje = 'Hay campos vacios'
            } else {
                this.listaTareas.push({
                    id: Date.now(),
                    titulo: this.titulo,
                    descripcion: this.descripcion
                })
                this.titulo = '' 
                this.descripcion = ''
                this.snackbar = true
                this.mensaje = 'La tarea ha sido añadida'
            }
        },
        eliminarTarea(id) {
            this.listaTareas = this.listaTareas.filter(e => e.id != id)
        },
        editarTarea(index) {
            this.formAgregar = false
            this.titulo = this.listaTareas[index].titulo
            this.descripcion = this.listaTareas[index].descripcion
            this.indexTarea = index
        },
        cancelarEdicion() {
            this.formAgregar = true
            this.snackbar = true
            this.mensaje = 'Edición cancelada'
        },
        tareaEditada() {
            this.listaTareas[this.indexTarea].titulo = this.titulo
            this.listaTareas[this.indexTarea].descripcion = this.descripcion
            this.formAgregar = true
            this.titulo = ''
            this.descripcion = ''
            this.snackbar = true
            this.mensaje = 'Se ha guardado la tarea editada'
        }
    }
}
</script>