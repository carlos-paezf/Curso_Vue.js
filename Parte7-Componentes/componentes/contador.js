Vue.component('contador', {
    template: /*html*/ `
    <div>
        <h3>
            <button class="btn btn-danger btn-sm" @click="numero++">
                <span class="material-icons my-1">add</span>
            </button>
            Contador: {{ numero }}
        </h3>
    </div>
    `,
    data() {
        return {
            numero: 0,
        }
    }
})