import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      name: 'home',
      meta: {title: 'Gaëtan Lefebvre | Portfolio'}
    }, {
      path: '/about',
      component: () => import('./views/About.vue'),
      name: 'about',
      meta: {title: 'Gaëtan Lefebvre | About'}
    }, {
      path: '/contact',
      component: () => import('./views/Contact.vue'),
      name: 'contact',
      meta: {title: 'Gaëtan Lefebvre | Contact'}
    }, {
      path: '/projects',
      component: () => import('./views/Projects.vue'),
      name: 'projects',
      meta: {title: 'Gaëtan Lefebvre | Projects'}
    }, {
      path: '/projects/pocketcare',
      component: () => import('./views/projects/Pocketcare.vue'),
      name: 'pocketcare',
      meta: {title: 'Gaëtan Lefebvre | Pocketcare'}
    }, {
      path: '/projects/tesla',
      component: () => import('./views/projects/Tesla.vue'),
      name: 'tesla',
      meta: {title: 'Gaëtan Lefebvre | Tesla'}
    }, {
      path: '/projects/buddy-buddy',
      component: () => import('./views/projects/BuddyBuddy.vue'),
      name: 'buddy-buddy',
      meta: {title: 'Gaëtan Lefebvre | Buddy Buddy'}
    }, {
      path: '/projects/',
      component: () => import('./views/projects/Personal.vue'),
      name: 'personal',
      meta: {title: 'Gaëtan Lefebvre | Personal'}
    }, {
      path: '*',
      component: () => import ('./views/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
