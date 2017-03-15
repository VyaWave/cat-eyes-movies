import { getActivitys } from '../../service/getDate'
import { getMovieList, getLoadStatus } from '@/store/mutation-type'
const moviesListVuex = {
  state: {
    'test': '',
    'loading': false
  },
  mutations: {
    [getMovieList] (state, data) {
      console.log('data', data.data)
      state.test = data.data
    },
    [getLoadStatus] (state, status) {
      state.loading = status
    }
  },
  actions: {
    async getSchoolActivity ({commit, store}, payload) {
      commit(getLoadStatus, true)
      let data = await getActivitys()
      commit(getMovieList, data)
      commit(getLoadStatus, false)
    }
  },
  getters: {
  }
}
export default moviesListVuex
