import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import { Collection, collect } from 'collect.js'
import { VueMaskDirective } from 'v-mask'
import moment from 'moment'

import './bootstrap';

import api from './axios.js'
import route from './route.js'



//components
import Vrow from './Components/Vrow.vue'
import Vcol from './Components/Vcol.vue'
import Vform from './Components/Vform.vue'
import Vbtn from './Components/Vbtn.vue'
import Vinput from './Components/Vinput.vue'
import Vfile from './Components/Vfile.vue'
import Bmodal from './Components/Bmodal.vue'
import Vsnackbar from './Components/Vsnackbar.vue'
import Vdialog from './Components/Vdialog.vue'
import Btable from './Components/Btable.vue'
import Vcontainer from './Components/Vcontainer.vue'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

//pages
import App from "./main/App.vue"
import HomeVue from './pages/Home.vue'
import MedicineImport from './pages/MedicineImport.vue'
import MedicineForm from './pages/MedicineForm.vue'
import NotFoundVue from './pages/NotFound.vue'


//bootstrap
import './bootstrap';
import * as bootstrap from 'bootstrap'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'



const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
})

const app = createApp(App)

//components
app.component('Vcol', Vcol)
app.component('Vrow', Vrow)
app.component('Vform', Vform)
app.component('Vbtn', Vbtn)
app.component('Vinput', Vinput)
app.component('Vfile', Vfile)
app.component('Bmodal', Bmodal)
app.component('Vsnackbar', Vsnackbar)
app.component('Vdialog', Vdialog)
app.component('Btable', Btable)
app.component('Vcontainer', Vcontainer)
app.component('VueDatePicker', VueDatePicker)

//pages
app.component("Home", HomeVue)
app.component("MedicineForm", MedicineForm)
app.component("MedicineImport", MedicineImport)
app.component('NotFound', NotFoundVue)


app
    .use(route)
    .use(vuetify)
    .use(VueAxios, api)

app.directive("mask", VueMaskDirective)


app.config.globalProperties.$api = api

app.config.globalProperties.$bootstrap = bootstrap
app.config.globalProperties.$moment = moment
app.config.globalProperties.collect = collect
app.config.globalProperties.Collection = Collection


app.mount('#app')
