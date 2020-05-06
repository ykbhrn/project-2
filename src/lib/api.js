import axios from 'axios'
const apiKey = process.env.REACT_APP_MY_SECRET_KEY_NEWS
const newsUrl = 'https://newsapi.org/v2/top-headlines'
const weatherKey = process.env.REACT_APP_MY_SECRET_KEY_WEATHER
const weatherURL = 'http://api.weatherstack.com/'
export const getAllNews = (country) => {
  return axios.get(`${newsUrl}?country=${country}&apiKey=${apiKey}`)
}
export const filterCategory = (country, category) => {
  return axios.get(`${newsUrl}?country=${country}&category=${category}&apiKey=${apiKey}`)
}
export const getAllWeather = (searchTerm) => {
  return axios.get(`${weatherURL}current?access_key=${weatherKey}&query=${searchTerm}`)
}