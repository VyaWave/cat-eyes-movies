import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello/Hello'
import Start from '@/components/start/appStart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/start',
      name: 'start',
      component: Start
    },
    {
      path: '/',
      redirect: '/start'
    }
  ]
})
