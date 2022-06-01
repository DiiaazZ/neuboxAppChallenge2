require('./bootstrap');

import { createApp } from 'vue';

// IMPORTAMOS PAGINA PRINCIPAL
import App from './components/App.vue';

// IMPORTAMOS AXIOS VUE
import VueAxios from 'vue-axios';
import axios from 'axios';

// IMPORTAMOS ENRUTADOR VUE Y CONFIGURAMOS
import { routes } from './routes';
import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: routes
})

// INICIAMOS EL OBJETO, CARGANDO AXIOS, ROUTER Y VISTA A VUE.
const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');