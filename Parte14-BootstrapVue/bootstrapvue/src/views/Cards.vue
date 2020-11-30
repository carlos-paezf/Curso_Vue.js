<template>
    <div class="mt-5">
        <b-container>
            <b-row align="center">
                <b-col cols="6" md="6">
                    <b-button-group vertical>
                        <b-button variant="success">Success</b-button>
                        <b-button variant="info">Info</b-button>
                        <b-button variant="primary">Primary</b-button>
                        <b-button variant="warning">Warning</b-button>
                        <b-button variant="danger">Danger</b-button>
                        <b-button variant="dark">Dark</b-button>
                    </b-button-group>
                </b-col>
                <b-col cols="4" md="4">
                    <b-button-group vertical>
                        <b-button variant="outline-success">Outline Success</b-button>
                        <b-button variant="outline-info">Outline Info</b-button>
                        <b-button variant="outline-primary">Outline Primary</b-button>
                        <b-button variant="outline-warning">Outline Warning</b-button>
                        <b-button variant="outline-danger">Outline Danger</b-button>
                        <b-button variant="outline-dark">Outline Dark</b-button>
                    </b-button-group>
                </b-col>
            </b-row>
        </b-container>

        <b-container class="mt-5" align="center">
            <b-row>
                <b-col cols="4" md="4">
                    <b-card
                        title="Image Top"
                        sub-title="Subtitle"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        Simplemente la imagen arriba
                        </b-card-text>

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                </b-col>
                <b-col cols="4" md="4">
                    <b-card
                        title="Image Bottom"
                        sub-title="Subtitle"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-bottom
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        Simplemente la imagen abajo
                        </b-card-text>

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                </b-col>
                <b-col cols="4" md="4">
                    <b-card
                        overlay
                        img-src="https://earthsky.org/upl/2018/06/sun-pillar-6-25-2018-Peter-Gipson-sq-300x300.jpg"
                        img-alt="Card Image"
                        text-variant="white"
                        title="Image Overlay"
                        sub-title="Subtitle"
                    >
                        <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>

        <div class="mt-5">
            <b-card-group deck>
            <b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>

            <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>

            <b-card bg-variant="success" text-variant="white" header="Success" class="text-center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>
            </b-card-group>
        </div>
        <div class="mt-3">
            <b-card-group deck>
            <b-card bg-variant="info" text-variant="white" header="Info" class="text-center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>

            <b-card bg-variant="warning" text-variant="white" header="Warning" class="text-center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>

            <b-card bg-variant="danger" text-variant="white" header="Danger" class="text-center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>
            </b-card-group>
        </div>
        <div class="mt-3">
            <b-card-group deck>
            <b-card bg-variant="light" header="Light" class="text-center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>

            <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>

            <b-card header="Default" class="text-center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>
            </b-card-group>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cards"
}
</script>