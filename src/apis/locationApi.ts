import axios from 'axios'

const locationApi = axios.create({
  baseURL: process.env.REACT_APP_LOCATION_BASE_URL,
  params: {
    limit: 1,
    language: 'en',
    country: 'us',
    access_token: process.env.REACT_APP_MAPBOX_TOKEN,
  },
})

export default locationApi
