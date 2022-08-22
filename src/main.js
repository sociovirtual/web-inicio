import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { createMetaManager } from 'vue-meta';
import './styles.css';

createApp(App)
    .use(router)
    .use(createMetaManager())
    .mount("#app");