import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueMeta)

fetch('/data/projects.json')
.then(res => res.json())
.then(json => {
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
        component: () => import('./views/Pocketcare.vue'),
        name: 'pocketcare',
        props: { data: json.pocketcare }
      }, {
        path: '/projects/tesla',
        component: () => import('./views/Tesla.vue'),
        name: 'tesla',
        props: { data: json.tesla }
      }, {
        path: '/projects/buddy-buddy',
        component: () => import('./views/BuddyBuddy.vue'),
        name: 'buddy-buddy',
        props: { data: json.buddybuddy }
      }, {
        path: '/projects/personal',
        component: () => import('./views/Personal.vue'),
        name: 'personal',
        props: { data: json.personal }
      }, {
        path: '*',
        component: () => import ('./views/NotFound.vue')
      }
    ]
  })

  new Vue({
    render: h => h(App),
    router
  }).$mount('#App')
})
