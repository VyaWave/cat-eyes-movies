import axios from 'axios'
export const getActivitys = () => {
  return axios.get('/api/mock/banner').then(res => {
    return res
  }).catch(
    res => console.log('bad')
  )
}
