import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueMeta)

fetch('/data/texts.json')
.then(res => res.json())
.then(json => {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('./views/Home.vue'),
        name: 'home',
        props: { data: json }
      }, {
        path: '/about',
        component: () => import('./views/About.vue'),
        name: 'about',
        props: { data: json }
      }, {
        path: '/projects',
        component: () => import('./views/Projects.vue'),
        name: 'projects',
        props: { data: json }
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
    ],
    // eslint-disable-next-line
    scrollBehavior: (to, from, savedPosition) => {
      return { x: 0, y: 0 }
    }
  })

  new Vue({
    created () {
      AOS.init({
        disable: 'mobile',
        once: true,
        duration: 1000,
        easing: 'cubic-bezier(0.72, 0, 0.21, 1)'
      })
    },
    render: h => h(App),
    router
  }).$mount('#App')
})
