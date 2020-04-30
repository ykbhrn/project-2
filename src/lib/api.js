import axios from 'axios'

const newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=cc76af5239764bb5a43a427e3746fdb8'

export const getAllNews = () => {
  return axios.get(`${newsUrl}`)
}