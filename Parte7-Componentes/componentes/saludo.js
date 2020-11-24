Vue.component('saludo', {
    //! es6-string-html
    template: /*html*/ `
        <div>
            <h1>{{ saludo }} </h1>
        </div>
    `,
    data() {
        return {
            saludo: 'Componentes en Vue.js'
        }
    }
})