<template>
    <v-container>
        <v-row class="fill-height">
            <v-col>
                <v-sheet height="64">
                    <v-toolbar flat color="white">

                        <!-- Botón Agregar Evento -->
                        <v-btn color="red" outlined class="mr-5" @click="dialog = !dialog">
                            Agregar Evento
                        </v-btn>

                        <v-btn outlined class="mr-4" @click="setToday">
                            Hoy
                        </v-btn>
                        <v-btn fab text small @click="prev">
                            <v-icon small>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn fab text small @click="next">
                            <v-icon small>mdi-chevron-right</v-icon>
                        </v-btn>
                        <v-toolbar-title>{{ title }}</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-menu bottom right>
                            <template v-slot:activator="{ on }">
                                <v-btn outlined v-on="on">
                                    <span>{{ typeToLabel[type] }}</span>
                                    <v-icon right>mdi-menu-down</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item @click="type = 'day'">
                                    <v-list-item-title>Día</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="type = 'week'">
                                    <v-list-item-title>Semana</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="type = 'month'">
                                    <v-list-item-title>Mes</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="type = '4day'">
                                    <v-list-item-title>4 dias</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-toolbar>
                </v-sheet>
                <v-sheet height="600">
                    <v-calendar ref="calendar" v-model="focus" color="primary" :events="events" :event-color="getEventColor" 
                        :event-margin-bottom="3" :now="today" :type="type" locale="es" :short-weekdays="false" :weekdays="[0, 1, 2, 3, 4, 5, 6]"
                        @click:event="showEvent"  @click:more="viewDay" @click:date="viewDay" @change="updateRange">
                    </v-calendar>

                    <!-- Agregar Modal Agregar Evento -->
                    <v-dialog v-model="dialog" width="600">
                        <v-card class="ma-auto">
                            <v-toolbar color="red accent-3" dark>
                                <v-toolbar-title>Añadir un nuevo evento</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon v-if="currentlyEditing !== selectedEvent.id" @click.stop="dialog = !dialog">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-card-text>
                                <v-form @submit.prevent="addEvent">
                                    <v-text-field type="text" label="Agregar nombre" v-model="name"></v-text-field>
                                    <v-text-field type="text" label="Agregar detalle" v-model="details"></v-text-field>
                                    <v-text-field type="date" label="Inicio de evento" v-model="start"></v-text-field>
                                    <v-text-field type="date" label="Fin de evento" v-model="end"></v-text-field>
                                    <v-text-field type="color" label="Color de evento" v-model="color"></v-text-field>
                                    <v-divider class="mt-3"></v-divider>
                                    <v-btn outlined type="sumbit" color="green darken-2" dark class="mr-5" @click.stop="dialog = !dialog">Agregar</v-btn>
                                    <v-btn outlined color="error" dark class="mr-5" @click.stop="dialog = !dialog">Cancelar</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-dialog>

                    <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
                        <v-card color="grey lighten-4" min-width="350px" flat >
                            <!-- Agregar Funcionalidades Editar y Eliminar -->
                            <v-toolbar :color="selectedEvent.color" dark>
                                <v-btn icon v-if="currentlyEditing !== selectedEvent.id" @click.prevent="editarEvento(selectedEvent)">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn icon v-if="currentlyEditing === selectedEvent.id" @click.prevent="actualizarEvento(selectedEvent)">
                                    <v-icon>mdi-content-save</v-icon>
                                </v-btn>
                                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon>
                                    <v-icon>mdi-heart</v-icon>
                                </v-btn>
                                <v-btn icon @click="eliminarEvento(selectedEvent)">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-card-text>
                                <v-form v-if="currentlyEditing !== selectedEvent.id">
                                    <span v-html="selectedEvent.details"></span>
                                </v-form>
                                <v-form v-else>
                                    <v-text-field type="text" v-model="selectedEvent.name" label="Editar nombre"></v-text-field>
                                    <textarea-autosize v-model="selectedEvent.details" type="text" style="width: 100%" :min-height="100"></textarea-autosize>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn text color="secondary" @click="selectedOpen = false">
                                    Cancelar
                                </v-btn>
                                <v-btn text v-if="currentlyEditing === selectedEvent.id" @click.prevent="actualizarEvento(selectedEvent)">
                                    Guardar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-menu>
                </v-sheet>
            </v-col>
        </v-row>

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

    import { db } from '../main'

    export default {
        data: () => ({
            today: new Date().toISOString().substr(0, 10),
            focus: new Date().toISOString().substr(0, 10),
            type: 'month',
            typeToLabel: {
                month: 'Mes',
                week: 'Semana',
                day: 'Día',
                '4day': '4 Dias',
            },
            start: null,
            end: null,
            selectedEvent: {},
            selectedElement: null,
            selectedOpen: false,
            events: [],
            // Adicionales...
            name: null,
            details: null,
            color: '#1976D2',
            dialog: false,
            currentlyEditing: null,
            snackbar: false,
            mensaje: '',
        }),
        
        computed: {
            title () {
                const { start, end } = this
                if (!start || !end) {
                    return ''
                }

                const startMonth = this.monthFormatter(start)
                const endMonth = this.monthFormatter(end)
                const suffixMonth = startMonth === endMonth ? '' : endMonth

                const startYear = start.year
                const endYear = end.year
                const suffixYear = startYear === endYear ? '' : endYear

                const startDay = start.day + this.nth(start.day)
                const endDay = end.day + this.nth(end.day)

                switch (this.type) {
                    case 'month':
                        return `${startMonth} ${startYear}`
                    case 'week':
                    case '4day':
                        return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
                    case 'day':
                        return `${startMonth} ${startDay} ${startYear}`
                }
                return ''
            },
            monthFormatter () {
                return this.$refs.calendar.getFormatter({
                    timeZone: 'UTC', month: 'long',
                })
            },
        },

        created () {
            this.getEvents();
        },

        mounted () {
            this.$refs.calendar.checkChange();
        },

        methods: {

            //! Metodos creados para mas funcionalidades
            async getEvents(){
                try {
                    //? Llamar la coleccion que tengo en Cloud Firestore
                    const snapshot = await db.collection('eventos').get();
                    const events = [];
                    snapshot.forEach(doc => {
                        console.log(doc.data());
                        let eventoData = doc.data();
                        eventoData.id = doc.id;
                        events.push(eventoData);
                    })
                    this.events = events;
                    this.snackbar = true;
                    this.mensaje = 'Se han cargado los eventos';
                } catch (error) {
                    console.log(error);
                }
            },
            async addEvent () {
                try {
                    if (this.name && this.start && this.end) {
                        await db.collection('eventos').add({
                            name: this.name,
                            details: this.details,
                            start: this.start,
                            end: this.end,
                            color: this.color
                        })
                        this.getEvents();
                        this.name = null;
                        this.details = null;
                        this.start = null;
                        this.end = null;
                        this.color = '#1976D2';
                        this.snackbar = true;
                        this.mensaje = 'Se ha añadido un nuevo evento';
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            async eliminarEvento (event) {
                try {
                    await db.collection('eventos').doc(event.id).delete();
                    this.selectedOpen = false;
                    this.getEvents();
                    this.snackbar = true;
                    this.mensaje = 'Se ha eliminado el evento';
                } catch (error) {
                    console.log(error);
                }
            },
            editarEvento(event) {
                this.currentlyEditing = event.id;
            },
            async actualizarEvento(event) {
                try {
                    await db.collection('eventos').doc(event.id).update({
                        name: event.name,
                        details: event.details
                    });
                    this.selectedOpen = false;
                    this.currentlyEditing = null;
                    this.snackbar = true;
                    this.mensaje = 'Se ha editado el evento seleccionado';
                } catch (error) {
                    console.log(error);
                }
            },

            //! Metodos propios del Calendario de Vuetify
            viewDay ({ date }) {
                this.focus = date
                this.type = 'day'
            },
            getEventColor (event) {
                return event.color
            },
            setToday () {
                this.focus = this.today
            },
            prev () {
                this.$refs.calendar.prev()
            },
            next () {
                this.$refs.calendar.next()
            },
            showEvent ({ nativeEvent, event }) {
                const open = () => {
                    this.selectedEvent = event
                    this.selectedElement = nativeEvent.target
                    setTimeout(() => this.selectedOpen = true, 10)
                }

                if (this.selectedOpen) {
                    this.selectedOpen = false
                    setTimeout(open, 10)
                } else {
                    open()
                }

                nativeEvent.stopPropagation()
            },
            updateRange ({ start, end }) {
                // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
                this.start = start
                this.end = end
            },
            nth (d) {
                return d > 3 && d < 21
                    ? 'th'
                    : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
            },
        },
    }
</script>