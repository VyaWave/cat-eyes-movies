import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/hello/Hello'
import CinemasView from '@/views/cinemas/index'
import MoviesList from '@/views/movies/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/cinemas',
      name: 'cinemas',
      component: CinemasView
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
