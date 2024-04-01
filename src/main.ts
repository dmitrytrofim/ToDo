import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import components from '@components/index.ts';

const pinia = createPinia();
const app = createApp(App);

components.forEach((comp: any) => app.component(comp.name, comp));

app.use(pinia);
// app.use(router);

app.mount('#app');
