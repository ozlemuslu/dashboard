import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import VueI18n from 'vue-i18n';
import store from './store';
import messages from './locale/i18n';
import router from './router'
import VModal from 'vue-js-modal';
import VTooltip from 'v-tooltip';
import Snotify from 'vue-snotify';

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('fa-icon', FontAwesomeIcon);
library.add(fas);
Vue.use(VueI18n);
Vue.use(VModal, { dynamic: true, dialog: true });
Vue.use(VTooltip);

Vue.use(Snotify, {
  global: {
    preventDuplicates: true,
  },
  toast: {
    timeout: 2000,
    showProgressBar: false,
    position: 'rightTop',
  },
});

const i18n = new VueI18n({
  locale: 'tr', // set locale
  messages, // set locale messages
});


Vue.config.productionTip = false;
Vue.config.lang = 'tr';

new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app');
i18n.locale = 'tr';

