import axios from 'axios'

const locationApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 1,
    language: 'en',
    country: 'us',
    access_token:
      'pk.eyJ1IjoiZ2dyYXppYTMwIiwiYSI6ImNsMXBiamlyMjA0a3YzcW55dmJwdGY3Y20ifQ.lTBt5lG_5VcemAMw8SXxzg',
  },
})

export default locationApi
