import axios from 'axios'

const locationApi = axios.create({
  baseURL: process.env.LOCATION_BASE_URL,
  params: {
    limit: 1,
    language: 'en',
    country: 'us',
    access_token: process.env.MAPBOX_TOKEN,
  },
})

export default locationApi
