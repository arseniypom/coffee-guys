import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
})

export const fetchCoffee = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false))
  axios.get(`/coffee?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`).then(({data}) => {
    dispatch(setCoffee(data))
  })
}

export const setCoffee = (items) => ({
  type: 'SET_COFFEE',
  payload: items
});
