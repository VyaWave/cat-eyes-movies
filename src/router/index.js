import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/views/profile/index'
import CinemasView from '@/views/cinemas/index'
import MoviesList from '@/views/movies/index'
import CitiesChooser from '@/views/cities'
import MovieDetail from '@/views/movie-detail'
import StartView from '@/views/start'
import MoviePlayer from '@/views/movie-player'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/start',
      name: 'start',
      component: StartView
    },
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
      redirect: '/start'
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesList
    },
    {
      path: '/cities-chooser',
      name: 'cities-chooser',
      component: CitiesChooser
    },
    {
      path: '/movies/movie-detail',
      component: MovieDetail
    },
    {
      path: '/movie-player',
      component: MoviePlayer
    }
  ]
})
