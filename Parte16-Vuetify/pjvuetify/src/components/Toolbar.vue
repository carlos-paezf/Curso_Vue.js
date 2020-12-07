<template>
    <div>
        <!-- Toolbar fijo en la pagina con iconos -->
        <v-toolbar app dark>
            <!-- Cada vez que presiono el icono, aparece el menu lateral -->
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Proyecto de Prueba</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- Seccion para botones que sirvan de enlace -->
            <router-link to="/">
                <v-btn text>Home</v-btn>
            </router-link>
            <router-link to="/botones">
                <v-btn text>Botones</v-btn> 
            </router-link>
            <router-link to="/cards">
                <v-btn text>Cards</v-btn>
            </router-link>
            
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-export</v-icon>
            </v-btn>
        </v-toolbar>

        <!-- Menu lateral con items varios -->
        <v-navigation-drawer app v-model="drawer" temporary dark>
            <v-list nav dense>
                <v-list-item class="px-2">

                    <!-- Solucion para centrar el avatar -->
                    <v-layout column align-center>
                        <v-flex>
                            <v-list-item-avatar>
                                <v-img src="https://avatars1.githubusercontent.com/u/55883267?s=460&u=050d13a89d2eb274fa862918ce1d2d036d4e037c&v=4"></v-img>
                            </v-list-item-avatar>
                        </v-flex>
                    </v-layout>
                </v-list-item>

                <!-- Seccion para enlaces de info -->
                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="title my-3">
                            carlos-paezf
                        </v-list-item-title>
                        <v-list-item-subtitle>https://github.com/carlos-paezf/Curso_Vue.js</v-list-item-subtitle>
                        <v-btn class="my-3">Editar Perfil</v-btn>
                    </v-list-item-content>
                </v-list-item>

                <!-- Seccion divisoria entre las diferentes secciones -->
                <v-divider class="mb-10 mt-5"></v-divider>

                <!-- Elementos que se encuentran dentro del menu lateral -->
                <v-list-item-group v-model="group" active-class="white--text text--accent-4">
                    <!-- Estos items tambien se puden extraer con un bucle desde el data de script -->
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-folder</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Mis Archivos</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account-multiple</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Amigos</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-star</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Favoritos</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'Toolbar',
    data: () => ({
        drawer: false,
        group: null
    }),
    watch: {
        group () {
            this.drawer = true
        },
    },
}
</script>