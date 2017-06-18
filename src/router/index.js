import Vue from 'vue'
import Router from 'vue-router'
// import ensure from '../utils/lazy'
import Profile from '@/views/profile/index'
import CinemasView from '@/views/cinemas/index'
import MoviesList from '@/views/movies/index'
import CitiesChooser from '@/views/cities'
import MovieDetail from '@/views/movie.detail'
import StartView from '@/views/start'
import MoviePlayer from '@/views/movie.player'
import CinemasDetailView from '@/views/cinema.detail'
import GlobalSerch from '@/views/global.search'
import MoreComment from '@/views/comments.more'
import MyOrders from '@/views/profile.order'
// const StartView = ensure(System.import('@/views/start'), 'StartView')
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
      name: 'movie-detail',
      component: MovieDetail
    },
    {
      path: '/movie-player',
      name: 'movie-player',
      component: MoviePlayer
    },
    {
      path: '/cinema-detail',
      name: 'cinema-detail',
      component: CinemasDetailView
    },
    {
      path: '/global-serch',
      name: 'global-serch',
      component: GlobalSerch
    },
    {
      path: '/more-comments',
      name: 'more-comments',
      component: MoreComment
    },
    {
      path: '/my-orders',
      name: 'my-orders',
      compeonent: MyOrders
    }
  ]
})
