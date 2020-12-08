import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//! vue add vuetify
import vuetify from './plugins/vuetify';

//! npm i vue-textarea-autosize
import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize);

//! npm i firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC_2wnsmS_SWbKj6yZvdpVZz0iLAFIoo_I",
    authDomain: "vue-calendario-f9e3b.firebaseapp.com",
    projectId: "vue-calendario-f9e3b",
    storageBucket: "vue-calendario-f9e3b.appspot.com",
    messagingSenderId: "561900794099",
    appId: "1:561900794099:web:2ad277a9970eb95f1f8786"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//! Traer toda la coleccion de firebase
export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')