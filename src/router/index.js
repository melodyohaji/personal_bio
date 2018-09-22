import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Gallery from '@/components/Gallery'
import Registration from '@/components/Registration'
import Project from '@/components/Project'
import notFound from '@/components/NotFound'

// Tutorial on Firebase
import firebase from 'firebase'

import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Settings from '@/components/Settings'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },

    {
      path: '/projects',
      name: 'projects',
      component: Project
    },

    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
          requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: {
          requiresAuth: true
      }
    },
    { path: '*', 
      redirect: '/notFound' 
    } 
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/login')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router
 