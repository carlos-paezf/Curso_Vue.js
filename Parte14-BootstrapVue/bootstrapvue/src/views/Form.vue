<template>
    <div role="group" class="mt-5">
        <h1>Formularios</h1>
        <b-container fluid>
            <b-row class="my-3">
                <b-col sm="2">
                    <label for="input-live">Name:</label>
                </b-col>
                <b-col sm="10">
                    <b-form-input
                        id="input-live"
                        v-model="name"
                        :state="nameState"
                        aria-describedby="input-live-help input-live-feedback"
                        placeholder="Enter your name"
                        trim></b-form-input>

                    <!-- This will only be shown if the preceding input has an invalid state -->
                    <b-form-invalid-feedback id="input-live-feedback">
                    Enter at least 3 letters
                    </b-form-invalid-feedback>

                    <!-- This is a form text block (formerly known as help block) -->
                    <b-form-text id="input-live-help" class="mb-2">Your full name is: {{ name }}</b-form-text>
                </b-col>
                
                <b-col sm="2">
                    <label for="input-live">Datalist Support: </label>
                </b-col>
                <b-col sm="10">
                    <b-form-input list="my-list-id"></b-form-input>
                    <datalist id="my-list-id">
                        <option>Manual Option</option>
                        <option v-for="(size, index) in sizes" :key="index">{{ size }}</option>
                    </datalist>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data(){
        return{
            name: '',
            sizes: ['Small', 'Medium', 'Large', 'Extra Large']
        }
    },
    computed: {
        nameState() {
            return this.name.length > 2 ? true : false
        }
    }
}
</script>