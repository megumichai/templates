import { createApp } from 'vue'

import App from '@/app'
import { router } from '@/router'

import './styles/globals.css'

createApp(App).use(router).mount('#app')
