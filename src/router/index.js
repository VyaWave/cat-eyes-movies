import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello/Hello'
import StartView from '@/components/start/index'
import MoviesList from '@/components/movies/index'

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
      component: StartView
    },
    {
      path: '/',
      redirect: '/start'
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesList
    }
  ]
})
