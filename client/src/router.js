import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Ebank from './views/E_bank.vue'
import Games from './views/Games.vue'
import Register from './views/Register.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/E_bank',
      name: 'E_bank',
      component: Ebank
    },
    {
      path: '/Games',
      name: 'Games',
      component: Games
    },
    {
      path: '/Register',
      name: 'register',
      component: Register
    },
    {
      path: '/Admin',
      name: 'admin',
      component: Admin

    }

  ]

})
