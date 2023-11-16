import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import { Collection, collect } from 'collect.js'

import './bootstrap';

//helpers
import api from './axios.js'

import route from './route.js'

//components
import App from "./main/App.vue"
import HomeVue from './Pages/Home.vue'

//bootstrap
import './bootstrap';
import * as bootstrap from 'bootstrap'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.min.css';


const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
})

const app = createApp(App)

app.component("Home", HomeVue)

app
    .use(route)
    .use(vuetify)
    .use(VueAxios, api)


app.config.globalProperties.$api = api

app.config.globalProperties.$bootstrap = bootstrap
app.config.globalProperties.collect = collect
app.config.globalProperties.Collection = Collection


app.mount('#app')

