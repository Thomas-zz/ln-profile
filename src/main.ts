import Vue from 'vue';
import App from './App.vue';
import store from './store';
import "./style/reset.scss";

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

import { far } from '@fortawesome/free-regular-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText }

 from '@fortawesome/vue-fontawesome'

 

library.add(fas as any, far as any, fab as any)

 

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('font-awesome-layers', FontAwesomeLayers)

Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

// import VueI18n from 'vue-i18n'

// Vue.use(VueI18n);
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
