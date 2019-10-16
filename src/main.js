import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import _ from "lodash";//loadsh import package
Vue.use(VueAxios, axios)

// image box
var VueClazyLoad = require('vue-clazy-load')

import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad);

// slider
import {
  VueFlux,
  Transitions
} from 'vue-flux';
Vue.use(VueFlux, Transitions);

// using for 3d carsou
import Carousel3d from 'vue-carousel-3d';
Vue.use(Carousel3d);

// swaiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

//lazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
//scroll to
// var VueScrollTo = require('vue-scrollto');
import VueScrollTo from 'vue-scrollto'
// import VueScrollTo from 'vue-scrollto.js'
Vue.use(VueScrollTo)



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
  faUser,
  faSearch

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
  faSearchengin



} from '@fortawesome/free-brands-svg-icons'; // fab
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome';



library.add(faLocationArrow, faPhoneAlt, faStar, faMapMarkerAlt, faPaintBrush, faComments, faPlayCircle, faInfoCircle, faGift, faTicketAlt, faFilm, faCreditCard, faSignInAlt, faUser, faSearch); // fas
library.add(faEnvelope, faClock, faUserCircle, faCheckCircle, faSearchengin); // far
library.add(faTwitter, faFacebookF, faGooglePlusG, faPinterest, faApple); // fab




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
