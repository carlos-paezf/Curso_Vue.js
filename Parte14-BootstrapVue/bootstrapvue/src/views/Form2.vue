<template>
    <div role="group" class="mt-5">
        <b-container fluid>
            <b-row class="my-3">
                <b-col sm="2">
                    <label for="input-live">Form Select</label>
                </b-col>
                <b-col sm="10">
                    <b-form-select v-model="selected" :options="options1" class="mb-3">
                        <!-- This slot appears above the options from 'options' prop -->
                        <template #first>
                            <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                        </template>
                        <!-- These options will appear after the ones from 'options' prop -->
                        <b-form-select-option value="C">Option C</b-form-select-option>
                        <b-form-select-option value="D">Option D</b-form-select-option>
                    </b-form-select>
                </b-col>
            </b-row>

            <b-row class="my-3">
                <b-col sm="2">
                    <label for="input-live">Radio Button</label>
                </b-col>
                <b-col sm="auto">
                    <b-form-radio-group v-model="value" :options="options2" :state="state" name="radio-validation" stacked>
                        <b-form-invalid-feedback :state="state">Please select one</b-form-invalid-feedback>
                        <b-form-valid-feedback :state="state">Thank you</b-form-valid-feedback>
                    </b-form-radio-group>
                </b-col>
            </b-row>

            <b-row class="my-3">
                <b-col sm="2">
                    <label for="input-live">Checkbox</label>
                </b-col>
                <b-col sm="10">
                    <b-form-checkbox v-model="checked" name="check-button" switch>
                        Switch Checkbox <b>(Checked: {{ checked }})</b>
                    </b-form-checkbox>

                    <b-form-group>
                        <template #label>
                            <b>Choose your flavours:</b><br>
                            <b-form-checkbox
                                v-model="allSelected"
                                :indeterminate="indeterminate"
                                aria-describedby="flavours"
                                aria-controls="flavours"
                                @change="toggleAll"
                            >
                            {{ allSelected ? 'Un-select All' : 'Select All' }}
                            </b-form-checkbox>
                        </template>

                            <b-form-checkbox-group
                                id="flavors"
                                v-model="selectedArray"
                                :options="flavours"
                                name="flavors"
                                class="ml-4"
                                aria-label="Individual flavours"
                                stacked
                            >
                            </b-form-checkbox-group>
                        </b-form-group>

                        <div>
                            Selected: <strong>{{ selectedArray }}</strong><br>
                            All Selected: <strong>{{ allSelected }}</strong><br>
                            Indeterminate: <strong>{{ indeterminate }}</strong>
                        </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Form2',
    data() {
        return {
            selected: null,
            options1: [
                { text: 'Item 1', value: 'first' },
                { text: 'Item 2', value: 'second' },
                { html: '<b>Item</b> 3', value: 'third', disabled: true },
                { text: 'Item 4' },
                { text: 'Item 5', value: { foo: 'bar', baz: true } }
            ],
            value: null,
            options2: [
                { text: 'First radio', value: 'first' },
                { text: 'Second radio', value: 'second' },
                { text: 'Third radio', value: 'third' }
            ],
            checked: false,
            flavours: [
                'Orange', 
                'Grape', 
                'Apple', 
                'Lime', 
                'Very Berry'
            ],
            selectedArray: [],
            allSelected: false,
            indeterminate: false
        }
    },
    computed: {
        state() {
            return Boolean(this.value)
        },
    },
    methods: {
        toggleAll(checked) {
            this.selectedArray = checked ? this.flavours.slice() : []
        }
    },
    watch: {
        selectedArray(newVal, oldVal) {
            // Handle changes in individual flavour checkboxes
            if (newVal.length === 0) {
                this.indeterminate = false
                this.allSelected = false
            } else if (newVal.length === this.flavours.length) {
                this.indeterminate = false
                this.allSelected = true
            } else {
                this.indeterminate = true
                this.allSelected = false
            }
        }
    }
}
</script>