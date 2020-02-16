import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import MovieList from './components/MovieList.vue';
import MovieAdd from './components/MovieAdd.vue';
import MovieItem from './components/MovieItem.vue';

Vue.use(VueRouter);
Vue.use(Vuetify)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: MovieList },
  { path: '/add', component: MovieAdd },
  { path: '/movie/:id', component: MovieItem }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
