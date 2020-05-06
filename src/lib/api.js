import axios from 'axios'

const apiKey = '&apiKey=6782c412ba294495afbcc7a6791b1125'

const newsUrl = 'https://newsapi.org/v2/top-headlines'

const weatherUrl = 'http://api.weatherstack.com/'

const weatherApiKey = '851110325e8ed3acbc16f9bc843ac101'


export const getAllNews = (country) => {
  return axios.get(`${newsUrl}?country=${country}${apiKey}`)
}

export const filterCategory = (country, category) => {
  return axios.get(`${newsUrl}?country=${country}&category=${category}${apiKey}`)
}

export const getAllWeather = (city) => {
  return axios.get(`${weatherUrl}current?access_key=${weatherApiKey}&query=${city}`)
}

