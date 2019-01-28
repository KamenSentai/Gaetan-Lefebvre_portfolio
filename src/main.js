import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueMeta)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      name: 'home'
    }, {
      path: '/about',
      component: () => import('./views/About.vue'),
      name: 'about'
    }, {
      path: '/contact',
      component: () => import('./views/Contact.vue'),
      name: 'contact'
    }, {
      path: '/projects',
      component: () => import('./views/Projects.vue'),
      name: 'projects'
    }, {
      path: '/projects/pocketcare',
      component: () => import('./views/projects/Pocketcare.vue'),
      name: 'pocketcare'
    }, {
      path: '/projects/tesla',
      component: () => import('./views/projects/Tesla.vue'),
      name: 'tesla'
    }, {
      path: '/projects/buddy-buddy',
      component: () => import('./views/projects/BuddyBuddy.vue'),
      name: 'buddy-buddy'
    }, {
      path: '/projects/personal',
      component: () => import('./views/projects/Personal.vue'),
      name: 'personal'
    }, {
      path: '*',
      component: () => import ('./views/NotFound.vue')
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
