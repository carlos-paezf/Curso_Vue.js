<template>
    <v-container grid-list-md>
        <v-layout row wrap>

            <v-flex xs12 md4>
                <v-card class="mx-auto" max-width="344">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
                    <v-card-title>
                        Tarjeta Desplegable
                    </v-card-title>
                    <v-card-subtitle>
                        La info esta escondida
                    </v-card-subtitle>
                    <v-card-actions>
                    <v-btn color="orange lighten-2" text>
                        Desplegar la información
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="show = !show">
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolores mollitia. Quisquam, totam! Sed illo nesciunt sunt commodi fugiat, labore consequatur voluptate consectetur, quo explicabo odio quae maiores, quas voluptas.
                        </v-card-text>
                    </div>
                    </v-expand-transition>
                </v-card>
            </v-flex>

            <v-flex xs12 md4>
                <v-layout align-center justify-center>
                    <v-card>
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/road.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                            <v-card-title>
                                Tarjeta 1
                            </v-card-title>
                        </v-img>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-bookmark</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-layout>

                <v-layout align-center justify-center>
                    <v-card>
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/plane.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                            <v-card-title>
                                Tarjeta 2
                            </v-card-title>
                        </v-img>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-bookmark</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-layout>
            </v-flex>

            <v-flex xs12 md4>
                <v-card class="mx-auto" color="#26c6da" dark max-width="400">
                    <v-card-title>
                    <v-icon large left>
                        mdi-twitter
                    </v-icon>
                    <span class="title font-weight-light">Twitter</span>
                    </v-card-title>
                    <v-card-text class="headline font-weight-bold">
                        "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                    </v-card-text>
                    <v-card-actions>
                    <v-list-item class="grow">
                        <v-list-item-avatar color="grey darken-3">
                            <v-img class="elevation-6" alt="" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Evan You</v-list-item-title>
                        </v-list-item-content>
                        <v-row align="center" justify="end">
                            <v-icon class="mr-1">
                                mdi-heart
                            </v-icon>
                            <span class="subheading mr-2">256</span>
                            <span class="mr-1">·</span>
                            <v-icon class="mr-1">
                                mdi-share-variant
                            </v-icon>
                            <span class="subheading">45</span>
                        </v-row>
                    </v-list-item>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Cards',
    data: () => ({
        show: false,
    })
}
</script>