import axios from 'axios'

const apiKey = '&apiKey=cc76af5239764bb5a43a427e3746fdb8'

const newsUrl = 'https://newsapi.org/v2/top-headlines'

export const getAllNews = () => {
  return axios.get(`${newsUrl}?country=us${apiKey}`)
}

export const businessPage = () => {
  return axios.get(`${newsUrl}?country=us&category=business${apiKey}`)
}
// export const businessPage = () => {
//   return axios.get(`${newsUrl}?country=us&category=business${apiKey}`)
// }
// export const businessPage = () => {
//   return axios.get(`${newsUrl}?country=us&category=business${apiKey}`)
// }
// export const businessPage = () => {
//   return axios.get(`${newsUrl}?country=us&category=business${apiKey}`)
// }
// export const businessPage = () => {
//   return axios.get(`${newsUrl}?country=us&category=business${apiKey}`)
// }
// export const businessPage = () => {
//   return axios.get(`${newsUrl}?country=us&category=business${apiKey}`)
// }

