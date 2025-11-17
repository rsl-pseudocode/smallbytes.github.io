import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#161616',
          secondary: '#cf8e00',
          accent: '#ffb224',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          background: '#212121',
          surface: '#161616',
        }
      }
    }
  }
})

createApp(App).use(vuetify).mount('#root')