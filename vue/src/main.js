import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from './router/index';

// Pinia
import { createPinia } from 'pinia'
const pinia = createPinia();

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
});

// Fontawesome core 
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGear, faDoorOpen, faBell, faBars, faGauge, faCalculator, faList, faTable, faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faGear, faDoorOpen, faBell, faBars, faGauge, faCalculator, faList, faTable, faUser);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(pinia);
app.use(vuetify);
app.use(router);
app.mount('#app');
