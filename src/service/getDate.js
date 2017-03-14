import axios from 'axios'
export const getActivitys = () => {
  return axios.get('').then(res => {
    return 'test'
  }).catch(
    res => console.log('bad')
  )
}
