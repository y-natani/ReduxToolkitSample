import axios from 'axios'
import { END_POINT } from 'src/constant'

export const axiosPost = async (path: string, params: {}) =>
  await axios
    .post(`${END_POINT}${path}`, params)
    .then(response => response.data)
    .catch(error => console.log(error))

export const axiosGet = async (path: string) => {
  return await axios
    .get(`${END_POINT}${path}`)
    .then(response => response.data)
    .catch(error => console.log(error))
}
