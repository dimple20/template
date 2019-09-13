import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// image box
var VueClazyLoad = require('vue-clazy-load')

import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad);
import "vue-image-lightbox/dist/vue-image-lightbox.min.css"

// slider
import { VueFlux, Transitions } from 'vue-flux';
Vue.use(VueFlux, Transitions);
import Carousel3d from 'vue-carousel-3d';
Vue.use(Carousel3d);



import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  faLocationArrow,
  faPhoneAlt,
  faStar,
  faMapMarkerAlt,
  faPaintBrush,
  faComments,
  faPlayCircle,
  faInfoCircle,
  faGift,
  faTicketAlt,
  faFilm,
  faCreditCard,
  faSignInAlt,
  
} from '@fortawesome/free-solid-svg-icons'; // fas
import {
  faEnvelope,
  faClock,
  faUserCircle,
  faCheckCircle,
  

} from '@fortawesome/free-regular-svg-icons'; // far
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faPinterest,
  faApple,



} from '@fortawesome/free-brands-svg-icons'; // fab
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome';



library.add(faLocationArrow, faPhoneAlt, faStar, faMapMarkerAlt, faPaintBrush, faComments,faPlayCircle,faInfoCircle,faGift,faTicketAlt,faFilm,faCreditCard,faSignInAlt); // fas
library.add(faEnvelope, faClock, faUserCircle, faCheckCircle); // far
library.add(faTwitter, faFacebookF, faGooglePlusG, faPinterest,faApple); // fab




Vue.use(BootstrapVue);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);



Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
