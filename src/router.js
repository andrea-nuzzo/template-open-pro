import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Features from './pages/Features.vue'
import Pricing from './pages/Pricing.vue'
import Blog from './pages/Blog.vue'
import BlogPost from './pages/BlogPost.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Help from './pages/Help.vue'
import SignIn from './pages/SignIn.vue'
import SignUp from './pages/SignUp.vue'
import ResetPassword from './pages/ResetPassword.vue'
import PageNotFound from './pages/PageNotFound.vue'
import becomeSalesperson from "./pages/BecomeSalespersonQ.vue";
import Tesseramento from './pages/Tesseramento.vue';
import subscription from "./pages/SubscriptionQ.vue";
import Servizio from "./pages/ServizioQ.vue";
import data from "./data/servizi.json";

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/features',
      component: Features
    },
    {
      path: '/pricing',
      component: Pricing
    },
    {
      path: '/blog',
      component: Blog
    },
    {
      path: '/blog-post',
      component: BlogPost
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/help',
      component: Help
    },
    {
      path: '/diventa-rappresentante/:token?',
      component: becomeSalesperson,
    },
    {
      path: '/subscription',
      component: subscription,
    },
    {
      path: '/:slug',
      name:'Servizio',
      component: Servizio,

      beforeEnter (to, from, next) {
        const exists = data.servizi.find(servizi => servizi.slug === to.params.slug)

        if (exists) {
          return next()
        } else {
          next({
            name: 'PageNotFound',
            params: {pathMatch: to.path.substring(1).split('/')},
            query: to.query,
            hash: to.hash,
          })
        }
      }
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/reset-password',
      component: ResetPassword
    },
    {
      path: '/tesseramento',
      component: Tesseramento
    },
    {
      path: '/:NotFound(.*)*',
      name:'PageNotFound',
      component: PageNotFound
    }
  ]
})

export default router
