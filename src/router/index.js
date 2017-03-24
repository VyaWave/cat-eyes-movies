import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/views/profile/index'
import CinemasView from '@/views/cinemas/index'
import MoviesList from '@/views/movies/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/cinemas',
      name: 'cinemas',
      component: CinemasView
    },
    {
      path: '/',
      redirect: '/movies'
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesList
    }
  ]
})
